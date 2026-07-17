import { AuthForm } from '../molecules/AuthForm';
import { AuthPageTemplate } from '../templates/AuthPageTemplate';
import { SocialLogin } from '../molecules/SocialLogin';

export function LoginPage() {
  return (
    <AuthPageTemplate
      bannerSrc="/banner-login.png"
      heroTitle="Acesse sua conta"
      heroSubtitle="Entre usando seu e-mail e senha ou continue com uma conta social."
    >
      <div className="mx-auto max-w-xl">
        <AuthForm
          title="Entrar"
          description="Use suas credenciais para acessar o painel."
          ctaText="Entrar"
          fields={[
            { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@exemplo.com' },
            { id: 'password', label: 'Senha', type: 'password', placeholder: 'Senha segura' },
          ]}
          onSubmit={(values) => {
            console.log('Login enviado', values);
          }}
        >
          <SocialLogin />
        </AuthForm>
      </div>
    </AuthPageTemplate>
  );
}