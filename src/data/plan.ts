import type { Note, Table } from './types'

export const EXAM_DATE = '2027-03-14'
export const START_DATE = '2026-11-30'

export const phases = [
  { name: 'Base', start: '2026-11-30', end: '2027-01-24' },
  { name: 'Aprofundamento', start: '2027-01-25', end: '2027-02-21' },
  { name: 'Reta final', start: '2027-02-22', end: '2027-03-14' },
]

export const summary =
  'A prova da PC PE é em 14/03/2027, e a PC GO não tem edital aberto. O cronograma é um só, puxado pelo edital de PE, que já cobre quase tudo que Delegado cobra em GO. Depois de 14/03, o foco passa para GO e para a prova oral de PE.'

export const keyFacts: Note[] = [
  { title: 'Rotina', text: '4h por dia, de segunda a sábado (24h por semana). Domingo é descanso.' },
  { title: 'Início', text: 'Segunda, 30/11/2026. Cerca de 15 semanas até a prova.' },
  { title: 'Simulado', text: 'Sábado, a cada 15 dias, no lugar do estudo do dia.' },
  { title: 'Peça prática', text: 'Treino nos sábados sem simulado e estudo de um modelo de peça às quartas.' },
  { title: 'Banca', text: 'Cebraspe em PE, múltipla escolha (A a E). Para GO, o último concurso foi do Instituto AOCP.' },
]

export const assumptions = [
  'Base em Penal, Processual Penal e Constitucional, nível intermediário. Se for do zero, a fase de base precisa ser mais longa.',
  'Inscrição em PE até 16/12/2026 (pagamento até 18/12).',
  'Uso de um sistema de questões com filtro por banca.',
  'Todos os 6 dias têm as mesmas 4h.',
]

export const dailyRoutine: Table = {
  head: ['Horário', 'Bloco', 'O que fazer'],
  rows: [
    ['0h00 – 0h15', 'Revisão', 'Caderno de erros e flashcards do dia anterior'],
    ['0h15 – 1h15', 'Teoria da principal', 'Um tópico do edital, em PDF ou videoaula acelerada'],
    ['1h15 – 1h45', 'Lei seca da principal', 'Artigos do tópico do dia, grifando prazos, verbos e exceções'],
    ['1h45 – 2h45', 'Questões da principal', '25 a 30 questões Cebraspe do tópico estudado. Anotar cada erro'],
    ['2h45 – 3h35', 'Secundária', '30 min de teoria ou lei seca e 10 questões (ou modelo de peça, às quartas)'],
    ['3h35 – 4h00', 'Jurisprudência', 'Um informativo do STF ou STJ: Penal, Processo Penal, Constitucional e Administrativo'],
  ],
}

export const routineRules = [
  'Questões sempre no mesmo dia da teoria.',
  'Todo erro vai para o caderno de erros com a frase da lei ou do julgado que resolve a questão.',
]

export const weeklyCycle: Table = {
  head: ['Dia', 'Principal (2h30)', 'Secundária A', 'Secundária B'],
  rows: [
    ['Segunda', 'Direito Penal', 'Medicina Legal', 'Direitos Humanos'],
    ['Terça', 'Processo Penal', 'Civil e Empresarial', 'Tributário'],
    ['Quarta', 'Constitucional', 'Modelo de peça', 'Modelo de peça'],
    ['Quinta', 'Administrativo', 'Legislação de PE', 'Civil e Empresarial'],
    ['Sexta', 'Legislação Extravagante', 'Criminologia', 'Ambiental'],
    ['Sábado', 'Discursiva (A) · Simulado (B)', '—', '—'],
    ['Domingo', 'Descanso', '—', '—'],
  ],
}

export const phaseDetails = [
  {
    name: 'Base',
    period: '30/11/2026 – 23/01/2027 · 8 semanas',
    focus: 'Ver todo o edital das 5 principais e uma volta nas secundárias',
    how: 'Rotina padrão. Na Extravagante, priorizar Drogas, Organização Criminosa, Abuso de Autoridade, Desarmamento, Maria da Penha, Hediondos, Interceptação e Lavagem.',
  },
  {
    name: 'Aprofundamento',
    period: '25/01 – 20/02/2027 · 4 semanas',
    focus: 'Questões e peça',
    how: 'Teoria cai para 30 min e questões sobem para 1h30. Uma segunda peça por semana, na quarta, no lugar do modelo.',
  },
  {
    name: 'Reta final',
    period: '22/02 – 13/03/2027 · 3 semanas',
    focus: 'Revisão, sem conteúdo novo',
    how: 'Teoria vira revisão do caderno de erros e da lei seca grifada. Jurisprudência só dos últimos 12 meses. De 08 a 12/03, ritmo leve; 13/03 é folga.',
  },
]

export const simulados = [
  { date: '2026-12-12', phase: 'Base', goal: 'Diagnóstico', note: 'Mostra de onde você parte' },
  { date: '2026-12-26', phase: 'Base', goal: '50+', note: '' },
  { date: '2027-01-09', phase: 'Base', goal: '55+', note: '' },
  { date: '2027-01-23', phase: 'Base', goal: '60+', note: 'Fecha a fase de base' },
  { date: '2027-02-06', phase: 'Aprofundamento', goal: '65+', note: '' },
  { date: '2027-02-20', phase: 'Aprofundamento', goal: '70+', note: '' },
  { date: '2027-03-06', phase: 'Reta final', goal: '70+', note: 'Último, uma semana antes da prova' },
]

export const simuladoAnalysis = [
  'Separar os erros em três tipos: não sabia, confundiu, desatenção.',
  'Passar "não sabia" e "confundiu" para o caderno de erros, com o artigo ou julgado.',
  'Anotar acertos por disciplina. Abaixo de 50% em dois simulados seguidos ganha um bloco extra na quinzena seguinte.',
]

export const disciplines: Table = {
  head: ['Disciplina', 'Questões', 'Serve p/ GO', 'Prioridade', 'Tempo / 2 sem.'],
  rows: [
    ['Direito Penal', '15', 'Sim', 'Alta · discursiva', '5h + discursiva'],
    ['Processo Penal', '15', 'Sim', 'Alta · base da peça', '5h + peça'],
    ['Constitucional', '12', 'Sim', 'Alta · discursiva', '5h'],
    ['Administrativo', '12', 'Sim', 'Alta', '5h'],
    ['Legislação Extravagante', '10', 'Sim', 'Alta · discursiva', '5h'],
    ['Civil e Empresarial', '6', 'Provável', 'Média', '1h40'],
    ['Medicina Legal', '5', 'Sim', 'Média', '50 min'],
    ['Criminologia', '5', 'Provável', 'Média', '50 min'],
    ['Direitos Humanos', '5', 'Provável', 'Média', '50 min'],
    ['Tributário', '5', 'Incerto', 'Média', '50 min'],
    ['Ambiental', '5', 'Incerto', 'Média', '50 min'],
    ['Legislação de PE', '5', 'Não', 'Média · lei seca', '50 min'],
  ],
}

export const pieceModels: Table = {
  head: ['Quarta', 'Peça', 'Base legal'],
  rows: [
    ['02/12', 'Prisão preventiva', 'CPP, arts. 311 a 316'],
    ['09/12', 'Prisão temporária', 'Lei 7.960/1989 e Lei 8.072/1990, art. 2º, § 4º'],
    ['16/12', 'Busca e apreensão domiciliar', 'CPP, arts. 240 a 250'],
    ['23/12', 'Interceptação telefônica', 'Lei 9.296/1996'],
    ['30/12', 'Interceptação telemática', 'Lei 9.296/1996, art. 1º, parágrafo único'],
    ['06/01', 'Captação ambiental', 'Lei 9.296/1996, art. 8º-A'],
    ['13/01', 'Quebra de sigilo bancário e fiscal', 'LC 105/2001 e Lei 12.850/2013'],
    ['20/01', 'Sigilo de dados telefônicos e telemáticos', 'Lei 12.965/2014 e Lei 12.850/2013'],
  ],
}

export const pieceNotes: Note[] = [
  {
    title: 'Estrutura',
    text: 'Endereçamento ao juiz competente; referência ao inquérito; síntese dos fatos; cabimento e fundamentos; pedido específico; manifestação do MP; fecho com "local, data, Delegado de Polícia".',
  },
  {
    title: 'Cuidados',
    text: 'Nada de nome, assinatura ou rubrica (anula a prova). Texto além das 60 linhas é ignorado. Cada erro de português desconta dos 14 pontos de escrita.',
  },
  {
    title: 'Questões de 10 linhas',
    text: 'Resposta direta na primeira linha, depois o artigo de lei e o entendimento do STF ou STJ. Nada de introdução.',
  },
]

export const exams: Table = {
  head: ['Item', 'PC PE (Edital 1/2026)', 'PC GO'],
  rows: [
    ['Situação', 'Aberto desde 02/10/2026', 'Sem edital; novo concurso só em 2027 ou 2028'],
    ['Banca', 'Cebraspe', '2022: Instituto AOCP'],
    ['Vagas', '45', '2022: 44'],
    ['Salário inicial', 'R$ 13.560,00', '2022: R$ 23.811,22'],
    ['Inscrição', 'Até 16/12/2026, taxa R$ 350, pagamento até 18/12', '—'],
    ['Objetiva', '14/03/2027, manhã, 5h. 100 questões A–E, mínimo 50', '2022: múltipla escolha, 5 alternativas'],
    ['Discursiva', '14/03/2027, tarde, 4h. 2 questões (15 pts) e 1 peça (70 pts). Mínimo 50', '2022: questão de 20 a 40 linhas'],
    ['Demais etapas', 'Médico, TAF (30/07–11/08/2027), investigação social, oral (07/11/2027), psicológica (09/01/2028), títulos, formação', '2022: TAF, médica, psicológica, investigação social, formação'],
  ],
}

export const afterExam =
  'Depois de 14/03/2027, o mesmo ciclo continua trocando a Legislação de PE pela de Goiás e as questões Cebraspe pelas da AOCP (ou da banca do novo edital). Se passar na objetiva e na discursiva, o sábado de discursiva vira treino da oral (07/11/2027). Comece o treino físico para o TAF até abril.'

export const sources: Note[] = [
  { title: 'Jurisprudência (25 min/dia)', text: 'Informativos do STF e STJ e Jurisprudência em Teses do STJ, de preferência comentados. Na reta final, só os últimos 12 meses.' },
  { title: 'Lei seca', text: 'CF, CP, CPP e leis extravagantes no site do Planalto; legislação de PE no site da Alepe. Sempre a versão compilada.' },
  { title: 'Questões', text: 'Cebraspe, múltipla escolha, cargo Delegado, últimos 5 anos. Depois de 14/03, Instituto AOCP para GO.' },
]
