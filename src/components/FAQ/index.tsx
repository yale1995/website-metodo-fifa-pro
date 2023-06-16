'use client'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import { CaretDown } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function FAQ() {
  const [showComponent, setShowComponent] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 20000)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  return (
    <section className="py-12 bg-indigo-950 backdrop-brightness-75 px-2">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-yellow-400">
        FAQ Método FIFA PRO
      </h2>
      <span className="text-gray-300 block text-center text-xl pb-8">
        Aprenda a Apostar no Mercado de apostas do FIFA 23
      </span>
      <div className="mx-auto max-w-6xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <strong>O que é o Método FIFA PRO?</strong>
          </AccordionSummary>
          <AccordionDetails>
            O Método FIFA PRO é um curso abrangente projetado para ensinar os
            participantes a apostar no mercado de FIFA nas plataformas de
            aposta. Ele oferece estratégias avançadas, análise de dados
            especializada e técnicas comprovadas para maximizar as chances de
            sucesso nas apostas.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <strong>Quem pode se beneficiar com Método FIFA PRO</strong>
          </AccordionSummary>
          <AccordionDetails>
            O Método FIFA PRO é recomendado para qualquer pessoa interessada em
            apostar no mercado de FIFA nas casa de aposta. Se você é um fã de
            FIFA ou nunca apostou mas deseja transformar conhecimento em
            oportunidades lucrativas ou um apostador experiente em busca de
            novas abordagens, o curso é para você.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <strong>
              Quais são os requisitos para participar do Método FIFA Pro?
            </strong>
          </AccordionSummary>

          <AccordionDetails>
            Não há requisitos específicos para participar do Método FIFA Pro.
            Você aprenderá desde como criar sua conta até o mais avançado.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel1a-content"
            id="panel4a-header"
          >
            <strong>Quais tópicos são abordados no Método FIFA Pro?</strong>
          </AccordionSummary>
          <AccordionDetails>
            <strong className="font-semibold py-2">
              O Método FIFA Pro aborda uma variedade de tópicos essenciais para
              apostas no mercado de FIFA. Alguns dos principais tópicos incluem:
            </strong>
            <ul className="list-disc px-2">
              <li>
                Análise de estatísticas e dados relevantes para o mercado de
                FIFA.
              </li>
              <li>
                Identificação de padrões e tendências nos resultados das
                partidas de FIFA.
              </li>
              <li>Estratégias avançadas de gestão de bankroll.</li>
              <li>Exploração de diferentes tipos de apostas e mercados.</li>
              <li>
                Uso de ferramentas e recursos para aprimorar as decisões de
                apostas.
              </li>
              <li>
                Estudos de caso e exemplos práticos para aplicação dos conceitos
                aprendidos.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel2a-content"
            id="panel5a-header"
          >
            <strong>Quanto tempo dura o Método FIFA PRO?</strong>
          </AccordionSummary>
          <AccordionDetails>
            O Método FIFA Pro projetado para ser consumido no seu ritmo de
            tempo, como os fundamentos são atemporais, não se preocupe em
            terminar rápido, apenas foque em aprender.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel3a-content"
            id="panel6a-header"
          >
            <strong>O Método FIFA PRO garante lucros nas apostas?</strong>
          </AccordionSummary>
          <AccordionDetails>
            Não há garantia de lucros nas apostas, pois o mercado de FIFA, assim
            como qualquer mercado de apostas, envolve riscos. O Método FIFA Pro
            fornece estratégias e conhecimentos avançados para melhorar suas
            chances de sucesso, mas o resultado final depende de vários fatores,
            incluindo a sua aplicação das técnicas ensinadas.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<CaretDown />}
            aria-controls="panel3a-content"
            id="panel7a-header"
          >
            <strong>
              Existem materiais complementares fornecidos no Método FIFA PRO?
            </strong>
          </AccordionSummary>
          <AccordionDetails>
            Sim, o Método FIFA PRO irá fornecer como bônus um guia com os
            melhores jogadores das grades e os melhores times.
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  )
}
