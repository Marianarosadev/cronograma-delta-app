import type { Week, Rule } from './types'

export const checklistIntro = "Cada dia tem uma caixa para o dia inteiro e, embaixo dela, uma caixa para cada bloco, na ordem em que você deve fazer. O horário ao lado de cada bloco conta a partir do momento em que você começa a estudar (0h00). Marque o bloco assim que terminar e só então passe para o próximo. Quando todos estiverem marcados, marque o dia."

export const rulesNote = "Na segunda-feira depois de cada simulado, a revisão passa a 30 min (análise do simulado) e a teoria cai para 45 min. A partir da semana 9, a teoria cai para 30 min e as questões sobem para 90 min."

export const rules: Rule[] = [
  {
    "title": "Antes de começar",
    "text": "celular no modo avião e longe da mesa. Deixe aberto só o material do dia e ligue um timer para cada bloco."
  },
  {
    "title": "Revisão (15 min)",
    "text": "releia o caderno de erros do dia anterior e refaça de cabeça as questões que errou."
  },
  {
    "title": "Teoria",
    "text": "só o tema do dia. Se terminar antes, vá para a lei seca; não puxe outro tema."
  },
  {
    "title": "Lei seca (30 min)",
    "text": "leia os artigos indicados duas vezes. Na segunda, grife prazos, exceções e verbos, que é o que a banca troca."
  },
  {
    "title": "Questões",
    "text": "filtro Cebraspe, cargo Delegado, últimos 5 anos e só o tema do dia. Para cada erro, copie no caderno de erros a frase da lei ou do julgado que resolve a questão."
  },
  {
    "title": "Jurisprudência (25 min)",
    "text": "procure o tema indicado num material de jurisprudência comentada (por exemplo, o Vade Mecum de Jurisprudência do Dizer o Direito) e leia de 3 a 5 julgados. Anote uma frase por julgado."
  },
  {
    "title": "Se um bloco ficar para trás",
    "text": "não empurre o dia seguinte. Escreva o que faltou ao lado da caixa e faça só as questões desse tema na revisão do dia seguinte."
  }
]

export const weeks: Week[] = [
  {
    "n": 1,
    "range": "30/11 a 05/12",
    "note": null,
    "days": [
      {
        "date": "2026-11-30",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "montar o caderno de erros, um caderno com uma seção por disciplina"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "60 min",
            "desc": "princípios penais (legalidade, anterioridade, insignificância) e lei penal no tempo e no espaço"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 1º a 12, e CF, art. 5º, XXXIX e XL"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 de Penal sobre princípios e lei penal no tempo e no espaço"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "lesões por ação contundente e cortante, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "princípio da insignificância"
          }
        ]
      },
      {
        "date": "2026-12-01",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "princípios, sistema acusatório e lei processual no tempo"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 1º a 3º-A"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 de Processo Penal sobre princípios e aplicação da lei processual"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "LINDB, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "sistema acusatório e atuação do juiz de ofício"
          }
        ]
      },
      {
        "date": "2026-12-02",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "teoria dos direitos fundamentais (gerações, eficácia, colisão)"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 5º, caput e §§ 1º a 4º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 de Constitucional sobre teoria dos direitos fundamentais"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por prisão preventiva. Ler um modelo, estudar CPP, arts. 311 a 316, e escrever o esqueleto de uma página"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "eficácia horizontal dos direitos fundamentais"
          }
        ]
      },
      {
        "date": "2026-12-03",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "regime jurídico-administrativo e princípios"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 37, caput, e Lei 9.784/1999, art. 2º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 de Administrativo sobre princípios"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "Constituição de PE, arts. 101 a 105-B, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "nepotismo e Súmula Vinculante 13"
          }
        ]
      },
      {
        "date": "2026-12-04",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Criminologia",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Lei de Drogas, porte para uso, tráfico e tráfico privilegiado"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 11.343/2006, arts. 28 e 33 a 40"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre a Lei de Drogas"
          },
          {
            "time": "2h45",
            "label": "Criminologia",
            "duration": "50 min",
            "desc": "conceito, método e objetos (delito, delinquente, vítima, controle social), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "tráfico privilegiado e quantidade de droga"
          }
        ]
      },
      {
        "date": "2026-12-05",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "representação por prisão preventiva, à mão, em 60 linhas, com o timer ligado"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Penal e uma de Processo Penal"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2026-12-06",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 2,
    "range": "07/12 a 12/12",
    "note": null,
    "days": [
      {
        "date": "2026-12-07",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Extravagante"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "60 min",
            "desc": "fato típico, conduta, nexo causal, imputação objetiva, dolo e culpa"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 13, 18 e 19"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 de Penal sobre fato típico, dolo e culpa"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "teoria geral, características e gerações, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "dolo eventual e culpa consciente no trânsito"
          }
        ]
      },
      {
        "date": "2026-12-08",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "inquérito policial, características, formas de instauração e prazos"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 4º a 13"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre inquérito policial"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "conceito de tributo e espécies, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "denúncia anônima e instauração do inquérito"
          }
        ]
      },
      {
        "date": "2026-12-09",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "art. 5º, inviolabilidade do domicílio, sigilo de comunicações e de dados, prisão"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 5º, incisos I a XXXVI"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre os incisos do art. 5º"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por prisão temporária. Estudar a Lei 7.960/1989, arts. 1º e 2º, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "ingresso em domicílio sem mandado e fundadas razões"
          }
        ]
      },
      {
        "date": "2026-12-10",
        "weekday": "Qui",
        "title": "Administrativo + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "administração direta e indireta, autarquias, fundações, empresas estatais"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 37, XIX e XX, e Decreto-Lei 200/1967, arts. 4º e 5º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre organização da administração"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "posse, classificação e efeitos, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "regime das empresas estatais que prestam serviço público"
          }
        ]
      },
      {
        "date": "2026-12-11",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Ambiental",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Organizações Criminosas, conceito, colaboração premiada, ação controlada e infiltração"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 12.850/2013, arts. 1º a 14"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre a Lei de Organizações Criminosas"
          },
          {
            "time": "2h45",
            "label": "Ambiental",
            "duration": "50 min",
            "desc": "princípios e art. 225 da CF, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "colaboração premiada feita pelo Delegado"
          }
        ]
      },
      {
        "date": "2026-12-12",
        "weekday": "Sáb",
        "title": "Simulado 1 (diagnóstico)",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2026-12-13",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 3,
    "range": "14/12 a 19/12",
    "note": null,
    "days": [
      {
        "date": "2026-12-14",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 1",
            "duration": "30 min",
            "desc": "separar os erros em \"não sabia\", \"confundi\" e \"desatenção\" e passar os dois primeiros para o caderno de erros"
          },
          {
            "time": "0h30",
            "label": "Teoria de Penal",
            "duration": "45 min",
            "desc": "erro de tipo, erro de proibição e descriminantes putativas"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 20 e 21"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre erro de tipo e erro de proibição"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "ferimentos por projétil de arma de fogo (entrada, saída, distância do disparo), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "erro de tipo e erro sobre a idade da vítima"
          }
        ]
      },
      {
        "date": "2026-12-15",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "indiciamento, conclusão do inquérito, arquivamento e acordo de não persecução penal"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 14 a 23, 28 e 28-A"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre indiciamento, arquivamento e ANPP"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "pessoa natural, capacidade e direitos da personalidade, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "arquivamento do inquérito após o pacote anticrime e ANPP"
          }
        ]
      },
      {
        "date": "2026-12-16",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [
          {
            "title": "Antes de começar",
            "text": "último dia para se inscrever em PE (até 18h). A taxa vence em 18/12"
          }
        ],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "remédios constitucionais (habeas corpus, mandado de segurança, mandado de injunção, habeas data)"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 5º, LXVIII a LXXIII"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre remédios constitucionais"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por busca e apreensão domiciliar. Estudar CPP, arts. 240 a 250, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "cabimento de habeas corpus"
          }
        ]
      },
      {
        "date": "2026-12-17",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "atos administrativos, requisitos, atributos e classificação"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.784/1999, art. 50, e Lei 4.717/1965, art. 2º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre atos administrativos"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "Lei 6.425/1972 (Estatuto do Policial Civil), disposições gerais e ingresso, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "controle judicial do ato discricionário"
          }
        ]
      },
      {
        "date": "2026-12-18",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Criminologia",
        "rest": false,
        "notes": [
          {
            "title": "Antes de começar",
            "text": "confirmar que a taxa de inscrição de PE está paga (vence hoje)"
          }
        ],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Lei de Abuso de Autoridade, sujeitos, dolo específico e crimes em espécie"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 13.869/2019, arts. 1º a 4º e 9º a 38"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre Abuso de Autoridade"
          },
          {
            "time": "2h45",
            "label": "Criminologia",
            "duration": "50 min",
            "desc": "vitimologia, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "uso de algemas e Súmula Vinculante 11"
          }
        ]
      },
      {
        "date": "2026-12-19",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "representação por prisão temporária ou por busca e apreensão, à mão, em 60 linhas"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Constitucional e uma de Extravagante"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2026-12-20",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 4,
    "range": "21/12 a 26/12",
    "note": null,
    "days": [
      {
        "date": "2026-12-21",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Extravagante"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "60 min",
            "desc": "consumação, tentativa, desistência voluntária, arrependimento eficaz e posterior, crime impossível"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 14 a 17"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre iter criminis e tentativa"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "sistema global (ONU, Declaração Universal e Pactos de 1966), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "crime impossível e vigilância em estabelecimento comercial (Súmula 567 do STJ)"
          }
        ]
      },
      {
        "date": "2026-12-22",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "ação penal pública e privada, condições, representação e prazo decadencial"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 24 a 39, e CP, arts. 100 a 106"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre ação penal"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "princípios e imunidades, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "natureza da ação penal no estelionato e na lesão corporal"
          }
        ]
      },
      {
        "date": "2026-12-23",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "segurança pública e atribuições da polícia judiciária"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 144 inteiro"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre segurança pública"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por interceptação telefônica. Estudar a Lei 9.296/1996, arts. 1º a 5º, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "poder de investigação e competência das polícias"
          }
        ]
      },
      {
        "date": "2026-12-24",
        "weekday": "Qui",
        "title": "Administrativo + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "anulação, revogação, convalidação e teoria dos motivos determinantes"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.784/1999, arts. 53 a 55, e Súmula 473 do STF"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre extinção e convalidação dos atos"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "propriedade, aquisição e perda, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "prazo decadencial para anular atos (art. 54 da Lei 9.784)"
          }
        ]
      },
      {
        "date": "2026-12-25",
        "weekday": "Sex",
        "title": "Feriado, folga",
        "rest": true,
        "notes": [],
        "blocks": []
      },
      {
        "date": "2026-12-26",
        "weekday": "Sáb",
        "title": "Simulado 2",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 50 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2026-12-27",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 5,
    "range": "28/12 a 02/01",
    "note": null,
    "days": [
      {
        "date": "2026-12-28",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 2",
            "duration": "30 min",
            "desc": "separar os erros por tipo, passar para o caderno e anotar as disciplinas abaixo de 50%"
          },
          {
            "time": "0h30",
            "label": "Teoria de Penal",
            "duration": "45 min",
            "desc": "excludentes de ilicitude e de culpabilidade, imputabilidade, coação irresistível e obediência hierárquica"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 22 a 28"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre ilicitude e culpabilidade"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "tanatologia, fenômenos cadavéricos e cronotanatognose, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "legítima defesa e excesso"
          }
        ]
      },
      {
        "date": "2026-12-29",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "teoria geral da prova, provas ilícitas, derivação e cadeia de custódia"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 155 a 158-F"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre provas ilícitas e cadeia de custódia"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "pessoa jurídica e desconsideração da personalidade (CC, art. 50), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "acesso ao celular sem autorização judicial e quebra da cadeia de custódia"
          }
        ]
      },
      {
        "date": "2026-12-30",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "controle de constitucionalidade, conceito, espécies de inconstitucionalidade e controle difuso"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 52, X, 97 e 102, III, e Súmula Vinculante 10"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre controle difuso"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por interceptação telemática. Estudar a Lei 9.296/1996, art. 1º, parágrafo único, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "cláusula de reserva de plenário"
          }
        ]
      },
      {
        "date": "2026-12-31",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "poderes administrativos (hierárquico, disciplinar, regulamentar, de polícia) e abuso de poder"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CTN, art. 78 (poder de polícia)"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre poderes administrativos"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "Lei 6.425/1972, deveres, transgressões e penalidades, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "delegação do poder de polícia a entidades privadas"
          }
        ]
      },
      {
        "date": "2027-01-01",
        "weekday": "Sex",
        "title": "Feriado, folga",
        "rest": true,
        "notes": [],
        "blocks": []
      },
      {
        "date": "2027-01-02",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "representação por interceptação telefônica ou telemática, à mão, em 60 linhas"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Penal e uma de Processo Penal"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2027-01-03",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 6,
    "range": "04/01 a 09/01",
    "note": null,
    "days": [
      {
        "date": "2027-01-04",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo e Legislação de PE"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "60 min",
            "desc": "concurso de pessoas (autoria, participação, comunicabilidade) e concurso de crimes (material, formal, continuado)"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 29 a 31 e 69 a 71"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre concurso de pessoas e de crimes"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "sistema interamericano, Pacto de São José, Comissão e Corte Interamericana, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "crime continuado e unidade de desígnios"
          }
        ]
      },
      {
        "date": "2027-01-05",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "provas em espécie, interrogatório, testemunhas, reconhecimento de pessoas e busca pessoal"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 185 a 196 e 202 a 226"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre provas em espécie"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "obrigação tributária, fato gerador e sujeitos, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "reconhecimento de pessoas (art. 226) e busca pessoal por fundada suspeita"
          }
        ]
      },
      {
        "date": "2027-01-06",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "controle concentrado, ADI, ADC, ADO e ADPF"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 102, I, \"a\", e 103"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre controle concentrado"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por captação ambiental. Estudar a Lei 9.296/1996, arts. 8º-A e 10-A, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "legitimados para a ADI e pertinência temática"
          }
        ]
      },
      {
        "date": "2027-01-07",
        "weekday": "Qui",
        "title": "Administrativo + Empresarial",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "agentes públicos, cargo, emprego e função, provimento, vacância e estabilidade"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 37 a 41"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre agentes públicos"
          },
          {
            "time": "2h45",
            "label": "Empresarial",
            "duration": "50 min",
            "desc": "empresário e teoria da empresa (CC, arts. 966 a 980), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "concurso público, nomeação e direito subjetivo"
          }
        ]
      },
      {
        "date": "2027-01-08",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Ambiental",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Estatuto do Desarmamento, posse, porte, disparo e comércio ilegal"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 10.826/2003, arts. 12 a 21"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre o Estatuto do Desarmamento"
          },
          {
            "time": "2h45",
            "label": "Ambiental",
            "duration": "50 min",
            "desc": "crimes da Lei 9.605/1998 e responsabilidade da pessoa jurídica (arts. 2º a 4º), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "arma desmuniciada, munição isolada e arma de uso restrito"
          }
        ]
      },
      {
        "date": "2027-01-09",
        "weekday": "Sáb",
        "title": "Simulado 3",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 55 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2027-01-10",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 7,
    "range": "11/01 a 16/01",
    "note": null,
    "days": [
      {
        "date": "2027-01-11",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 3",
            "duration": "30 min",
            "desc": "separar os erros por tipo, passar para o caderno e comparar com o simulado 2"
          },
          {
            "time": "0h30",
            "label": "Teoria de Penal",
            "duration": "45 min",
            "desc": "aplicação da pena, dosimetria em três fases, regimes e substituição por restritiva de direitos"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 33, 44 e 59 a 68"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre aplicação da pena"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "asfixias (enforcamento, estrangulamento, esganadura, afogamento), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "reincidência, maus antecedentes e Súmula 231 do STJ"
          }
        ]
      },
      {
        "date": "2027-01-12",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "prisão em flagrante, espécies, auto de prisão e audiência de custódia"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 301 a 310"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre prisão em flagrante"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "negócio jurídico e defeitos (CC, arts. 104 e 138 a 165), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "flagrante preparado, esperado e diferido e prazo da audiência de custódia"
          }
        ]
      },
      {
        "date": "2027-01-13",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "organização do Estado e repartição de competências"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 18 a 24 e 30"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre competências"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por quebra de sigilo bancário e fiscal. Estudar a LC 105/2001, art. 1º, § 4º, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "competência privativa da União para legislar sobre direito penal e processual"
          }
        ]
      },
      {
        "date": "2027-01-14",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "responsabilidade civil do Estado, teoria do risco administrativo, exclusões e ação de regresso"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 37, § 6º, e CC, art. 43"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre responsabilidade civil do Estado"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "Lei 6.123/1968, provimento e vacância, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "responsabilidade do Estado por morte de preso e por omissão"
          }
        ]
      },
      {
        "date": "2027-01-15",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Criminologia",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Lei Maria da Penha (formas de violência, medidas protetivas, atuação da autoridade policial) e Lei 14.344/2022"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 11.340/2006, arts. 5º, 7º, 10 a 12-C e 18 a 24-A"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre Maria da Penha"
          },
          {
            "time": "2h45",
            "label": "Criminologia",
            "duration": "50 min",
            "desc": "escolas clássica e positiva, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "medidas protetivas concedidas pelo Delegado e Súmulas 536, 588 e 589 do STJ"
          }
        ]
      },
      {
        "date": "2027-01-16",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "representação por captação ambiental ou por quebra de sigilo bancário, à mão, em 60 linhas"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Constitucional e uma de Extravagante"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2027-01-17",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 8,
    "range": "18/01 a 23/01",
    "note": null,
    "days": [
      {
        "date": "2027-01-18",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Extravagante"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "60 min",
            "desc": "extinção da punibilidade e prescrição (da pretensão punitiva e executória, retroativa, causas interruptivas)"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 107 a 119"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre prescrição"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "direitos humanos na CF e hierarquia dos tratados (supralegal ou emenda), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "prescrição virtual (Súmula 438 do STJ) e termo inicial da prescrição"
          }
        ]
      },
      {
        "date": "2027-01-19",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "60 min",
            "desc": "prisão preventiva, prisão temporária, cautelares diversas e fiança"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 282, 311 a 320 e 322 a 324, e Lei 7.960/1989, arts. 1º e 2º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre prisões cautelares"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "crédito tributário, lançamento, suspensão, extinção e exclusão, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "revisão da preventiva a cada 90 dias e proibição de preventiva de ofício"
          }
        ]
      },
      {
        "date": "2027-01-20",
        "weekday": "Qua",
        "title": "Constitucional + modelo de peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "60 min",
            "desc": "Poder Legislativo, imunidades parlamentares e CPI"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 44 a 58"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre Legislativo e CPI"
          },
          {
            "time": "2h45",
            "label": "Modelo de peça",
            "duration": "50 min",
            "desc": "representação por quebra de sigilo de dados telefônicos e telemáticos. Estudar a Lei 12.965/2014, arts. 10 e 22, e escrever o esqueleto"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "poderes da CPI e reserva de jurisdição"
          }
        ]
      },
      {
        "date": "2027-01-21",
        "weekday": "Qui",
        "title": "Administrativo + Empresarial",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "60 min",
            "desc": "improbidade administrativa com as mudanças da Lei 14.230/2021 (dolo, tipos, sanções, prescrição)"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 8.429/1992, arts. 1º, 9º a 12 e 23"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre improbidade"
          },
          {
            "time": "2h45",
            "label": "Empresarial",
            "duration": "50 min",
            "desc": "títulos de crédito, cheque e nota promissória (aval, endosso, protesto), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "retroatividade da Lei 14.230/2021 (Tema 1.199 do STF)"
          }
        ]
      },
      {
        "date": "2027-01-22",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Ambiental",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "60 min",
            "desc": "Crimes Hediondos e Lei de Tortura"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 8.072/1990, arts. 1º e 2º, e Lei 9.455/1997, art. 1º"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "25 sobre hediondos e tortura"
          },
          {
            "time": "2h45",
            "label": "Ambiental",
            "duration": "50 min",
            "desc": "infrações administrativas e Código Florestal (APP e reserva legal), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "progressão de regime em hediondos e tráfico privilegiado não hediondo"
          }
        ]
      },
      {
        "date": "2027-01-23",
        "weekday": "Sáb",
        "title": "Simulado 4 (fecha a fase de base)",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 60 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2027-01-24",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 9,
    "range": "25/01 a 30/01",
    "note": "Começa a fase de aprofundamento: menos teoria, mais questões, e uma peça completa toda quarta.",
    "days": [
      {
        "date": "2027-01-25",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 4",
            "duration": "30 min",
            "desc": "separar os erros por tipo e escolher as 2 disciplinas mais fracas para reforçar nas questões da semana"
          },
          {
            "time": "0h30",
            "label": "Teoria de Penal",
            "duration": "30 min",
            "desc": "crimes contra a pessoa, homicídio qualificado, feminicídio e lesão corporal"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 121 a 129"
          },
          {
            "time": "1h30",
            "label": "Questões",
            "duration": "75 min",
            "desc": "35 sobre crimes contra a pessoa"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "sexologia forense, aborto e infanticídio, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "qualificadoras do homicídio e feminicídio"
          }
        ]
      },
      {
        "date": "2027-01-26",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "30 min",
            "desc": "competência, conexão e continência"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 69 a 91"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre competência"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "prescrição e decadência (CC, arts. 189 a 211), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "competência da Justiça Federal e da Justiça Estadual em crimes pela internet"
          }
        ]
      },
      {
        "date": "2027-01-27",
        "weekday": "Qua",
        "title": "Constitucional + peça completa",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "30 min",
            "desc": "Poder Executivo, Poder Judiciário e CNJ"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 76 a 86 e 92 a 103-B"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 sobre Executivo e Judiciário"
          },
          {
            "time": "1h45",
            "label": "Peça completa",
            "duration": "1h50",
            "desc": "caso com pedido de prisão preventiva e busca e apreensão. 1h20 para escrever e 30 min para corrigir"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "foro por prerrogativa de função depois da AP 937"
          }
        ]
      },
      {
        "date": "2027-01-28",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "30 min",
            "desc": "licitações na Lei 14.133/2021, princípios, modalidades e contratação direta"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 14.133/2021, arts. 5º, 28 a 32 e 72 a 75"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre licitações"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "Lei 6.123/1968, direitos, deveres e processo disciplinar, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "dispensa e inexigibilidade de licitação"
          }
        ]
      },
      {
        "date": "2027-01-29",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Criminologia",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "30 min",
            "desc": "Lei de Interceptação Telefônica e Lei 12.830/2013 (investigação pelo Delegado)"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.296/1996, arts. 1º a 10-A, e Lei 12.830/2013 inteira"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre interceptação e investigação criminal"
          },
          {
            "time": "2h45",
            "label": "Criminologia",
            "duration": "50 min",
            "desc": "teorias do consenso (Escola de Chicago, anomia, associação diferencial, subcultura), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "prorrogação da interceptação e encontro fortuito de provas"
          }
        ]
      },
      {
        "date": "2027-01-30",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "representação por quebra de sigilo de dados telefônicos e telemáticos, à mão, em 60 linhas"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Penal e uma de Processo Penal"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2027-01-31",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 10,
    "range": "01/02 a 06/02",
    "note": null,
    "days": [
      {
        "date": "2027-02-01",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Extravagante"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "30 min",
            "desc": "crimes contra o patrimônio, furto, roubo, extorsão, estelionato e receptação"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 155, 157, 158, 159, 171 e 180"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre crimes contra o patrimônio"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "grupos vulneráveis (mulheres, crianças, idosos, indígenas, pessoas com deficiência, LGBTQIA+, refugiados), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "consumação do furto e do roubo (teoria da amotio) e roubo com arma branca"
          }
        ]
      },
      {
        "date": "2027-02-02",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "30 min",
            "desc": "juiz das garantias e sujeitos do processo"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 3º-A a 3º-F e 251 a 281"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre juiz das garantias e sujeitos do processo"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "responsabilidade tributária (CTN, arts. 128 a 138), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "o que o STF decidiu sobre o juiz das garantias (ADIs 6.298 e outras)"
          }
        ]
      },
      {
        "date": "2027-02-03",
        "weekday": "Qua",
        "title": "Constitucional + peça completa",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "30 min",
            "desc": "administração pública na CF, acumulação de cargos, teto e estabilidade"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 37 a 41 (segunda leitura)"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 sobre administração pública na CF"
          },
          {
            "time": "1h45",
            "label": "Peça completa",
            "duration": "1h50",
            "desc": "caso com interceptação telefônica e quebra de sigilo bancário. 1h20 para escrever e 30 min para corrigir"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "acumulação de cargos e teto remuneratório"
          }
        ]
      },
      {
        "date": "2027-02-04",
        "weekday": "Qui",
        "title": "Administrativo + Empresarial",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "30 min",
            "desc": "contratos administrativos, cláusulas exorbitantes, alteração e extinção"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 14.133/2021, arts. 104 e 124 a 136"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre contratos administrativos"
          },
          {
            "time": "2h45",
            "label": "Empresarial",
            "duration": "50 min",
            "desc": "sociedade limitada e sociedade anônima, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "responsabilidade da administração por encargos trabalhistas do contratado"
          }
        ]
      },
      {
        "date": "2027-02-05",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Ambiental",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "30 min",
            "desc": "Lavagem de Dinheiro e Marco Legal do Combate ao Crime Organizado (Lei 15.358/2026)"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.613/1998, arts. 1º a 4º e 17-B a 17-D, e os artigos penais da Lei 15.358/2026"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre lavagem de dinheiro e crime organizado"
          },
          {
            "time": "2h45",
            "label": "Ambiental",
            "duration": "50 min",
            "desc": "SNUC (Lei 9.985/2000) e Lei da Mata Atlântica, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "autonomia da lavagem em relação ao crime antecedente"
          }
        ]
      },
      {
        "date": "2027-02-06",
        "weekday": "Sáb",
        "title": "Simulado 5",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 65 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2027-02-07",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 11,
    "range": "08/02 a 13/02",
    "note": "Carnaval cai em 08 e 09/02. Se folgar, faça os blocos desses dois dias no sábado 13/02, e a peça de quarta conta como a discursiva da semana.",
    "days": [
      {
        "date": "2027-02-08",
        "weekday": "Seg",
        "title": "Penal + Medicina Legal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 5",
            "duration": "30 min",
            "desc": "separar os erros por tipo e comparar com a meta de 65"
          },
          {
            "time": "0h30",
            "label": "Teoria de Penal",
            "duration": "30 min",
            "desc": "crimes contra a dignidade sexual, estupro, estupro de vulnerável e importúnação sexual"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 213 a 218-C"
          },
          {
            "time": "1h30",
            "label": "Questões",
            "duration": "75 min",
            "desc": "35 sobre crimes contra a dignidade sexual"
          },
          {
            "time": "2h45",
            "label": "Medicina Legal",
            "duration": "50 min",
            "desc": "lesões corporais (leve, grave, gravíssima) e documentos médico-legais, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "estupro de vulnerável e consentimento da vítima (Súmula 593 do STJ)"
          }
        ]
      },
      {
        "date": "2027-02-09",
        "weekday": "Ter",
        "title": "Processo Penal + Civil",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Processo Penal",
            "duration": "30 min",
            "desc": "nulidades e habeas corpus"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 563 a 573 e 647 a 667"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre nulidades e habeas corpus"
          },
          {
            "time": "2h45",
            "label": "Civil",
            "duration": "50 min",
            "desc": "responsabilidade civil (CC, arts. 186, 187 e 927 a 954), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "nulidade absoluta e relativa e prejuízo (pas de nullité sans grief)"
          }
        ]
      },
      {
        "date": "2027-02-10",
        "weekday": "Qua",
        "title": "Constitucional + peça completa",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "30 min",
            "desc": "nacionalidade e direitos políticos"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, arts. 12 a 16"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 sobre nacionalidade e direitos políticos"
          },
          {
            "time": "1h45",
            "label": "Peça completa",
            "duration": "1h50",
            "desc": "caso com pedido de prisão temporária e busca e apreensão. 1h20 para escrever e 30 min para corrigir"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "extradição de brasileiro naturalizado"
          }
        ]
      },
      {
        "date": "2027-02-11",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "30 min",
            "desc": "processo administrativo e processo administrativo disciplinar"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.784/1999, arts. 1º a 30 e 53 a 65"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre processo administrativo e PAD"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "LC 137/2008 e LC 317/2015, duas leituras e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "Súmula Vinculante 5 (defesa técnica no PAD) e prova emprestada"
          }
        ]
      },
      {
        "date": "2027-02-12",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Criminologia",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "30 min",
            "desc": "ECA (ato infracional e apuração) e crimes de trânsito"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "ECA, arts. 103 a 128 e 171 a 190, e CTB, arts. 291 a 312-B"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre ECA e crimes de trânsito"
          },
          {
            "time": "2h45",
            "label": "Criminologia",
            "duration": "50 min",
            "desc": "teorias do conflito (labelling approach, criminologia crítica) e prevenção primária, secundária e terciária, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "embriaguez ao volante e recusa ao bafômetro"
          }
        ]
      },
      {
        "date": "2027-02-13",
        "weekday": "Sáb",
        "title": "Discursiva",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Peça",
            "duration": "2h",
            "desc": "caso misto, com mais de uma medida na mesma representação, à mão, em 60 linhas"
          },
          {
            "time": "2h00",
            "label": "Questões discursivas",
            "duration": "45 min",
            "desc": "2 questões de até 10 linhas, uma de Constitucional e uma de Extravagante"
          },
          {
            "time": "2h45",
            "label": "Correção",
            "duration": "1h15",
            "desc": "comparar com o modelo, contar os erros de português e reescrever o trecho mais fraco"
          }
        ]
      },
      {
        "date": "2027-02-14",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 12,
    "range": "15/02 a 20/02",
    "note": null,
    "days": [
      {
        "date": "2027-02-15",
        "weekday": "Seg",
        "title": "Penal + Direitos Humanos",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Extravagante"
          },
          {
            "time": "0h15",
            "label": "Teoria de Penal",
            "duration": "30 min",
            "desc": "crimes contra a administração pública, peculato, concussão, corrupção passiva e ativa, prevaricação"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CP, arts. 312 a 327 e 333"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre crimes contra a administração pública"
          },
          {
            "time": "2h45",
            "label": "Direitos Humanos",
            "duration": "50 min",
            "desc": "segurança pública e direitos humanos, uso proporcional da força, prevenção da tortura e direitos da pessoa presa, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "insignificância nos crimes contra a administração (Súmula 599 do STJ)"
          }
        ]
      },
      {
        "date": "2027-02-16",
        "weekday": "Ter",
        "title": "Processo Penal + Tributário",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Revisão de Processo Penal",
            "duration": "30 min",
            "desc": "reler o caderno de erros de prisões e cautelares, o tema que mais cai"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CPP, arts. 282 a 320 (segunda leitura)"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre prisões e medidas cautelares"
          },
          {
            "time": "2h45",
            "label": "Tributário",
            "duration": "50 min",
            "desc": "crimes contra a ordem tributária (Lei 8.137/1990, arts. 1º a 3º) e Súmula Vinculante 24, 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "prisão domiciliar e substituição da preventiva"
          }
        ]
      },
      {
        "date": "2027-02-17",
        "weekday": "Qua",
        "title": "Constitucional + peça completa",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Teoria de Constitucional",
            "duration": "30 min",
            "desc": "tratados (Palermo, Mérida, Pacto de São José, Estatuto de Roma) e poder constituinte"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "CF, art. 5º, §§ 2º a 4º, e art. 60"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 sobre tratados e poder constituinte"
          },
          {
            "time": "1h45",
            "label": "Peça completa",
            "duration": "1h50",
            "desc": "caso misto, com mais de uma medida. 1h20 para escrever e 30 min para corrigir"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "prisão civil do depositário infiel (Súmula Vinculante 25)"
          }
        ]
      },
      {
        "date": "2027-02-18",
        "weekday": "Qui",
        "title": "Administrativo + Empresarial",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Teoria de Administrativo",
            "duration": "30 min",
            "desc": "controle da administração e concessões de serviço público"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 8.987/1995, arts. 2º, 6º e 35 a 39"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre controle e concessões"
          },
          {
            "time": "2h45",
            "label": "Empresarial",
            "duration": "50 min",
            "desc": "falência e recuperação judicial (Lei 11.101/2005), 30 min de teoria e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "controle pelo Tribunal de Contas"
          }
        ]
      },
      {
        "date": "2027-02-19",
        "weekday": "Sex",
        "title": "Legislação Extravagante + Ambiental",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Teoria de Extravagante",
            "duration": "30 min",
            "desc": "Juizados Especiais Criminais (TCO, transação, suspensão condicional), Lei de Racismo e Estatuto da Pessoa Idosa"
          },
          {
            "time": "0h45",
            "label": "Lei seca",
            "duration": "30 min",
            "desc": "Lei 9.099/1995, arts. 60 a 92; Lei 7.716/1989, arts. 1º e 20; Estatuto da Pessoa Idosa, arts. 95 a 108"
          },
          {
            "time": "1h15",
            "label": "Questões",
            "duration": "90 min",
            "desc": "40 sobre JECRIM, racismo e Estatuto da Pessoa Idosa"
          },
          {
            "time": "2h45",
            "label": "Ambiental",
            "duration": "50 min",
            "desc": "só questões, 20 misturando os temas já vistos"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "injúria racial equiparada a racismo e homotransfobia"
          }
        ]
      },
      {
        "date": "2027-02-20",
        "weekday": "Sáb",
        "title": "Simulado 6",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 70 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2027-02-21",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 13,
    "range": "22/02 a 27/02",
    "note": "Começa a reta final: nada de conteúdo novo. A teoria vira revisão do caderno de erros e dos seus resumos, e as questões são dos temas em que você mais erra.",
    "days": [
      {
        "date": "2027-02-22",
        "weekday": "Seg",
        "title": "Penal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 6",
            "duration": "30 min",
            "desc": "listar os 5 temas com mais erros nos simulados até aqui"
          },
          {
            "time": "0h30",
            "label": "Revisão de Penal",
            "duration": "45 min",
            "desc": "caderno de erros e resumos de teoria do crime e penas"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CP, arts. 1º a 120, só o que você grifou"
          },
          {
            "time": "2h00",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 de Penal parte geral, dos temas que mais errou"
          },
          {
            "time": "3h00",
            "label": "Secundária",
            "duration": "35 min",
            "desc": "15 questões de Direitos Humanos"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Penal dos últimos 12 meses"
          }
        ]
      },
      {
        "date": "2027-02-23",
        "weekday": "Ter",
        "title": "Processo Penal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Revisão de Processo Penal",
            "duration": "45 min",
            "desc": "caderno de erros e resumos de inquérito, provas e prisões"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CPP, arts. 4º a 23, 155 a 158-F e 282 a 320, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre inquérito, provas e prisões"
          },
          {
            "time": "2h45",
            "label": "Secundária",
            "duration": "50 min",
            "desc": "20 questões de Medicina Legal"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Processo Penal dos últimos 12 meses"
          }
        ]
      },
      {
        "date": "2027-02-24",
        "weekday": "Qua",
        "title": "Constitucional",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Revisão de Constitucional",
            "duration": "45 min",
            "desc": "caderno de erros e resumos do art. 5º, controle e art. 144"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CF, arts. 5º e 144, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre direitos fundamentais, controle e segurança pública"
          },
          {
            "time": "2h45",
            "label": "Peças",
            "duration": "50 min",
            "desc": "escrever de memória o esqueleto de 3 representações (preventiva, busca e interceptação) e conferir com o caderno de modelos"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Constitucional dos últimos 12 meses"
          }
        ]
      },
      {
        "date": "2027-02-25",
        "weekday": "Qui",
        "title": "Administrativo + Legislação de PE",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Revisão de Administrativo",
            "duration": "45 min",
            "desc": "caderno de erros e resumos de atos, poderes, responsabilidade e improbidade"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "Lei 8.429/1992 e Lei 9.784/1999, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 de Administrativo, dos temas que mais errou"
          },
          {
            "time": "2h45",
            "label": "Legislação de PE",
            "duration": "50 min",
            "desc": "leitura completa das 5 normas do edital, só o grifado, e 10 questões"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Administrativo dos últimos 12 meses"
          }
        ]
      },
      {
        "date": "2027-02-26",
        "weekday": "Sex",
        "title": "Legislação Extravagante",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Revisão de Extravagante",
            "duration": "45 min",
            "desc": "caderno de erros de Drogas, Organização Criminosa, Abuso de Autoridade, Desarmamento e Maria da Penha"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "as mesmas cinco leis, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre essas cinco leis"
          },
          {
            "time": "2h45",
            "label": "Secundária",
            "duration": "50 min",
            "desc": "20 questões de Criminologia"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Extravagante dos últimos 12 meses"
          }
        ]
      },
      {
        "date": "2027-02-27",
        "weekday": "Sáb",
        "title": "Simulado de discursiva",
        "rest": false,
        "notes": [
          {
            "title": "Ao terminar",
            "text": "guardar a prova sem corrigir. A correção é o primeiro bloco de segunda"
          }
        ],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "4h",
            "desc": "2 questões de até 10 linhas e uma peça de até 60 linhas, à mão, nas condições da prova"
          }
        ]
      },
      {
        "date": "2027-02-28",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 14,
    "range": "01/03 a 06/03",
    "note": null,
    "days": [
      {
        "date": "2027-03-01",
        "weekday": "Seg",
        "title": "Penal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Correção do simulado de discursiva",
            "duration": "30 min",
            "desc": "comparar com os modelos e contar os erros de português"
          },
          {
            "time": "0h30",
            "label": "Revisão de Penal",
            "duration": "45 min",
            "desc": "caderno de erros e resumos dos crimes em espécie"
          },
          {
            "time": "1h15",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CP, arts. 121 a 129, 155 a 180, 213 a 218-C e 312 a 333, só o grifado"
          },
          {
            "time": "2h00",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre crimes em espécie"
          },
          {
            "time": "3h00",
            "label": "Secundária",
            "duration": "35 min",
            "desc": "15 questões de Direitos Humanos"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Penal dos últimos 6 meses"
          }
        ]
      },
      {
        "date": "2027-03-02",
        "weekday": "Ter",
        "title": "Processo Penal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Penal"
          },
          {
            "time": "0h15",
            "label": "Revisão de Processo Penal",
            "duration": "45 min",
            "desc": "caderno de erros de competência, juiz das garantias e nulidades"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CPP, arts. 3º-A a 3º-F, 69 a 91 e 563 a 573, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre competência, juiz das garantias e nulidades"
          },
          {
            "time": "2h45",
            "label": "Secundária",
            "duration": "50 min",
            "desc": "10 questões de Tributário e 10 de Ambiental"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Processo Penal dos últimos 6 meses"
          }
        ]
      },
      {
        "date": "2027-03-03",
        "weekday": "Qua",
        "title": "Constitucional",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Processo Penal"
          },
          {
            "time": "0h15",
            "label": "Revisão de Constitucional",
            "duration": "45 min",
            "desc": "caderno de erros de organização do Estado e poderes"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "CF, arts. 18 a 24, 37 a 58 e 102 a 103, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre organização do Estado e poderes"
          },
          {
            "time": "2h45",
            "label": "Peças",
            "duration": "50 min",
            "desc": "escrever de memória o esqueleto de 3 representações (temporária, captação ambiental e quebra de sigilo) e conferir com o caderno de modelos"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Constitucional dos últimos 6 meses"
          }
        ]
      },
      {
        "date": "2027-03-04",
        "weekday": "Qui",
        "title": "Administrativo",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Constitucional"
          },
          {
            "time": "0h15",
            "label": "Revisão de Administrativo",
            "duration": "45 min",
            "desc": "caderno de erros de licitações, agentes públicos e PAD"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "Lei 14.133/2021 e CF, arts. 37 a 41, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre licitações, agentes e PAD"
          },
          {
            "time": "2h45",
            "label": "Secundária",
            "duration": "50 min",
            "desc": "20 questões de Civil e Empresarial"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Administrativo dos últimos 6 meses"
          }
        ]
      },
      {
        "date": "2027-03-05",
        "weekday": "Sex",
        "title": "Legislação Extravagante",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Revisão",
            "duration": "15 min",
            "desc": "caderno de erros de Administrativo"
          },
          {
            "time": "0h15",
            "label": "Revisão de Extravagante",
            "duration": "45 min",
            "desc": "caderno de erros de Hediondos, Tortura, Interceptação, Lavagem e Lei 15.358/2026"
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "45 min",
            "desc": "as mesmas cinco leis, só o grifado"
          },
          {
            "time": "1h45",
            "label": "Questões",
            "duration": "60 min",
            "desc": "30 sobre essas cinco leis"
          },
          {
            "time": "2h45",
            "label": "Secundária",
            "duration": "50 min",
            "desc": "20 questões de Legislação de PE e Criminologia"
          },
          {
            "time": "3h35",
            "label": "Jurisprudência",
            "duration": "25 min",
            "desc": "informativos de Extravagante dos últimos 6 meses"
          }
        ]
      },
      {
        "date": "2027-03-06",
        "weekday": "Sáb",
        "title": "Simulado 7 (o último)",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Prova",
            "duration": "3h45",
            "desc": "100 questões na divisão do edital, sem consulta e sem pausa. Meta: 70 acertos"
          },
          {
            "time": "3h45",
            "label": "Gabarito",
            "duration": "15 min",
            "desc": "corrigir e anotar os acertos por disciplina"
          }
        ]
      },
      {
        "date": "2027-03-07",
        "weekday": "Dom",
        "title": "Descanso",
        "rest": true,
        "notes": [],
        "blocks": []
      }
    ]
  },
  {
    "n": 15,
    "range": "08/03 a 14/03",
    "note": "Semana leve, de 3h por dia: o objetivo é chegar descansada e com a memória fresca, não aprender nada novo.",
    "days": [
      {
        "date": "2027-03-08",
        "weekday": "Seg",
        "title": "Penal e Processo Penal",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Análise do simulado 7",
            "duration": "30 min",
            "desc": "só os erros de \"confundi\", que são os mais fáceis de corrigir"
          },
          {
            "time": "0h30",
            "label": "Caderno de erros de Penal",
            "duration": "1h",
            "desc": ""
          },
          {
            "time": "1h30",
            "label": "Caderno de erros de Processo Penal",
            "duration": "1h",
            "desc": ""
          },
          {
            "time": "2h30",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 misturando Penal e Processo Penal"
          }
        ]
      },
      {
        "date": "2027-03-09",
        "weekday": "Ter",
        "title": "Constitucional e Administrativo",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Caderno de erros de Constitucional",
            "duration": "1h",
            "desc": ""
          },
          {
            "time": "1h00",
            "label": "Caderno de erros de Administrativo",
            "duration": "1h",
            "desc": ""
          },
          {
            "time": "2h00",
            "label": "Questões",
            "duration": "30 min",
            "desc": "15 misturando as duas"
          },
          {
            "time": "2h30",
            "label": "Jurisprudência",
            "duration": "30 min",
            "desc": "reler as frases que você anotou dos julgados"
          }
        ]
      },
      {
        "date": "2027-03-10",
        "weekday": "Qua",
        "title": "Extravagante e peça",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Caderno de erros de Extravagante",
            "duration": "1h",
            "desc": ""
          },
          {
            "time": "1h00",
            "label": "Lei seca",
            "duration": "1h",
            "desc": "só o grifado das 10 leis que mais caem"
          },
          {
            "time": "2h00",
            "label": "Peça",
            "duration": "1h",
            "desc": "escrever o esqueleto de uma representação de memória"
          }
        ]
      },
      {
        "date": "2027-03-11",
        "weekday": "Qui",
        "title": "Disciplinas menores",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Legislação de PE",
            "duration": "45 min",
            "desc": "só o grifado"
          },
          {
            "time": "0h45",
            "label": "Medicina Legal",
            "duration": "45 min",
            "desc": "resumo e caderno de erros"
          },
          {
            "time": "1h30",
            "label": "Criminologia, Direitos Humanos, Tributário, Ambiental e Civil",
            "duration": "1h30",
            "desc": "caderno de erros, 15 min cada"
          }
        ]
      },
      {
        "date": "2027-03-12",
        "weekday": "Sex",
        "title": "Última revisão",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "0h00",
            "label": "Caderno de modelos de peça",
            "duration": "1h",
            "desc": "reler os 8 esqueletos"
          },
          {
            "time": "1h00",
            "label": "Cuidados da discursiva",
            "duration": "15 min",
            "desc": "sem nome, assinatura ou rubrica; no máximo 60 linhas na peça e 10 nas questões"
          },
          {
            "time": "1h15",
            "label": "Logística",
            "duration": "15 min",
            "desc": "conferir o local de prova, o horário e separar documento com foto e caneta preta de corpo transparente"
          }
        ]
      },
      {
        "date": "2027-03-13",
        "weekday": "Sáb",
        "title": "Folga total",
        "rest": true,
        "notes": [],
        "blocks": []
      },
      {
        "date": "2027-03-14",
        "weekday": "Dom",
        "title": "PROVA",
        "rest": false,
        "notes": [],
        "blocks": [
          {
            "time": "Manhã",
            "label": "Prova objetiva",
            "duration": "5h",
            "desc": ""
          },
          {
            "time": "Tarde",
            "label": "Prova discursiva",
            "duration": "4h",
            "desc": ""
          }
        ]
      }
    ]
  }
]
