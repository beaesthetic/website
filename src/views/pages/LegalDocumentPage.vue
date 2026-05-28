<template>
  <div class="legal-document-shell">
    <div class="legal-document-topbar">
      <a class="legal-document-home-link" href="/" rel="noopener noreferrer">BeAesthetic</a>
      <div class="legal-document-title">{{ pageTitle }}</div>
    </div>

    <v-container class="legal-document-page">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="legal-document-card">
            <div v-if="loading" class="legal-document-state">
              Caricamento documento...
            </div>
            <div v-else-if="error" class="legal-document-state">
              {{ error }}
            </div>
            <article v-else class="legal-document-content" v-html="renderedContent"></article>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { renderMarkdown } from '@/utils/markdown'

export default {
  name: 'LegalDocumentPage',
  data: () => ({
    content: '',
    error: '',
    loading: true,
  }),
  computed: {
    renderedContent() {
      return renderMarkdown(this.content)
    },
    pageTitle() {
      return this.$route.meta.title || 'Documento legale'
    },
    documentPath() {
      return this.$route.meta.documentPath
    }
  },
  watch: {
    '$route.fullPath': {
      immediate: true,
      handler() {
        this.loadDocument()
      }
    }
  },
  methods: {
    async loadDocument() {
      this.loading = true
      this.error = ''
      this.content = ''

      try {
        const response = await fetch(this.documentPath, {
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Impossibile caricare il documento.')
        }

        this.content = await response.text()
      } catch (error) {
        this.error = 'Documento non disponibile in questo momento.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.legal-document-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(238, 214, 183, 0.45), transparent 30%),
    linear-gradient(180deg, #f7efe5 0%, #fcfaf7 32%, #f7f2eb 100%);
}

.legal-document-topbar {
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 250, 244, 0.88);
  border-bottom: 1px solid rgba(137, 103, 72, 0.12);
  display: flex;
  justify-content: space-between;
  padding: 18px 28px;
  position: sticky;
  top: 0;
  z-index: 2;
}

.legal-document-home-link {
  color: #2d241c;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}

.legal-document-title {
  color: #6b5645;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}

.legal-document-page {
  padding-top: 48px;
  padding-bottom: 64px;
}

.legal-document-card {
  background: rgba(255, 253, 248, 0.94);
  border: 1px solid #eadfce;
  border-radius: 22px;
  padding: 40px 34px;
  box-shadow: 0 24px 60px rgba(77, 56, 30, 0.08);
  min-height: 320px;
}

.legal-document-state {
  color: #4b3d31;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .legal-document-topbar {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
    padding: 16px 18px;
  }

  .legal-document-page {
    padding-top: 24px;
    padding-bottom: 32px;
  }

  .legal-document-card {
    border-radius: 16px;
    padding: 24px 20px;
  }
}
</style>

<style>
.legal-document-content {
  color: #2b241c;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.7;
}

.legal-document-content h1,
.legal-document-content h2,
.legal-document-content h3 {
  color: #1d1812;
  line-height: 1.3;
  margin-top: 1.8rem;
}

.legal-document-content h1 {
  font-size: 2rem;
  margin-top: 0;
}

.legal-document-content h2 {
  font-size: 1.4rem;
}

.legal-document-content h3 {
  font-size: 1.1rem;
}

.legal-document-content p,
.legal-document-content li {
  font-size: 0.98rem;
}

.legal-document-content ul {
  padding-left: 1.25rem;
}

.legal-document-content a {
  color: #7b4f1d;
}

.legal-document-content code {
  background: #f3eadf;
  border-radius: 4px;
  padding: 0.05rem 0.3rem;
}
</style>
