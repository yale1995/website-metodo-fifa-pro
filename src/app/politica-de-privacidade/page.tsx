import { Logo } from '@/components/Logo'

/* eslint-disable no-irregular-whitespace */
export default function Privacy() {
  return (
    <main className="md:bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm">
      <div className="flex flex-col gap-3 min-h-screen bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 pt-4 text-gray-50 md:px-24 px-2 py-10">
        <Logo />
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="md:text-3xl text-xl font-bold">
              Política de Privacidade
            </h1>
            <p className="text-sm md:text-base">
              Ao acessar ao site{' '}
              <span className="text-green-600 font-bold">Método FIFA PRO</span>,
              concorda em cumprir estes termos de serviço, todas as leis e
              regulamentos aplicáveis ​​e concorda que é responsável pelo
              cumprimento de todas as leis locais aplicáveis. Se você não
              concordar com algum desses termos, está proibido de usar ou
              acessar este site. Os materiais contidos neste site são protegidos
              pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-bold">2. Uso de Licença</h1>
            <p className="text-sm md:text-base">
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site Método FIFA PRO,
              apenas para visualização transitória pessoal e não comercial. Esta
              é a concessão de uma licença, não uma transferência de título e,
              sob esta licença, você não pode:{' '}
            </p>
            <ol className="py-4 text-sm md:text-base list-decimal px-4">
              <li className="text-yellow-400">
                modificar ou copiar os materiais;{' '}
              </li>
              <li className="text-yellow-400">
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);{' '}
              </li>
              <li className="text-yellow-400">
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site Método FIFA PRO;{' '}
              </li>
              <li className="text-yellow-400">
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais; ou
              </li>
              <li className="text-yellow-400">
                transferir os materiais para outra pessoa ou ‘espelhe’ os
                materiais em qualquer outro servidor.
              </li>
            </ol>

            <p className="text-sm md:text-base">
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por Método FIFA PRO a
              qualquer momento. Ao encerrar a visualização desses materiais ou
              após o término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrónico ou impresso.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-bold">
              3. Isenção de responsabilidade
            </h1>
            <ol className="text-sm md:text-base">
              <li>
                Os materiais no site da Método FIFA PRO são fornecidos ‘como
                estão’. Método FIFA PRO não oferece garantias, expressas ou
                implícitas, e, por este meio, isenta e nega todas as outras
                garantias, incluindo, sem limitação, garantias implícitas ou
                condições de comercialização, adequação a um fim específico ou
                não violação de propriedade intelectual ou outra violação de
                direitos.
              </li>

              <li>
                Além disso, o Método FIFA PRO não garante ou faz qualquer
                representação relativa à precisão, aos resultados prováveis ​​ou
                à confiabilidade do uso dos materiais em seu site ou de outra
                forma relacionado a esses materiais ou em sites vinculados a
                este site.
              </li>
            </ol>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-bold">4. Limitações</h1>
            <p className="text-sm md:text-base">
              Em nenhum caso o Método FIFA PRO ou seus fornecedores serão
              responsáveis ​​por quaisquer danos (incluindo, sem limitação,
              danos por perda de dados ou lucro ou devido a interrupção dos
              negócios) decorrentes do uso ou da incapacidade de usar os
              materiais em Método FIFA PRO, mesmo que Método FIFA PRO ou um
              representante autorizado da Método FIFA PRO tenha sido notificado
              oralmente ou por escrito da possibilidade de tais danos. Como
              algumas jurisdições não permitem limitações em garantias
              implícitas, ou limitações de responsabilidade por danos
              conseqüentes ou incidentais, essas limitações podem não se aplicar
              a você.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-bold">
              5. Precisão dos materiais
            </h1>
            <p className="text-sm md:text-base">
              Os materiais exibidos no site da Método FIFA PRO podem incluir
              erros técnicos, tipográficos ou fotográficos. Método FIFA PRO não
              garante que qualquer material em seu site seja preciso, completo
              ou atual. Método FIFA PRO pode fazer alterações nos materiais
              contidos em seu site a qualquer momento, sem aviso prévio. No
              entanto, Método FIFA PRO não se compromete a atualizar os
              materiais.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-bold">6. Links</h1>
            <p className="text-sm md:text-base">
              O Método FIFA PRO não analisou todos os sites vinculados ao seu
              site e não é responsável pelo conteúdo de nenhum site vinculado. A
              inclusão de qualquer link não implica endosso por Método FIFA PRO
              do site. O uso de qualquer site vinculado é por conta e risco do
              usuário.
            </p>

            <div className="py-4">
              <h2 className="text-xl font-bold">Modificações</h2>
              <p className="text-sm md:text-base">
                O Método FIFA PRO a pode revisar estes termos de serviço do site
                a qualquer momento, sem aviso prévio. Ao usar este site, você
                concorda em ficar vinculado à versão atual desses termos de
                serviço.
              </p>
            </div>

            <div className="py-4">
              <h2 className="text-xl font-bold">Lei aplicável</h2>
              <p className="text-sm md:text-base">
                Estes termos e condições são regidos e interpretados de acordo
                com as leis do Método FIFA PRO e você se submete
                irrevogavelmente à jurisdição exclusiva dos tribunais naquele
                estado ou localidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
