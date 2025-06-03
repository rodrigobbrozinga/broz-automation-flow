#!/bin/bash

# Aborta em caso de erro
set -e

echo "🛠️  Rodando build de produção..."
npm run build

echo "🚀 Publicando para a branch gh-pages..."

# Salva o nome da branch atual
CURRENT_BRANCH=$(git branch --show-current)

# Cria diretório temporário para armazenar o build
mkdir -p .gh-pages-temp
cp -r dist/* .gh-pages-temp

# Cria nova branch (ou troca para ela) sem histórico
git switch --orphan gh-pages

# Remove tudo da branch
git rm -rf . > /dev/null 2>&1 || true

# Copia o conteúdo do build
cp -r .gh-pages-temp/* .

# Remove pasta temporária
rm -rf .gh-pages-temp

# Adiciona CNAME (domínio personalizado)
echo "automacoesbroz.com.br" > CNAME

# Adiciona, commita e faz push
git add .
git commit -m "Deploy do site via gh-pages"
git push -f origin gh-pages

# Volta para a branch original
git switch "$CURRENT_BRANCH"

echo "✅ Deploy concluído com sucesso!"
