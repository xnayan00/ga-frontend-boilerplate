# Boilerplate Front-end Moderno

Um boilerplate completo e profissional para desenvolvimento front-end com React, TypeScript, Tailwind CSS e muito mais.

## 🚀 Stack Tecnológica

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento
- **i18next** - Internacionalização (PT/EN)
- **Axios** - Cliente HTTP
- **Storybook** - Documentação de componentes
- **Bun** - Runtime e package manager
- **ESLint + Prettier** - Qualidade de código

## 📁 Estrutura de Pastas

```
src/
 ├── components/          # Componentes organizados por Atomic Design
 │    ├── atoms/         # Componentes básicos (Button, Avatar, etc)
 │    ├── molecules/     # Combinações de atoms
 │    ├── organisms/     # Componentes complexos
 │    └── templates/     # Templates de página
 ├── pages/              # Páginas da aplicação
 ├── routes/             # Configuração de rotas
 ├── context/            # Contexts do React
 ├── hooks/              # Custom hooks
 ├── utils/              # Funções utilitárias
 ├── api/                # Configuração de API (Axios)
 ├── services/           # Serviços de comunicação com API
 └── locales/            # Traduções (i18n)
```

## 🎯 Características

✅ **Atomic Design** - Estrutura organizada e escalável  
✅ **Internacionalização** - Suporte PT/EN pronto  
✅ **Documentação** - Storybook configurado  
✅ **Type-safe** - TypeScript em todo projeto  
✅ **Lint rigoroso** - ESLint com regras profissionais  
✅ **Design System** - Tailwind configurado com tokens semânticos  
✅ **API Ready** - Axios configurado com interceptors  

## 🛠️ Comandos

```bash
# Desenvolvimento
bun dev

# Build de produção
bun run build

# Lint
bun lint

# Formatação
bun format

# Storybook
bun storybook
```

## 📚 Regras de Código

- ✅ Uso de `function` para componentes (não arrow functions)
- ✅ Imports de tipos com `type`
- ✅ Um atributo por linha no JSX
- ✅ Proibido uso de `any`
- ✅ Ordem: imports → constantes → funções → useEffects → return

## 🎨 Design System

O projeto utiliza tokens semânticos do Tailwind para garantir consistência visual:

- `primary` - Cor primária (azul vibrante)
- `secondary` - Cor secundária (roxo)
- `accent` - Cor de destaque (verde/cyan)
- Gradientes prontos para uso
- Sombras elegantes
- Animações suaves

## 🌍 Internacionalização

Troque entre PT e EN facilmente:

```tsx
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();
i18n.changeLanguage('en'); // ou 'pt'
```

## 📖 Storybook

Documentação visual de componentes disponível em:

```bash
bun storybook
```

## 🔧 Configuração do Editor

O projeto inclui configurações para VSCode:
- Formatação automática ao salvar
- ESLint automático
- Prettier integrado

## 📝 Licença

MIT

---

**Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento front-end**
