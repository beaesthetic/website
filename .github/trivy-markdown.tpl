{{- /* trivy-markdown.tpl */ -}}
{{- $critical := 0 -}}
{{- $high := 0 -}}
{{- $misconf := 0 -}}
{{- $vulns := 0 -}}
{{- $secrets := 0 -}}

{{- range . }}
  {{- range .Misconfigurations }}
    {{- if eq .Severity "CRITICAL" }}{{- $critical = add $critical 1 }}{{- end }}
    {{- if eq .Severity "HIGH" }}{{- $high = add $high 1 }}{{- end }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $misconf = add $misconf 1 }}{{- end }}
  {{- end }}
  {{- range .Vulnerabilities }}
    {{- if eq .Severity "CRITICAL" }}{{- $critical = add $critical 1 }}{{- end }}
    {{- if eq .Severity "HIGH" }}{{- $high = add $high 1 }}{{- end }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $vulns = add $vulns 1 }}{{- end }}
  {{- end }}
  {{- range .Secrets }}
    {{- if eq .Severity "CRITICAL" }}{{- $critical = add $critical 1 }}{{- end }}
    {{- if eq .Severity "HIGH" }}{{- $high = add $high 1 }}{{- end }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $secrets = add $secrets 1 }}{{- end }}
  {{- end }}
{{- end }}

# 🔒 Security Dashboard

| Metric | Count |
|---|---:|
| Critical | {{ $critical }} |
| High | {{ $high }} |
| Misconfigurations | {{ $misconf }} |
| Vulnerabilities | {{ $vulns }} |
| Secrets | {{ $secrets }} |

{{- if and (eq $critical 0) (eq $high 0) }}

✅ No HIGH or CRITICAL findings in this scan.

{{- else }}

> Focus first on HIGH and CRITICAL findings. Each entry below includes the affected target, what Trivy detected, and the most actionable remediation detail available in the scan output.

{{- end }}

---

{{- range . }}
  {{- $target := .Target -}}
  {{- $hasFindings := false -}}

  {{- range .Misconfigurations }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $hasFindings = true -}}{{- end }}
  {{- end }}
  {{- range .Vulnerabilities }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $hasFindings = true -}}{{- end }}
  {{- end }}
  {{- range .Secrets }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}{{- $hasFindings = true -}}{{- end }}
  {{- end }}

  {{- if $hasFindings }}

## `{{ $target }}`

  {{- $printedMisconfHeader := false -}}
  {{- range .Misconfigurations }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}
      {{- if not $printedMisconfHeader }}

### Misconfigurations
| Severity | ID | Title | Location |
|---|---|---|---|
      {{- $printedMisconfHeader = true -}}
      {{- end }}
| {{ .Severity }} | `{{ .ID }}` | {{ .Title }} | `{{ .CauseMetadata.Resource }}` |

<details>
<summary><strong>{{ .Severity }}</strong> {{ .ID }} — {{ .Title }}</summary>

**Status:** {{ .Status }}

{{- if .Description }}
**Why this matters:** {{ .Description }}

{{- end }}
{{- if .Message }}
**What Trivy found:** {{ .Message }}

{{- end }}
{{- if .Resolution }}
**Suggested fix:** {{ .Resolution }}

{{- end }}
{{- if .CauseMetadata.Resource }}
**Affected resource:** `{{ .CauseMetadata.Resource }}`

{{- end }}
{{- if .CauseMetadata.StartLine }}
**Code location:** lines {{ .CauseMetadata.StartLine }}-{{ .CauseMetadata.EndLine }}

{{- end }}
{{- if .PrimaryURL }}
**Reference:** {{ .PrimaryURL }}

{{- end }}
</details>
    {{- end }}
  {{- end }}

  {{- $printedVulnHeader := false -}}
  {{- range .Vulnerabilities }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}
      {{- if not $printedVulnHeader }}

### Vulnerabilities
| Severity | Package | CVE | Installed | Fixed |
|---|---|---|---|---|
      {{- $printedVulnHeader = true -}}
      {{- end }}
| {{ .Severity }} | `{{ .PkgName }}` | `{{ .VulnerabilityID }}` | `{{ .InstalledVersion }}` | `{{ .FixedVersion }}` |

<details>
<summary><strong>{{ .Severity }}</strong> {{ .VulnerabilityID }} in <code>{{ .PkgName }}</code></summary>

{{- if .Title }}
**Title:** {{ .Title }}

{{- end }}
{{- if .Description }}
**Why this matters:** {{ .Description }}

{{- end }}
**Installed version:** `{{ .InstalledVersion }}`

{{- if .FixedVersion }}
**Suggested fix:** upgrade to `{{ .FixedVersion }}` or later.

{{- else }}
**Suggested fix:** no fixed version is reported yet; review mitigations or dependency replacement.

{{- end }}
{{- if .PkgPath }}
**Dependency path:** `{{ .PkgPath }}`

{{- end }}
{{- if .PrimaryURL }}
**Reference:** {{ .PrimaryURL }}

{{- end }}
</details>
    {{- end }}
  {{- end }}

  {{- $printedSecretHeader := false -}}
  {{- range .Secrets }}
    {{- if or (eq .Severity "CRITICAL") (eq .Severity "HIGH") }}
      {{- if not $printedSecretHeader }}

### Secrets
| Severity | Rule | Title | Lines |
|---|---|---|---|
      {{- $printedSecretHeader = true -}}
      {{- end }}
| {{ .Severity }} | `{{ .RuleID }}` | {{ .Title }} | {{ .StartLine }}-{{ .EndLine }} |

<details>
<summary><strong>{{ .Severity }}</strong> {{ .RuleID }} — {{ .Title }}</summary>

**Match preview:** `{{ .Match }}`

**Code location:** lines {{ .StartLine }}-{{ .EndLine }}

**Suggested fix:** revoke or rotate the exposed credential, remove it from the repository, and move the value to a managed secret store.

</details>
    {{- end }}
  {{- end }}

---

  {{- end }}
{{- end }}