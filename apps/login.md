# Plano de implementação da página de login

## Objetivo
Implementar a página de login no app React usando Vite, seguindo Atomic Design e pensando em reutilização para a futura página de cadastro.

## Estrutura proposta

### Componentes (Atomic Design)
- `src/components/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Logo.tsx`
- `src/components/molecules/`
  - `AuthForm.tsx`
  - `SocialLogin.tsx`
- `src/components/templates/`
  - `AuthPageTemplate.tsx`
- `src/components/pages/`
  - `LoginPage.tsx`

### Reuso futuro para cadastro
- O template de página (`AuthPageTemplate`) recebe:
  - `bannerSrc`
  - `heroTitle`
  - `heroSubtitle`
  - `children`
- O formulário (`AuthForm`) deve ser configurável via `fields`.
- A página de cadastro poderá reutilizar o template e trocar:
  - banner para `/banner-register.png`
  - campos para nome, e-mail, senha e confirmação de senha

## Recursos de imagem
- `/banner-login.png`
- `/github.png`
- `/gmail.png`

## Testes
- Cada componente deve ter teste co-locado.
- Exemplo inicial: `AuthForm.test.tsx` usando Vitest + React Testing Library.

## Passos
1. Criar pasta `src/components` e subpastas `atoms`, `molecules`, `templates`, `pages`.
2. Criar e implementar os arquivos listados acima.
3. Atualizar `src/App.tsx` para renderizar `LoginPage`.
4. Adicionar testes básicos para `AuthForm`.# Plano de implementação da página de login

## Objetivo
Implementar a página de login no app React usando Vite, seguindo Atomic Design e pensando em reutilização para a futura página de cadastro.

## Estrutura proposta

### Componentes (Atomic Design)
- `src/components/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Logo.tsx`
- `src/components/molecules/`
  - `AuthForm.tsx`
  - `SocialLogin.tsx`
- `src/components/templates/`
  - `AuthPageTemplate.tsx`
- `src/components/pages/`
  - `LoginPage.tsx`

### Reuso futuro para cadastro
- O template de página (`AuthPageTemplate`) recebe:
  - `bannerSrc`
  - `heroTitle`
  - `heroSubtitle`
  - `children`
- O formulário (`AuthForm`) deve ser configurável via `fields`.
- A página de cadastro poderá reutilizar o template e trocar:
  - banner para `/banner-register.png`
  - campos para nome, e-mail, senha e confirmação de senha

## Recursos de imagem
- `/banner-login.png`
- `/github.png`
- `/gmail.png`

## Testes
- Cada componente deve ter teste co-locado.
- Exemplo inicial: `AuthForm.test.tsx` usando Vitest + React Testing Library.

## Passos
1. Criar pasta `src/components` e subpastas `atoms`, `molecules`, `templates`, `pages`.
2. Criar e implementar os arquivos listados acima.
3. Atualizar `src/App.tsx` para renderizar `LoginPage`.
4. Adicionar testes básicos para `AuthForm`.# Plano de implementação da página de login

## Objetivo
Implementar a página de login no app React usando Vite, seguindo Atomic Design e pensando em reutilização para a futura página de cadastro.

## Estrutura proposta

### Componentes (Atomic Design)
- `src/components/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Logo.tsx`
- `src/components/molecules/`
  - `AuthForm.tsx`
  - `SocialLogin.tsx`
- `src/components/templates/`
  - `AuthPageTemplate.tsx`
- `src/components/pages/`
  - `LoginPage.tsx`

### Reuso futuro para cadastro
- O template de página (`AuthPageTemplate`) recebe:
  - `bannerSrc`
  - `heroTitle`
  - `heroSubtitle`
  - `children`
- O formulário (`AuthForm`) deve ser configurável via `fields`.
- A página de cadastro poderá reutilizar o template e trocar:
  - banner para `/banner-register.png`
  - campos para nome, e-mail, senha e confirmação de senha

## Recursos de imagem
- `/banner-login.png`
- `/github.png`
- `/gmail.png`

## Testes
- Cada componente deve ter teste co-locado.
- Exemplo inicial: `AuthForm.test.tsx` usando Vitest + React Testing Library.

## Passos
1. Criar pasta `src/components` e subpastas `atoms`, `molecules`, `templates`, `pages`.
2. Criar e implementar os arquivos listados acima.
3. Atualizar `src/App.tsx` para renderizar `LoginPage`.
4. Adicionar testes básicos para `AuthForm`.# Plano de implementação da página de login

## Objetivo
Implementar a página de login no app React usando Vite, seguindo Atomic Design e pensando em reutilização para a futura página de cadastro.

## Estrutura proposta

### Componentes (Atomic Design)
- `src/components/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Logo.tsx`
- `src/components/molecules/`
  - `AuthForm.tsx`
  - `SocialLogin.tsx`
- `src/components/templates/`
  - `AuthPageTemplate.tsx`
- `src/components/pages/`
  - `LoginPage.tsx`

### Reuso futuro para cadastro
- O template de página (`AuthPageTemplate`) recebe:
  - `bannerSrc`
  - `heroTitle`
  - `heroSubtitle`
  - `children`
- O formulário (`AuthForm`) deve ser configurável via `fields`.
- A página de cadastro poderá reutilizar o template e trocar:
  - banner para `/banner-register.png`
  - campos para nome, e-mail, senha e confirmação de senha

## Recursos de imagem
- `/banner-login.png`
- `/github.png`
- `/gmail.png`

## Testes
- Cada componente deve ter teste co-locado.
- Exemplo inicial: `AuthForm.test.tsx` usando Vitest + React Testing Library.

## Passos
1. Criar pasta `src/components` e subpastas `atoms`, `molecules`, `templates`, `pages`.
2. Criar e implementar os arquivos listados acima.
3. Atualizar `src/App.tsx` para renderizar `LoginPage`.
4. Adicionar testes básicos para `AuthForm`.# Plano de implementação da página de login

## Objetivo
Implementar a página de login no app React usando Vite, seguindo Atomic Design e pensando em reutilização para a futura página de cadastro.

## Estrutura proposta

### Componentes (Atomic Design)
- `src/components/atoms/`
  - `Button.tsx`
  - `Input.tsx`
  - `Logo.tsx`
- `src/components/molecules/`
  - `AuthForm.tsx`
  - `SocialLogin.tsx`
- `src/components/templates/`
  - `AuthPageTemplate.tsx`
- `src/components/pages/`
  - `LoginPage.tsx`

### Reuso futuro para cadastro
- O template de página (`AuthPageTemplate`) recebe:
  - `bannerSrc`
  - `heroTitle`
  - `heroSubtitle`
  - `children`
- O formulário (`AuthForm`) deve ser configurável via `fields`.
- A página de cadastro poderá reutilizar o template e trocar:
  - banner para `/banner-register.png`
  - campos para nome, e-mail, senha e confirmação de senha

## Recursos de imagem
- `/banner-login.png`
- `/github.png`
- `/gmail.png`

## Testes
- Cada componente deve ter teste co-locado.
- Exemplo inicial: `AuthForm.test.tsx` usando Vitest + React Testing Library.

## Passos
1. Criar pasta `src/components` e subpastas `atoms`, `molecules`, `templates`, `pages`.
2. Criar e implementar os arquivos listados acima.
3. Atualizar `src/App.tsx` para renderizar `LoginPage`.
4. Adicionar testes básicos para `AuthForm`.