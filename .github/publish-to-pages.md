name: Deploy to GitHub Pages

on:
  workflow_dispatch:  # manual trigger — run from Actions tab or `gh workflow run`

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .   # root of repo — change to a subfolder if your site lives elsewhere, e.g. ./public

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4