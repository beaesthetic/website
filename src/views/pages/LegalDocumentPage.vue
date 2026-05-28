<template>
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
.legal-document-page {
  padding-top: 140px;
  padding-bottom: 64px;
}

.legal-document-card {
  background: #fffdf8;
  border: 1px solid #eadfce;
  border-radius: 18px;
  padding: 32px 28px;
  box-shadow: 0 10px 30px rgba(77, 56, 30, 0.08);
  min-height: 320px;
}

.legal-document-state {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
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
