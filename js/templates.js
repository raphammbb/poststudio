const TEMPLATES = [
  // ── Originais ─────────────────────────────────
  {
    id: 'quote', name: 'Citação', icon: '💬', category: 'marca',
    bg: 'gradiente-aurora',
    elements: [
      { type:'text', x:80, y:480, w:920, h:260, text:'"Escreva sua citação aqui."', fontSize:72, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.25 },
      { type:'text', x:80, y:780, w:920, h:80,  text:'— Autor', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'headline', name: 'Headline', icon: '📢', category: 'produto',
    bg: 'gradiente-slate',
    elements: [
      { type:'text', x:60, y:300, w:960, h:120, text:'TÍTULO PRINCIPAL', fontSize:96, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.1 },
      { type:'text', x:60, y:460, w:820, h:160, text:'Subtítulo com mais informações sobre o tema do post.', fontSize:42, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'left', lineHeight:1.4 },
      { type:'text', x:60, y:1220, w:400, h:70, text:'Saiba mais →', fontSize:36, fontFamily:'Inter', fontWeight:'600', color:'#7c5cf0', align:'left', lineHeight:1.2 },
    ],
  },
  {
    id: 'lista', name: 'Lista', icon: '📋', category: 'educacional',
    bg: 'geo-grid',
    elements: [
      { type:'text', x:60, y:80,  w:960, h:120, text:'Título da Lista', fontSize:72, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:280, w:960, h:80,  text:'01  Primeiro item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:400, w:960, h:80,  text:'02  Segundo item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.8)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:520, w:960, h:80,  text:'03  Terceiro item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.8)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:640, w:960, h:80,  text:'04  Quarto item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.6)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:760, w:960, h:80,  text:'05  Quinto item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.6)', align:'left', lineHeight:1.3 },
    ],
  },
  {
    id: 'antes-depois', name: 'Antes/Depois', icon: '↔️', category: 'educacional',
    bg: 'gradiente-dusk',
    elements: [
      { type:'text', x:60,  y:60,  w:960, h:100, text:'Antes e Depois', fontSize:64, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:260, w:460, h:60,  text:'ANTES', fontSize:28, fontFamily:'Inter', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:340, w:460, h:400, text:'Descreva a situacao anterior aqui.', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.5 },
      { type:'text', x:580, y:260, w:460, h:60,  text:'DEPOIS', fontSize:28, fontFamily:'Inter', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:580, y:340, w:460, h:400, text:'Descreva o resultado transformador aqui.', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'#ffffff', align:'left', lineHeight:1.5 },
    ],
  },
  {
    id: 'depoimento', name: 'Depoimento', icon: '⭐', category: 'produto',
    bg: 'gradiente-mint',
    elements: [
      { type:'text', x:80, y:120,  w:920, h:60,  text:'⭐⭐⭐⭐⭐', fontSize:48, fontFamily:'Inter', fontWeight:'400', color:'#f5c518', align:'center', lineHeight:1.2 },
      { type:'text', x:80, y:260,  w:920, h:500, text:'"Escreva o depoimento do cliente aqui. Quanto mais especifico e honesto, mais impacto causa."', fontSize:48, fontFamily:'Lora', fontWeight:'400', color:'#ffffff', align:'center', lineHeight:1.5 },
      { type:'text', x:80, y:1100, w:920, h:60,  text:'Nome do Cliente', fontSize:36, fontFamily:'Inter', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:80, y:1170, w:920, h:50,  text:'Cargo - Empresa', fontSize:28, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'capa-carrossel', name: 'Capa', icon: '🎠', category: 'carrossel',
    bg: 'geo-dots',
    elements: [
      { type:'text', x:60, y:420,  w:960, h:180, text:'TITULO DO CARROSSEL', fontSize:80, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.15 },
      { type:'text', x:60, y:640,  w:960, h:100, text:'Deslize para ver', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:1250, w:960, h:60,  text:'@suapagina', fontSize:30, fontFamily:'Inter', fontWeight:'500', color:'#7c5cf0', align:'center', lineHeight:1.2 },
    ],
  },
  // ── Educacional ────────────────────────────────
  {
    id: 'dica-do-dia', name: 'Dica do Dia', icon: '💡', category: 'educacional',
    bg: 'gradiente-slate',
    elements: [
      { type:'text', x:60, y:80,   w:960, h:80,  text:'DICA DO DIA', fontSize:32, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:200,  w:960, h:280, text:'Escreva sua dica aqui. Quanto mais objetiva e pratica, melhor o engajamento.', fontSize:58, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:1260, w:600, h:60,  text:'@suapagina', fontSize:30, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.4)', align:'left', lineHeight:1.2 },
    ],
  },
  {
    id: 'voce-sabia', name: 'Voce Sabia?', icon: '🤯', category: 'educacional',
    bg: 'gradiente-midnight',
    elements: [
      { type:'text', x:60, y:120, w:960, h:80,  text:'VOCE SABIA?', fontSize:36, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:240, w:960, h:500, text:'Escreva o fato surpreendente aqui. Use dados ou estatisticas reais para impactar.', fontSize:60, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.35 },
      { type:'text', x:60, y:900, w:960, h:80,  text:'Salva para nao esquecer', fontSize:32, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'mito-vs-real', name: 'Mito x Real', icon: '⚡', category: 'educacional',
    bg: 'gradiente-storm',
    elements: [
      { type:'text', x:60,  y:60,  w:960, h:80,  text:'MITO OU REALIDADE?', fontSize:40, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:220, w:460, h:60,  text:'MITO', fontSize:30, fontFamily:'Inter', fontWeight:'700', color:'#ef4444', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:310, w:460, h:300, text:'Descreva a crenca popular errada aqui.', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.8)', align:'left', lineHeight:1.5 },
      { type:'text', x:580, y:220, w:460, h:60,  text:'REAL', fontSize:30, fontFamily:'Inter', fontWeight:'700', color:'#22c55e', align:'center', lineHeight:1.2 },
      { type:'text', x:580, y:310, w:460, h:300, text:'Explique a verdade aqui de forma direta e clara.', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'#ffffff', align:'left', lineHeight:1.5 },
    ],
  },
  {
    id: 'passo-a-passo', name: 'Passo a Passo', icon: '🪜', category: 'educacional',
    bg: 'geo-grid',
    elements: [
      { type:'text', x:60,  y:60,  w:960, h:100, text:'Como fazer em 3 passos', fontSize:54, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60,  y:240, w:80,  h:80,  text:'01', fontSize:56, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1 },
      { type:'text', x:160, y:250, w:860, h:70,  text:'Primeiro passo - descreva aqui', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60,  y:420, w:80,  h:80,  text:'02', fontSize:56, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1 },
      { type:'text', x:160, y:430, w:860, h:70,  text:'Segundo passo - descreva aqui', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.3 },
      { type:'text', x:60,  y:600, w:80,  h:80,  text:'03', fontSize:56, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1 },
      { type:'text', x:160, y:610, w:860, h:70,  text:'Terceiro passo - descreva aqui', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.7)', align:'left', lineHeight:1.3 },
    ],
  },
  {
    id: 'checklist', name: 'Checklist', icon: '✅', category: 'educacional',
    bg: 'gradiente-forest',
    elements: [
      { type:'text', x:60, y:60,  w:960, h:100, text:'Checklist Essencial', fontSize:64, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:240, w:960, h:70,  text:'[X]  Item ja concluido', fontSize:40, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.45)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:330, w:960, h:70,  text:'[X]  Outro item concluido', fontSize:40, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.45)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:420, w:960, h:70,  text:'[ ]  Isso voce ainda nao fez', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:510, w:960, h:70,  text:'[ ]  Esse tambem ta faltando', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:600, w:960, h:70,  text:'[ ]  Ultimo item da lista', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.3 },
    ],
  },
  {
    id: 'glossario', name: 'Glossario', icon: '📖', category: 'educacional',
    bg: 'texture-paper',
    elements: [
      { type:'text', x:60, y:80,  w:960, h:60,  text:'GLOSSARIO', fontSize:26, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:200, w:960, h:160, text:'Palavra ou Termo', fontSize:100, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.1 },
      { type:'text', x:60, y:400, w:900, h:60,  text:'substantivo - categoria', fontSize:30, fontFamily:'DM Mono', fontWeight:'400', color:'rgba(255,255,255,0.4)', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:520, w:960, h:300, text:'Definicao completa do termo. Explique de forma clara e objetiva para que qualquer pessoa entenda.', fontSize:44, fontFamily:'Lora', fontWeight:'400', color:'rgba(255,255,255,0.9)', align:'left', lineHeight:1.6 },
    ],
  },
  {
    id: 'estatistica', name: 'Estatistica', icon: '📊', category: 'educacional',
    bg: 'gradiente-ocean',
    elements: [
      { type:'text', x:60, y:300,  w:960, h:260, text:'73%', fontSize:220, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1 },
      { type:'text', x:60, y:580,  w:960, h:100, text:'dos profissionais fazem isso', fontSize:50, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:760,  w:960, h:100, text:'Contextualize o dado aqui com mais detalhes sobre o que isso significa na pratica.', fontSize:34, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.5 },
      { type:'text', x:60, y:1260, w:960, h:50,  text:'Fonte: Nome da Fonte, 2024', fontSize:26, fontFamily:'DM Mono', fontWeight:'400', color:'rgba(255,255,255,0.3)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'comparativo', name: 'Comparativo', icon: '⚖️', category: 'educacional',
    bg: 'gradiente-slate',
    elements: [
      { type:'text', x:60,  y:60,  w:960, h:90,  text:'A vs B: qual e melhor?', fontSize:56, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:240, w:460, h:60,  text:'OPCAO A', fontSize:28, fontFamily:'Inter', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:320, w:460, h:280, text:'Vantagem 1\nVantagem 2\nVantagem 3', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.8 },
      { type:'text', x:580, y:240, w:460, h:60,  text:'OPCAO B', fontSize:28, fontFamily:'Inter', fontWeight:'700', color:'#9b7fff', align:'center', lineHeight:1.2 },
      { type:'text', x:580, y:320, w:460, h:280, text:'Vantagem 1\nVantagem 2\nVantagem 3', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.8 },
      { type:'text', x:60,  y:900, w:960, h:80,  text:'Qual voce prefere? Comenta abaixo', fontSize:36, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'fato-curioso', name: 'Fato Curioso', icon: '🔍', category: 'educacional',
    bg: 'gradiente-cosmic',
    elements: [
      { type:'text', x:60, y:100, w:960, h:70,  text:'FATO CURIOSO', fontSize:32, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:280, w:960, h:500, text:'Escreva o fato surpreendente aqui. Quanto mais inusitado, mais compartilhado.', fontSize:64, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:900, w:960, h:80,  text:'Compartilha com alguem que nao sabe disso', fontSize:34, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'timeline', name: 'Timeline', icon: '⏳', category: 'educacional',
    bg: 'geo-lines-h',
    elements: [
      { type:'text', x:60,  y:60,  w:960, h:90,  text:'A evolucao de...', fontSize:54, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60,  y:240, w:120, h:60,  text:'2020', fontSize:36, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:200, y:240, w:820, h:80,  text:'Descreva o que aconteceu neste periodo.', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.4 },
      { type:'text', x:60,  y:420, w:120, h:60,  text:'2022', fontSize:36, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:200, y:420, w:820, h:80,  text:'Descreva o que aconteceu neste periodo.', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.4 },
      { type:'text', x:60,  y:600, w:120, h:60,  text:'2024', fontSize:36, fontFamily:'DM Mono', fontWeight:'500', color:'#9b7fff', align:'left', lineHeight:1.2 },
      { type:'text', x:200, y:600, w:820, h:80,  text:'E hoje? O que mudou de verdade?', fontSize:38, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.4 },
    ],
  },
  // ── Engajamento ────────────────────────────────
  {
    id: 'pergunta', name: 'Pergunta', icon: '❓', category: 'engajamento',
    bg: 'gradiente-dusk',
    elements: [
      { type:'text', x:60, y:200, w:960, h:300, text:'Qual e a sua maior dificuldade com [tema]?', fontSize:72, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:600, w:960, h:80,  text:'Comenta aqui embaixo', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'poll-sim-nao', name: 'Sim ou Nao', icon: '🗳️', category: 'engajamento',
    bg: 'gradiente-slate',
    elements: [
      { type:'text', x:60,  y:100, w:960, h:200, text:'Voce faz [acao] todo dia?', fontSize:70, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.3 },
      { type:'text', x:60,  y:500, w:460, h:200, text:'SIM', fontSize:90, fontFamily:'Space Grotesk', fontWeight:'700', color:'#22c55e', align:'center', lineHeight:1.2 },
      { type:'text', x:560, y:500, w:460, h:200, text:'NAO', fontSize:90, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ef4444', align:'center', lineHeight:1.2 },
      { type:'text', x:60,  y:860, w:960, h:80,  text:'Comenta qual e o seu', fontSize:38, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'complete-frase', name: 'Complete a Frase', icon: '✏️', category: 'engajamento',
    bg: 'gradiente-midnight',
    elements: [
      { type:'text', x:60, y:160, w:960, h:80,  text:'COMPLETE A FRASE:', fontSize:34, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:320, w:960, h:360, text:'"Eu nunca consigo ___ sem primeiro ___."', fontSize:62, fontFamily:'Lora', fontWeight:'400', color:'#ffffff', align:'center', lineHeight:1.4 },
      { type:'text', x:60, y:820, w:960, h:80,  text:'Responde nos comentarios', fontSize:38, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'qual-voce', name: 'Qual Voce E?', icon: '🎯', category: 'engajamento',
    bg: 'abstract-blob',
    elements: [
      { type:'text', x:60,  y:80,  w:960, h:100, text:'Qual dos dois voce e?', fontSize:60, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:280, w:460, h:300, text:'Tipo A\nDescreve voce\naté aqui', fontSize:46, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'center', lineHeight:1.5 },
      { type:'text', x:580, y:280, w:460, h:300, text:'Tipo B\nOu sera que\ne esse?', fontSize:46, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.8)', align:'center', lineHeight:1.5 },
      { type:'text', x:60,  y:900, w:960, h:80,  text:'Comenta A ou B nos comentarios', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'salva-esse', name: 'Salva Esse', icon: '🔖', category: 'engajamento',
    bg: 'gradiente-aurora',
    elements: [
      { type:'text', x:60, y:340, w:960, h:200, text:'Salva esse post para usar depois', fontSize:72, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:600, w:960, h:150, text:'Esse conteudo e sobre [tema] e vai te ajudar com [beneficio]', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.65)', align:'center', lineHeight:1.5 },
    ],
  },
  {
    id: 'marque-amigo', name: 'Marque Alguem', icon: '👥', category: 'engajamento',
    bg: 'gradiente-rose',
    elements: [
      { type:'text', x:60, y:200, w:960, h:300, text:'Marque um amigo que precisa ver isso', fontSize:72, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.35 },
      { type:'text', x:60, y:580, w:960, h:200, text:'Escreva o motivo aqui - por que a pessoa precisa ver esse conteudo?', fontSize:46, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.65)', align:'center', lineHeight:1.5 },
    ],
  },
  {
    id: 'escolha-sua', name: 'Escolha a Sua', icon: '☝️', category: 'engajamento',
    bg: 'gradiente-storm',
    elements: [
      { type:'text', x:60,  y:80,  w:960, h:100, text:'Se voce so pudesse escolher um:', fontSize:52, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:40,  y:300, w:460, h:260, text:'Cafe da manha elaborado', fontSize:44, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'center', lineHeight:1.4 },
      { type:'text', x:580, y:300, w:460, h:260, text:'Energia para trabalhar', fontSize:44, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.8)', align:'center', lineHeight:1.4 },
      { type:'text', x:60,  y:760, w:960, h:80,  text:'Comenta a sua escolha', fontSize:36, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  {
    id: 'voce-concorda', name: 'Concorda?', icon: '🤝', category: 'engajamento',
    bg: 'gradiente-copper',
    elements: [
      { type:'text', x:60, y:100, w:960, h:80,  text:'VOCE CONCORDA?', fontSize:36, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:260, w:960, h:400, text:'"Escreva uma opiniao polarizante sobre seu nicho aqui."', fontSize:66, fontFamily:'Lora', fontWeight:'400', color:'#ffffff', align:'center', lineHeight:1.4 },
      { type:'text', x:60, y:820, w:960, h:80,  text:'Concorda ou discorda? Explica nos comentarios', fontSize:34, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.3 },
    ],
  },
  // ── Produto / Servico ──────────────────────────
  {
    id: 'lancamento', name: 'Lancamento', icon: '🚀', category: 'produto',
    bg: 'gradiente-neon-purple',
    elements: [
      { type:'text', x:60, y:120, w:960, h:80,  text:'E OFICIAL', fontSize:40, fontFamily:'Space Grotesk', fontWeight:'700', color:'#9b7fff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:280, w:960, h:280, text:'Nome do Produto ou Servico', fontSize:90, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.15 },
      { type:'text', x:60, y:620, w:960, h:120, text:'Descreva em uma frase o que e e para quem.', fontSize:46, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.4 },
      { type:'text', x:60, y:860, w:960, h:80,  text:'Link na bio para saber mais', fontSize:36, fontFamily:'Inter', fontWeight:'600', color:'#9b7fff', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'oferta', name: 'Oferta', icon: '💰', category: 'produto',
    bg: 'gradiente-gold',
    elements: [
      { type:'text', x:60,  y:80,  w:960, h:100, text:'OFERTA ESPECIAL', fontSize:42, fontFamily:'Space Grotesk', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
      { type:'text', x:60,  y:300, w:960, h:300, text:'R$ 297', fontSize:200, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1 },
      { type:'text', x:60,  y:640, w:960, h:80,  text:'por apenas R$ 97 (ate domingo)', fontSize:44, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.3 },
      { type:'text', x:200, y:820, w:680, h:80,  text:'Garantir minha vaga', fontSize:38, fontFamily:'Inter', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'features', name: 'Features', icon: '⚙️', category: 'produto',
    bg: 'geo-mesh',
    elements: [
      { type:'text', x:60, y:60,   w:960, h:100, text:'O que voce leva:', fontSize:56, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:240,  w:960, h:80,  text:'+ Feature ou beneficio 1', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:340,  w:960, h:80,  text:'+ Feature ou beneficio 2', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:440,  w:960, h:80,  text:'+ Feature ou beneficio 3', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.7)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:540,  w:960, h:80,  text:'+ Feature ou beneficio 4', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.55)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:640,  w:960, h:80,  text:'+ Feature ou beneficio 5', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.4)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:1240, w:960, h:60,  text:'Link na bio', fontSize:32, fontFamily:'Inter', fontWeight:'600', color:'#7c5cf0', align:'left', lineHeight:1.2 },
    ],
  },
  {
    id: 'como-funciona', name: 'Como Funciona', icon: '⚡', category: 'produto',
    bg: 'gradiente-ocean',
    elements: [
      { type:'text', x:60, y:60,  w:960, h:100, text:'Como funciona', fontSize:64, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:240, w:960, h:80,  text:'01 Voce faz isso', fontSize:44, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:360, w:960, h:80,  text:'02 Acontece isso', fontSize:44, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.8)', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:480, w:960, h:80,  text:'03 Resultado final', fontSize:44, fontFamily:'Inter', fontWeight:'700', color:'#9b7fff', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:660, w:960, h:120, text:'Simples assim. Sem complicacao.', fontSize:50, fontFamily:'Lora', fontWeight:'400', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.4 },
    ],
  },
  {
    id: 'resultado-numero', name: 'Resultado', icon: '📈', category: 'produto',
    bg: 'gradiente-jungle',
    elements: [
      { type:'text', x:60, y:120, w:960, h:80,  text:'RESULTADO REAL', fontSize:34, fontFamily:'Space Grotesk', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:300, w:960, h:300, text:'+1.200', fontSize:180, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1 },
      { type:'text', x:60, y:630, w:960, h:100, text:'seguidores em 30 dias', fontSize:52, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:820, w:960, h:120, text:'Quer saber como? Link na bio.', fontSize:42, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.4 },
    ],
  },
  {
    id: 'social-proof', name: 'Prova Social', icon: '⭐', category: 'produto',
    bg: 'gradiente-wine',
    elements: [
      { type:'text', x:60, y:100, w:960, h:120, text:'+500 alunos ja transformaram suas vidas', fontSize:70, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.25 },
      { type:'text', x:60, y:340, w:960, h:80,  text:'★ ★ ★ ★ ★', fontSize:56, fontFamily:'Inter', fontWeight:'400', color:'#f5c518', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:480, w:960, h:300, text:'"Depoimento curto e impactante de um cliente real."', fontSize:52, fontFamily:'Lora', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'center', lineHeight:1.5 },
      { type:'text', x:60, y:820, w:960, h:60,  text:'Nome · Cargo', fontSize:32, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'faq', name: 'FAQ', icon: '💬', category: 'produto',
    bg: 'texture-concrete',
    elements: [
      { type:'text', x:60, y:60,  w:960, h:80,  text:'DUVIDA FREQUENTE', fontSize:30, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:200, w:960, h:200, text:'"Qual e a diferenca entre X e Y?"', fontSize:62, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:460, w:960, h:60,  text:'Resposta:', fontSize:30, fontFamily:'Inter', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:540, w:960, h:400, text:'Explique a diferenca de forma direta e educativa. Use exemplos do dia a dia para tornar mais facil de entender.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.55 },
    ],
  },
  {
    id: 'garantia', name: 'Garantia', icon: '🛡️', category: 'produto',
    bg: 'gradiente-arctic',
    elements: [
      { type:'text', x:60, y:340, w:960, h:200, text:'Garantia de 7 dias', fontSize:90, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.15 },
      { type:'text', x:60, y:600, w:960, h:200, text:'Se em 7 dias voce nao estiver satisfeito, devolvemos 100% do seu investimento. Sem perguntas.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.5 },
    ],
  },
  // ── Pessoal / Marca ────────────────────────────
  {
    id: 'sobre-mim', name: 'Sobre Mim', icon: '👤', category: 'marca',
    bg: 'gradiente-copper',
    elements: [
      { type:'text', x:60, y:80,   w:960, h:80,  text:'SOBRE MIM', fontSize:30, fontFamily:'DM Mono', fontWeight:'500', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:200,  w:960, h:140, text:'Seu Nome Aqui', fontSize:100, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.1 },
      { type:'text', x:60, y:380,  w:960, h:60,  text:'Especialista em [area] - [Cidade]', fontSize:34, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.5)', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:500,  w:960, h:400, text:'Escreva uma bio curta e impactante. Quem voce e, quem voce ajuda, e o que te torna diferente.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.55 },
      { type:'text', x:60, y:1260, w:500, h:60,  text:'@suapagina', fontSize:30, fontFamily:'Inter', fontWeight:'600', color:'#7c5cf0', align:'left', lineHeight:1.2 },
    ],
  },
  {
    id: 'bastidores', name: 'Bastidores', icon: '🎬', category: 'marca',
    bg: 'texture-silk',
    elements: [
      { type:'text', x:60, y:80,  w:960, h:80,  text:'POR TRAS DOS PANOS', fontSize:30, fontFamily:'Space Grotesk', fontWeight:'700', color:'#7c5cf0', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:220, w:960, h:200, text:'Conte o que esta acontecendo nos bastidores', fontSize:66, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:500, w:960, h:400, text:'Compartilhe o processo, os desafios, os aprendizados. Autenticidade gera conexao.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'left', lineHeight:1.55 },
    ],
  },
  {
    id: 'conquista', name: 'Conquista', icon: '🏆', category: 'marca',
    bg: 'gradiente-gold',
    elements: [
      { type:'text', x:60, y:380, w:960, h:200, text:'Aconteceu! Uma conquista nova', fontSize:80, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:660, w:960, h:200, text:'Descreva a conquista. Quem voce era antes? O que mudou? Como chegou ate aqui?', fontSize:42, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.65)', align:'center', lineHeight:1.5 },
    ],
  },
  {
    id: 'agradecimento', name: 'Obrigado', icon: '🙏', category: 'marca',
    bg: 'gradiente-mint',
    elements: [
      { type:'text', x:60, y:300, w:960, h:120, text:'10.000', fontSize:140, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1 },
      { type:'text', x:60, y:480, w:960, h:80,  text:'seguidores', fontSize:56, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.7)', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:640, w:960, h:260, text:'Obrigado por cada curtida, comentario e compartilhamento. Voces sao a razao de eu continuar.', fontSize:46, fontFamily:'Lora', fontWeight:'400', color:'rgba(255,255,255,0.85)', align:'center', lineHeight:1.55 },
    ],
  },
  {
    id: 'manifesto', name: 'Manifesto', icon: '✊', category: 'marca',
    bg: 'abstract-spot',
    elements: [
      { type:'text', x:60, y:140,  w:960, h:900, text:'Acredito que todo mundo merece [seu valor central]. Por isso eu faco o que faco. Nao e sobre [o que nao e]. E sobre [o que realmente importa].', fontSize:58, fontFamily:'Playfair Display', fontWeight:'400', color:'#ffffff', align:'center', lineHeight:1.55 },
      { type:'text', x:60, y:1200, w:960, h:80,  text:'@suapagina', fontSize:36, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.4)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'rotina', name: 'Rotina', icon: '🌅', category: 'marca',
    bg: 'gradiente-dusk',
    elements: [
      { type:'text', x:60, y:60,  w:960, h:90,  text:'MINHA ROTINA', fontSize:44, fontFamily:'Space Grotesk', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:220, w:960, h:70,  text:'05h30 Acordo', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:310, w:960, h:70,  text:'06h00 Cafe e leitura', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.85)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:400, w:960, h:70,  text:'07h00 Exercicio', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.7)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:490, w:960, h:70,  text:'09h00 Trabalho focado', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.6)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:580, w:960, h:70,  text:'22h00 Descanso', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.45)', align:'left', lineHeight:1.3 },
    ],
  },
  // ── Data Especial ──────────────────────────────
  {
    id: 'aniversario', name: 'Aniversario', icon: '🎂', category: 'especial',
    bg: 'gradiente-cosmic',
    elements: [
      { type:'text', x:60, y:500, w:960, h:200, text:'Feliz Aniversario', fontSize:88, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:760, w:960, h:80,  text:'Nome da Pessoa', fontSize:50, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'meta-alcancada', name: 'Meta Batida', icon: '🎯', category: 'especial',
    bg: 'gradiente-neon-purple',
    elements: [
      { type:'text', x:60, y:140, w:960, h:100, text:'META BATIDA', fontSize:44, fontFamily:'Space Grotesk', fontWeight:'700', color:'#9b7fff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:340, w:960, h:300, text:'1 Milhao de Reais', fontSize:110, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.1 },
      { type:'text', x:60, y:700, w:960, h:200, text:'Hoje batemos essa marca. Obrigado a cada um que foi parte dessa historia.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.65)', align:'center', lineHeight:1.5 },
    ],
  },
  {
    id: 'retrospectiva', name: 'Retrospectiva', icon: '🔁', category: 'especial',
    bg: 'texture-marble',
    elements: [
      { type:'text', x:60, y:80,  w:960, h:100, text:'2024 em resumo', fontSize:60, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:260, w:960, h:80,  text:'Maior conquista do ano', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:360, w:960, h:80,  text:'Maior desafio superado', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.8)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:460, w:960, h:80,  text:'Maior aprendizado', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.6)', align:'left', lineHeight:1.3 },
      { type:'text', x:60, y:560, w:960, h:80,  text:'O que vem em 2025', fontSize:40, fontFamily:'Inter', fontWeight:'600', color:'rgba(255,255,255,0.45)', align:'left', lineHeight:1.3 },
    ],
  },
  {
    id: 'data-comemorativa', name: 'Data Especial', icon: '📅', category: 'especial',
    bg: 'abstract-flow',
    elements: [
      { type:'text', x:60, y:200, w:960, h:80,  text:'HOJE E O DIA DE', fontSize:36, fontFamily:'Space Grotesk', fontWeight:'700', color:'rgba(255,255,255,0.5)', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:360, w:960, h:260, text:'Nome da Data Comemorativa', fontSize:96, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:720, w:960, h:200, text:'O que voce vai fazer para celebrar? Compartilhe com a gente nos comentarios.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.6)', align:'center', lineHeight:1.5 },
    ],
  },
  // ── Carrossel ──────────────────────────────────
  {
    id: 'slide-intro', name: 'Slide Intro', icon: '📑', category: 'carrossel',
    bg: 'gradiente-slate',
    elements: [
      { type:'text', x:60, y:80,  w:200, h:60,  text:'01 / 08', fontSize:28, fontFamily:'DM Mono', fontWeight:'400', color:'rgba(255,255,255,0.3)', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:300, w:960, h:280, text:'Titulo do capitulo ou secao', fontSize:88, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.15 },
      { type:'text', x:60, y:640, w:800, h:120, text:'Uma frase introdutoria que contextualiza o que vem a seguir.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.6)', align:'left', lineHeight:1.4 },
    ],
  },
  {
    id: 'slide-interno', name: 'Slide Interno', icon: '📄', category: 'carrossel',
    bg: 'geo-dots',
    elements: [
      { type:'text', x:60, y:80,  w:200, h:60,  text:'02 / 08', fontSize:28, fontFamily:'DM Mono', fontWeight:'400', color:'rgba(255,255,255,0.3)', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:200, w:960, h:120, text:'Titulo do Topico', fontSize:72, fontFamily:'Space Grotesk', fontWeight:'700', color:'#ffffff', align:'left', lineHeight:1.2 },
      { type:'text', x:60, y:380, w:960, h:600, text:'Desenvolvimento do conteudo aqui. Use este espaco para explicar, exemplificar ou aprofundar o ponto principal deste slide.', fontSize:44, fontFamily:'Inter', fontWeight:'400', color:'rgba(255,255,255,0.8)', align:'left', lineHeight:1.6 },
    ],
  },
  {
    id: 'slide-final', name: 'Slide Final', icon: '🏁', category: 'carrossel',
    bg: 'gradiente-aurora',
    elements: [
      { type:'text', x:60, y:280,  w:960, h:240, text:'Gostou desse conteudo?', fontSize:84, fontFamily:'Playfair Display', fontWeight:'700', color:'#ffffff', align:'center', lineHeight:1.25 },
      { type:'text', x:60, y:600,  w:960, h:80,  text:'Segue para mais conteudos assim', fontSize:40, fontFamily:'Inter', fontWeight:'500', color:'rgba(255,255,255,0.65)', align:'center', lineHeight:1.3 },
      { type:'text', x:60, y:1220, w:960, h:80,  text:'@suapagina', fontSize:42, fontFamily:'Inter', fontWeight:'700', color:'#9b7fff', align:'center', lineHeight:1.2 },
    ],
  },
  {
    id: 'slide-numero', name: 'Slide Numero', icon: '🔢', category: 'carrossel',
    bg: 'geo-grid',
    elements: [
      { type:'text', x:60, y:80,  w:960, h:60,  text:'SERIE SOBRE [TEMA]', fontSize:26, fontFamily:'DM Mono', fontWeight:'500', color:'rgba(255,255,255,0.3)', align:'center', lineHeight:1.2 },
      { type:'text', x:60, y:400, w:960, h:400, text:'03', fontSize:360, fontFamily:'Space Grotesk', fontWeight:'700', color:'rgba(255,255,255,0.08)', align:'center', lineHeight:1 },
      { type:'text', x:60, y:840, w:960, h:120, text:'Conteudo deste slide em uma frase curta', fontSize:52, fontFamily:'Inter', fontWeight:'600', color:'#ffffff', align:'center', lineHeight:1.3 },
    ],
  },
];
