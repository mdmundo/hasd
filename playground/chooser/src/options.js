const options = [
  {
    category: 'Adoração e Louvor',
    number: '001',
    hymn: 'Ó Deus de Amor'
  },
  {
    category: 'Adoração e Louvor',
    number: '002',
    hymn: 'Ó Adorai o Senhor'
  },
  {
    category: 'Adoração e Louvor',
    number: '003',
    hymn: 'O Deus Eterno Reina'
  },
  {
    category: 'Adoração e Louvor',
    number: '004',
    hymn: 'Louvor ao Trino Deus'
  },
  {
    category: 'Adoração e Louvor',
    number: '005',
    hymn: 'Supremo Criador'
  },
  {
    category: 'Adoração e Louvor',
    number: '006',
    hymn: 'Por Belezas Naturais'
  },
  {
    category: 'Adoração e Louvor',
    number: '007',
    hymn: 'Sejas Louvado'
  },
  {
    category: 'Adoração e Louvor',
    number: '008',
    hymn: 'A Ti Rendemos Glórias'
  },
  {
    category: 'Adoração e Louvor',
    number: '009',
    hymn: 'Prece ao Trino Deus'
  },
  {
    category: 'Adoração e Louvor',
    number: '010',
    hymn: 'Louvemos o Rei'
  },
  {
    category: 'Adoração e Louvor',
    number: '011',
    hymn: 'Ao Deus de Abraão Louvai'
  },
  {
    category: 'Adoração e Louvor',
    number: '012',
    hymn: 'Vinde, Povo do Senhor'
  },
  {
    category: 'Adoração e Louvor',
    number: '013',
    hymn: 'Louvamos-Te, ó Deus'
  },
  {
    category: 'Adoração e Louvor',
    number: '014',
    hymn: 'Jubilosos Te Adoramos'
  },
  {
    category: 'Adoração e Louvor',
    number: '015',
    hymn: 'Vós, Criaturas do Senhor'
  },
  {
    category: 'Adoração e Louvor',
    number: '016',
    hymn: 'A Deus Demos Glória'
  },
  {
    category: 'Adoração e Louvor',
    number: '017',
    hymn: 'Nós Te Adoramos'
  },
  {
    category: 'Adoração e Louvor',
    number: '018',
    hymn: 'Santo! Santo! Santo!'
  },
  {
    category: 'Adoração e Louvor',
    number: '019',
    hymn: 'Ao Coro dos Arcanjos'
  },
  {
    category: 'Adoração e Louvor',
    number: '020',
    hymn: 'A Ti Toda Glória'
  },
  {
    category: 'Culto Matutino',
    number: '021',
    hymn: 'Vigiar e Orar'
  },
  {
    category: 'Culto Matutino',
    number: '022',
    hymn: 'Bem de Manhã'
  },
  {
    category: 'Culto Matutino',
    number: '023',
    hymn: 'De Manhã Bem Cedo Busco'
  },
  {
    category: 'Culto Matutino',
    number: '024',
    hymn: 'Desponta o Sol'
  },
  {
    category: 'Culto Matutino',
    number: '025',
    hymn: 'Bendito Seja Deus'
  },
  {
    category: 'Culto Matutino',
    number: '026',
    hymn: 'Luzes da Aurora'
  },
  {
    category: 'Culto Vespertino',
    number: '027',
    hymn: 'Perto do Lar'
  },
  {
    category: 'Culto Vespertino',
    number: '028',
    hymn: 'Morre o Dia'
  },
  {
    category: 'Culto Vespertino',
    number: '029',
    hymn: 'Já o Dia Longe Vai'
  },
  {
    category: 'Culto Vespertino',
    number: '030',
    hymn: 'Hora Feliz do Pôr do Sol'
  },
  {
    category: 'Deus, O Pai',
    number: '031',
    hymn: 'Sublime Amor'
  },
  {
    category: 'Deus, O Pai',
    number: '032',
    hymn: 'Deus é Nosso Pai Amado'
  },
  {
    category: 'Deus, O Pai',
    number: '033',
    hymn: 'Castelo Forte'
  },
  {
    category: 'Deus, O Pai',
    number: '034',
    hymn: 'Quão Grande És Tu'
  },
  {
    category: 'Deus, O Pai',
    number: '035',
    hymn: 'Tu És Fiel, Senhor'
  },
  {
    category: 'Deus, O Pai',
    number: '036',
    hymn: 'O Mundo é de Meu Deus'
  },
  {
    category: 'Deus, O Pai',
    number: '037',
    hymn: 'Tudo Que Há em Terra e Mar'
  },
  {
    category: 'Deus, O Pai',
    number: '038',
    hymn: 'Encanto Sem Igual'
  },
  {
    category: 'Deus, O Pai',
    number: '039',
    hymn: 'O Céu Azul'
  },
  {
    category: 'Deus, O Pai',
    number: '040',
    hymn: 'Filhos do Pai Celeste'
  },
  {
    category: 'Natal',
    number: '041',
    hymn: 'Glória ao Rei Que Vos Nasceu'
  },
  {
    category: 'Natal',
    number: '042',
    hymn: 'Noite de Paz'
  },
  {
    category: 'Natal',
    number: '043',
    hymn: 'Soou em Meio à Noite Azul'
  },
  {
    category: 'Natal',
    number: '044',
    hymn: 'Natal! Feliz Natal!'
  },
  {
    category: 'Natal',
    number: '045',
    hymn: 'Nasce Jesus'
  },
  {
    category: 'Natal',
    number: '046',
    hymn: 'Estrela de Luz'
  },
  {
    category: 'Natal',
    number: '047',
    hymn: 'Belém, Bendita És'
  },
  {
    category: 'Natal',
    number: '048',
    hymn: 'Ó Vinde, Adoremos'
  },
  {
    category: 'Natal',
    number: '049',
    hymn: 'Surgem Anjos Proclamando'
  },
  {
    category: 'Natal',
    number: '050',
    hymn: 'Num Berço de Palha'
  },
  {
    category: 'Natal',
    number: '051',
    hymn: 'Clara Noite'
  },
  {
    category: 'Vida e Ministério',
    number: '052',
    hymn: 'Vestido em Linho'
  },
  {
    category: 'Vida e Ministério',
    number: '053',
    hymn: 'Conta-me a História de Cristo'
  },
  {
    category: 'Vida e Ministério',
    number: '054',
    hymn: 'A Doce História'
  },
  {
    category: 'Vida e Ministério',
    number: '055',
    hymn: 'Cantarei a Linda História'
  },
  {
    category: 'Vida e Ministério',
    number: '056',
    hymn: 'As Mãos do Senhor'
  },
  {
    category: 'Vida e Ministério',
    number: '057',
    hymn: 'Eu Quisera Andar com Cristo'
  },
  {
    category: 'Vida e Ministério',
    number: '058',
    hymn: 'Conta-me a Velha História'
  },
  {
    category: 'Sofrimento e Morte',
    number: '059',
    hymn: "'Stavas Lá?"
  },
  {
    category: 'Sofrimento e Morte',
    number: '060',
    hymn: 'Foi por Você Também'
  },
  {
    category: 'Sofrimento e Morte',
    number: '061',
    hymn: 'Ao Ver a Cruz'
  },
  {
    category: 'Sofrimento e Morte',
    number: '062',
    hymn: 'Monte do Calvário'
  },
  {
    category: 'Sofrimento e Morte',
    number: '063',
    hymn: 'Houve Alguém'
  },
  {
    category: 'Sofrimento e Morte',
    number: '064',
    hymn: 'Cristo no Horto'
  },
  {
    category: 'Sofrimento e Morte',
    number: '065',
    hymn: 'Oh! Fronte Ensanguentada!'
  },
  {
    category: 'Sofrimento e Morte',
    number: '066',
    hymn: 'Na Senda do Calvário'
  },
  {
    category: 'Sofrimento e Morte',
    number: '067',
    hymn: 'Desceu Lá do Céu'
  },
  {
    category: 'Sofrimento e Morte',
    number: '068',
    hymn: 'Quando no Calvário'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '069',
    hymn: 'Cristo Já Ressuscitou'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '070',
    hymn: 'Porque Ele Vive'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '071',
    hymn: 'Saudai o Nome de Jesus (I)'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '072',
    hymn: 'Saudai o Nome de Jesus (II)'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '073',
    hymn: 'Rei dos Reis'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '074',
    hymn: 'Sempre Vencendo'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '075',
    hymn: 'Jesus Conquista'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '076',
    hymn: 'Louvai a Cristo'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '077',
    hymn: 'É Jesus o Salvador'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '078',
    hymn: 'Coroai-O Rei dos Reis'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '079',
    hymn: 'Glória ao Salvador'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '080',
    hymn: 'Há Tais Cantos Lá no Céu'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '081',
    hymn: 'Louvores a Meu Rei'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '082',
    hymn: 'Aleluia, Glória a Cristo!'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '083',
    hymn: 'Glórias ao Rei de Amor'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '084',
    hymn: 'O Cântico dos Salvos'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '085',
    hymn: 'Lindo És, Meu Mestre'
  },
  {
    category: 'Ressureição e Glorificação',
    number: '086',
    hymn: 'Ó Alegrai-vos, Filhos de Sião'
  },
  {
    category: 'Pastor e Amigo',
    number: '087',
    hymn: 'O Meu Pastor é o Bom Jesus'
  },
  {
    category: 'Pastor e Amigo',
    number: '088',
    hymn: 'Achei um Grande Amigo'
  },
  {
    category: 'Pastor e Amigo',
    number: '089',
    hymn: 'Meu Redentor, Meu Amigo e Irmão'
  },
  {
    category: 'Pastor e Amigo',
    number: '090',
    hymn: 'A Voz de Jesus'
  },
  {
    category: 'Pastor e Amigo',
    number: '091',
    hymn: 'Jesus é Melhor'
  },
  {
    category: 'Pastor e Amigo',
    number: '092',
    hymn: 'Eu Te Amo, Meu Mestre'
  },
  {
    category: 'Pastor e Amigo',
    number: '093',
    hymn: 'Precioso é Jesus Para Mim'
  },
  {
    category: 'Pastor e Amigo',
    number: '094',
    hymn: 'Sou de Jesus Agora'
  },
  {
    category: 'Pastor e Amigo',
    number: '095',
    hymn: 'Cristo é Tudo Para  Mim'
  },
  {
    category: 'Pastor e Amigo',
    number: '096',
    hymn: 'A Cristo Eu Amo'
  },
  {
    category: 'Pastor e Amigo',
    number: '097',
    hymn: 'Meu Divino Protetor'
  },
  {
    category: 'Pastor e Amigo',
    number: '098',
    hymn: 'Por Que me Amou Assim?'
  },
  {
    category: 'Pastor e Amigo',
    number: '099',
    hymn: 'Noventa e Nove Ovelhas'
  },
  {
    category: 'Pastor e Amigo',
    number: '100',
    hymn: 'Há um Amigo'
  },
  {
    category: 'Pastor e Amigo',
    number: '101',
    hymn: 'Não Há Nome Mais Amável'
  },
  {
    category: 'Pastor e Amigo',
    number: '102',
    hymn: 'Que Grande Amigo!'
  },
  {
    category: 'Pastor e Amigo',
    number: '103',
    hymn: 'Nome Precioso'
  },
  {
    category: 'Pastor e Amigo',
    number: '104',
    hymn: 'Jesus, Teu Nome Satisfaz'
  },
  {
    category: 'Pastor e Amigo',
    number: '105',
    hymn: 'A Terna Voz do Salvador'
  },
  {
    category: 'Pastor e Amigo',
    number: '106',
    hymn: 'Amigo Mui Precioso'
  },
  {
    category: 'Pastor e Amigo',
    number: '107',
    hymn: 'Alegrias Vem Trazendo'
  },
  {
    category: 'Pastor e Amigo',
    number: '108',
    hymn: 'Tudo Ele Fez por Mim'
  },
  {
    category: 'Pastor e Amigo',
    number: '109',
    hymn: 'Jesus me Transformou'
  },
  {
    category: 'Pastor e Amigo',
    number: '110',
    hymn: 'Perfeita Paz'
  },
  {
    category: 'Pastor e Amigo',
    number: '111',
    hymn: 'Não Há Amigo Igual a Cristo'
  },
  {
    category: 'Pastor e Amigo',
    number: '112',
    hymn: 'Ele Vive'
  },
  {
    category: 'Pastor e Amigo',
    number: '113',
    hymn: 'Amor Glorioso'
  },
  {
    category: 'Pastor e Amigo',
    number: '114',
    hymn: 'Meu Jesus é Cativante'
  },
  {
    category: 'Pastor e Amigo',
    number: '115',
    hymn: 'Foi Amor'
  },
  {
    category: 'Pastor e Amigo',
    number: '116',
    hymn: 'De um Nome eu Sei'
  },
  {
    category: 'Pastor e Amigo',
    number: '117',
    hymn: 'Se Tu Buscares a Jesus'
  },
  {
    category: 'Pastor e Amigo',
    number: '118',
    hymn: 'Jesus, o Bom Amigo'
  },
  {
    category: 'Pastor e Amigo',
    number: '119',
    hymn: 'O Melhor Amigo'
  },
  {
    category: 'Pastor e Amigo',
    number: '120',
    hymn: 'Amor Que por Amor Desceste'
  },
  {
    category: 'Pastor e Amigo',
    number: '121',
    hymn: 'Divino Pastor'
  },
  {
    category: 'Pastor e Amigo',
    number: '122',
    hymn: 'O Que Penso de Meu Mestre'
  },
  {
    category: 'Pastor e Amigo',
    number: '123',
    hymn: 'O Amor de Jesus'
  },
  {
    category: 'Pastor e Amigo',
    number: '124',
    hymn: 'Meu Nome em Suas Mãos'
  },
  {
    category: 'Pastor e Amigo',
    number: '125',
    hymn: 'Por Jesus Desprezo o Mundo'
  },
  {
    category: 'Segunda Vinda',
    number: '126',
    hymn: 'Vigiai, Cristãos'
  },
  {
    category: 'Segunda Vinda',
    number: '127',
    hymn: 'Quando Deus Fizer Chamada'
  },
  {
    category: 'Segunda Vinda',
    number: '128',
    hymn: 'O Rei Vem Vindo'
  },
  {
    category: 'Segunda Vinda',
    number: '129',
    hymn: 'Nenhum Vale Escuro'
  },
  {
    category: 'Segunda Vinda',
    number: '130',
    hymn: 'O Rei Vindouro'
  },
  {
    category: 'Segunda Vinda',
    number: '131',
    hymn: 'Triunfante Vem Jesus'
  },
  {
    category: 'Segunda Vinda',
    number: '132',
    hymn: 'Quando o Rei Vier'
  },
  {
    category: 'Segunda Vinda',
    number: '133',
    hymn: 'Cristo Volta Brevemente'
  },
  {
    category: 'Segunda Vinda',
    number: '134',
    hymn: 'Breve Jesus Voltará'
  },
  {
    category: 'Segunda Vinda',
    number: '135',
    hymn: 'Guarda, Vê se Muito Falta'
  },
  {
    category: 'Segunda Vinda',
    number: '136',
    hymn: 'Cristo não Tarda a Voltar'
  },
  {
    category: 'Segunda Vinda',
    number: '137',
    hymn: 'Anunciai Pelas Montanhas'
  },
  {
    category: 'Segunda Vinda',
    number: '138',
    hymn: 'A Manhã de Luz'
  },
  {
    category: 'Segunda Vinda',
    number: '139',
    hymn: 'Jesus à Terra Voltará'
  },
  {
    category: 'Segunda Vinda',
    number: '140',
    hymn: 'Ó Vem, Emanuel!'
  },
  {
    category: 'Segunda Vinda',
    number: '141',
    hymn: 'O Dia Não Sei'
  },
  {
    category: 'Segunda Vinda',
    number: '142',
    hymn: 'Bela Manhã'
  },
  {
    category: 'Segunda Vinda',
    number: '143',
    hymn: 'Será de Manhã?'
  },
  {
    category: 'Segunda Vinda',
    number: '144',
    hymn: 'O Romper da Alva'
  },
  {
    category: 'Segunda Vinda',
    number: '145',
    hymn: 'Jesus Voltará'
  },
  {
    category: 'Segunda Vinda',
    number: '146',
    hymn: 'Maranata'
  },
  {
    category: 'Segunda Vinda',
    number: '147',
    hymn: 'Nós O Veremos'
  },
  {
    category: 'Segunda Vinda',
    number: '148',
    hymn: 'Cristo Vem'
  },
  {
    category: 'Segunda Vinda',
    number: '149',
    hymn: 'Espero a Manhã Radiosa'
  },
  {
    category: 'Segunda Vinda',
    number: '150',
    hymn: 'Não Desistir'
  },
  {
    category: 'Segunda Vinda',
    number: '151',
    hymn: 'Cristo Virá Outra Vez'
  },
  {
    category: 'Segunda Vinda',
    number: '152',
    hymn: 'Vencendo Vem Jesus'
  },
  {
    category: 'Segunda Vinda',
    number: '153',
    hymn: 'Já se Veem os Sinais'
  },
  {
    category: 'Espírito Santo',
    number: '154',
    hymn: 'Ó Vem, Espírito de Amor'
  },
  {
    category: 'Espírito Santo',
    number: '155',
    hymn: 'Vive em Mim'
  },
  {
    category: 'Espírito Santo',
    number: '156',
    hymn: 'Vem, Espírito Divino'
  },
  {
    category: 'Espírito Santo',
    number: '157',
    hymn: 'O Santo Espírito Desceu'
  },
  {
    category: 'Espírito Santo',
    number: '158',
    hymn: 'Suave Espírito'
  },
  {
    category: 'Espírito Santo',
    number: '159',
    hymn: 'Chuvas de Bênçãos'
  },
  {
    category: 'Espírito Santo',
    number: '160',
    hymn: 'Concede-nos o Espírito'
  },
  {
    category: 'Espírito Santo',
    number: '161',
    hymn: 'Vem, Santo Espírito, Agora'
  },
  {
    category: 'Santa Escritura',
    number: '162',
    hymn: 'Que Diz a Bíblia?'
  },
  {
    category: 'Santa Escritura',
    number: '163',
    hymn: 'Teu Livro é Qual Jardim'
  },
  {
    category: 'Santa Escritura',
    number: '164',
    hymn: 'Que Firme Alicerce!'
  },
  {
    category: 'Santa Escritura',
    number: '165',
    hymn: 'Dá-me a Bíblia'
  },
  {
    category: 'Santa Escritura',
    number: '166',
    hymn: 'Novas de Amor e Vida'
  },
  {
    category: 'Chamado',
    number: '167',
    hymn: 'Vem a Cristo'
  },
  {
    category: 'Chamado',
    number: '168',
    hymn: 'A Última Hora'
  },
  {
    category: 'Chamado',
    number: '169',
    hymn: 'Deixa Entrar o Rei da Glória'
  },
  {
    category: 'Chamado',
    number: '170',
    hymn: 'Só um Passo'
  },
  {
    category: 'Chamado',
    number: '171',
    hymn: 'Água da Vida'
  },
  {
    category: 'Chamado',
    number: '172',
    hymn: 'Na Cruz Morri por Ti'
  },
  {
    category: 'Chamado',
    number: '173',
    hymn: 'Jesus Está Esperando'
  },
  {
    category: 'Chamado',
    number: '174',
    hymn: 'Segue-Me'
  },
  {
    category: 'Chamado',
    number: '175',
    hymn: 'Manso e Suave'
  },
  {
    category: 'Chamado',
    number: '176',
    hymn: 'À Tua Porta Cristo Está'
  },
  {
    category: 'Chamado',
    number: '177',
    hymn: 'Ó Vem, Aflito Coração'
  },
  {
    category: 'Chamado',
    number: '178',
    hymn: 'Amor Sem Igual'
  },
  {
    category: 'Chamado',
    number: '179',
    hymn: 'Vinde a Mim'
  },
  {
    category: 'Chamado',
    number: '180',
    hymn: 'Foge Para o Monte'
  },
  {
    category: 'Chamado',
    number: '181',
    hymn: 'Oh, Vinde à Fonte'
  },
  {
    category: 'Chamado',
    number: '182',
    hymn: 'Cristo te Chama'
  },
  {
    category: 'Chamado',
    number: '183',
    hymn: 'Dá Teu Coração a Jesus'
  },
  {
    category: 'Chamado',
    number: '184',
    hymn: 'Deixa a Luz do Céu Entrar'
  },
  {
    category: 'Chamado',
    number: '185',
    hymn: 'Já Avaliaste o Preço?'
  },
  {
    category: 'Chamado',
    number: '186',
    hymn: 'Quem Ouvir as Novas'
  },
  {
    category: 'Chamado',
    number: '187',
    hymn: 'Ouvi Jesus a me Dizer'
  },
  {
    category: 'Graça e Redenção',
    number: '188',
    hymn: 'A Nós a Porta Franca Está'
  },
  {
    category: 'Graça e Redenção',
    number: '189',
    hymn: 'Junto à Cruz'
  },
  {
    category: 'Graça e Redenção',
    number: '190',
    hymn: 'Seu Maravilhoso Olhar'
  },
  {
    category: 'Graça e Redenção',
    number: '191',
    hymn: 'Quero Estar ao Pé da Cruz'
  },
  {
    category: 'Graça e Redenção',
    number: '192',
    hymn: 'Infinita Graça'
  },
  {
    category: 'Graça e Redenção',
    number: '193',
    hymn: 'Creio em Milagres'
  },
  {
    category: 'Graça e Redenção',
    number: '194',
    hymn: 'Teus Pecados Brancos se Farão'
  },
  {
    category: 'Graça e Redenção',
    number: '195',
    hymn: 'Rocha Eterna'
  },
  {
    category: 'Graça e Redenção',
    number: '196',
    hymn: 'Livre Perdão'
  },
  {
    category: 'Graça e Redenção',
    number: '197',
    hymn: 'Cristo Tocou-me'
  },
  {
    category: 'Graça e Redenção',
    number: '198',
    hymn: 'O Maior Milagre'
  },
  {
    category: 'Graça e Redenção',
    number: '199',
    hymn: 'Olhai e Vivei'
  },
  {
    category: 'Graça e Redenção',
    number: '200',
    hymn: 'Tens Vida em Olhar'
  },
  {
    category: 'Graça e Redenção',
    number: '201',
    hymn: 'Meu Cálice Transborda'
  },
  {
    category: 'Graça e Redenção',
    number: '202',
    hymn: 'Eis uma Fonte'
  },
  {
    category: 'Graça e Redenção',
    number: '203',
    hymn: 'Ó Jesus, Habita em Mim'
  },
  {
    category: 'Graça e Redenção',
    number: '204',
    hymn: 'Maravilhosa Graça'
  },
  {
    category: 'Graça e Redenção',
    number: '205',
    hymn: 'Alvo Mais que a Neve'
  },
  {
    category: 'Graça e Redenção',
    number: '206',
    hymn: 'Seu Sangue Tem Poder'
  },
  {
    category: 'Graça e Redenção',
    number: '207',
    hymn: 'Vida em Olhar'
  },
  {
    category: 'Graça e Redenção',
    number: '208',
    hymn: 'Graça Excelsa'
  },
  {
    category: 'Graça e Redenção',
    number: '209',
    hymn: 'Jesus me Remiu'
  },
  {
    category: 'Graça e Redenção',
    number: '210',
    hymn: 'Perdão, Poder e Paz'
  },
  {
    category: 'Graça e Redenção',
    number: '211',
    hymn: 'Rude Cruz'
  },
  {
    category: 'Graça e Redenção',
    number: '212',
    hymn: 'Um Novo Nome Lá na Glória'
  },
  {
    category: 'Graça e Redenção',
    number: '213',
    hymn: 'Graça de Deus'
  },
  {
    category: 'Graça e Redenção',
    number: '214',
    hymn: 'Manancial de Toda Bênção'
  },
  {
    category: 'Graça e Redenção',
    number: '215',
    hymn: 'Remido'
  },
  {
    category: 'Alegria e Paz',
    number: '216',
    hymn: 'Eu Achei Junto à Cruz'
  },
  {
    category: 'Alegria e Paz',
    number: '217',
    hymn: 'Ando Sempre Alegre'
  },
  {
    category: 'Alegria e Paz',
    number: '218',
    hymn: 'A Paz de Deus'
  },
  {
    category: 'Alegria e Paz',
    number: '219',
    hymn: 'Sempre Alegre'
  },
  {
    category: 'Alegria e Paz',
    number: '220',
    hymn: 'É Prazer Servir a Cristo'
  },
  {
    category: 'Alegria e Paz',
    number: '221',
    hymn: 'Mui Triste Eu Andava'
  },
  {
    category: 'Alegria e Paz',
    number: '222',
    hymn: 'Oh! Que Belo Hino Deus me Deu'
  },
  {
    category: 'Alegria e Paz',
    number: '223',
    hymn: 'Jesus Achou-me'
  },
  {
    category: 'Alegria e Paz',
    number: '224',
    hymn: 'Satisfeito Estou com Cristo'
  },
  {
    category: 'Alegria e Paz',
    number: '225',
    hymn: 'Se Tens Amor'
  },
  {
    category: 'Alegria e Paz',
    number: '226',
    hymn: 'É Manhã no Coração'
  },
  {
    category: 'Alegria e Paz',
    number: '227',
    hymn: 'Luz Bendita,Luz Gloriosa'
  },
  {
    category: 'Alegria e Paz',
    number: '228',
    hymn: 'Eu Ouço um Cantar Divinal'
  },
  {
    category: 'Alegria e Paz',
    number: '229',
    hymn: 'Teu Coração em Paz'
  },
  {
    category: 'Alegria e Paz',
    number: '230',
    hymn: 'Sou Feliz com Jesus'
  },
  {
    category: 'Alegria e Paz',
    number: '231',
    hymn: 'Tenho um Hino em Meu Coração'
  },
  {
    category: 'Alegria e Paz',
    number: '232',
    hymn: 'Cantarei ao Meu Salvador'
  },
  {
    category: 'Alegria e Paz',
    number: '233',
    hymn: 'Com Cristo no Meu Coração'
  },
  {
    category: 'Alegria e Paz',
    number: '234',
    hymn: 'Oh, Dia Feliz!'
  },
  {
    category: 'Alegria e Paz',
    number: '235',
    hymn: 'Hoje Sou Feliz'
  },
  {
    category: 'Alegria e Paz',
    number: '236',
    hymn: 'Cantando Vou'
  },
  {
    category: 'Alegria e Paz',
    number: '237',
    hymn: 'Junto ao Bondoso Deus'
  },
  {
    category: 'Alegria e Paz',
    number: '238',
    hymn: 'Amor nos Faz Contentes'
  },
  {
    category: 'Alegria e Paz',
    number: '239',
    hymn: 'Exulta, Meu Coração'
  },
  {
    category: 'Gratidão e Louvor',
    number: '240',
    hymn: 'Bendita Segurança'
  },
  {
    category: 'Gratidão e Louvor',
    number: '241',
    hymn: 'Cantarei de Jesus Cristo'
  },
  {
    category: 'Gratidão e Louvor',
    number: '242',
    hymn: "Ó Minh'Alma, a Deus Bendize"
  },
  {
    category: 'Gratidão e Louvor',
    number: '243',
    hymn: 'Que Te Darei, Meu Mestre?'
  },
  {
    category: 'Gratidão e Louvor',
    number: '244',
    hymn: 'Conta as Bênçãos'
  },
  {
    category: 'Gratidão e Louvor',
    number: '245',
    hymn: 'Gratidão'
  },
  {
    category: 'Gratidão e Louvor',
    number: '246',
    hymn: 'Vinde Vós, Fiéis, Cantar'
  },
  {
    category: 'Gratidão e Louvor',
    number: '247',
    hymn: 'Graças'
  },
  {
    category: 'Gratidão e Louvor',
    number: '248',
    hymn: 'Desde Que Eu Achei Perdão'
  },
  {
    category: 'Gratidão e Louvor',
    number: '249',
    hymn: 'Como Agradecer'
  },
  {
    category: 'Gratidão e Louvor',
    number: '250',
    hymn: 'Cantarei de Meu Jesus'
  },
  {
    category: 'Fé e Confiança',
    number: '251',
    hymn: 'Tem Fé em Deus'
  },
  {
    category: 'Fé e Confiança',
    number: '252',
    hymn: 'Nunca Desanimes'
  },
  {
    category: 'Fé e Confiança',
    number: '253',
    hymn: 'Minha Esperança'
  },
  {
    category: 'Fé e Confiança',
    number: '254',
    hymn: 'Não Consentir!'
  },
  {
    category: 'Fé e Confiança',
    number: '255',
    hymn: 'Oh! Eu Não Sei, Senhor'
  },
  {
    category: 'Fé e Confiança',
    number: '256',
    hymn: 'Ó Salvador, Creio em Ti'
  },
  {
    category: 'Fé e Confiança',
    number: '257',
    hymn: "Ó Minh'Alma, Espera"
  },
  {
    category: 'Fé e Confiança',
    number: '258',
    hymn: 'Fé dos Nossos Pais'
  },
  {
    category: 'Fé e Confiança',
    number: '259',
    hymn: 'Eu Sei em Quem Tenho Crido'
  },
  {
    category: 'Fé e Confiança',
    number: '260',
    hymn: 'Jesus Contemplará a Fé'
  },
  {
    category: 'Fé e Confiança',
    number: '261',
    hymn: 'Fé é a Vitória'
  },
  {
    category: 'Fé e Confiança',
    number: '262',
    hymn: 'Minha Fé Bem Segura Está'
  },
  {
    category: 'Fé e Confiança',
    number: '263',
    hymn: 'Deus é Sabedor'
  },
  {
    category: 'Fé e Confiança',
    number: '264',
    hymn: 'Um Dia Ele Esclarecerá'
  },
  {
    category: 'Fé e Confiança',
    number: '265',
    hymn: 'Eu Creio'
  },
  {
    category: 'Fé e Confiança',
    number: '266',
    hymn: 'Conformação'
  },
  {
    category: 'Fé e Confiança',
    number: '267',
    hymn: 'Aprendi o Bom Segredo'
  },
  {
    category: 'Fé e Confiança',
    number: '268',
    hymn: 'Suas Promessas'
  },
  {
    category: 'Fé e Confiança',
    number: '269',
    hymn: 'Eu Sei Que Vive o Redentor'
  },
  {
    category: 'Fé e Confiança',
    number: '270',
    hymn: 'A Fé em Deus'
  },
  {
    category: 'Fé e Confiança',
    number: '271',
    hymn: 'Que Prazer é Ser de Cristo'
  },
  {
    category: 'Fé e Confiança',
    number: '272',
    hymn: 'Olha com Fé Para Cima'
  },
  {
    category: 'Fé e Confiança',
    number: '273',
    hymn: 'Confia em Deus'
  },
  {
    category: 'Fé e Confiança',
    number: '274',
    hymn: 'Firme nas Promessas'
  },
  {
    category: 'Fé e Confiança',
    number: '275',
    hymn: 'Qual Firme Cedro'
  },
  {
    category: 'Consagração e Lealdade',
    number: '276',
    hymn: 'Prece Vespertina'
  },
  {
    category: 'Consagração e Lealdade',
    number: '277',
    hymn: 'Jesus, Eu Venho a Ti'
  },
  {
    category: 'Consagração e Lealdade',
    number: '278',
    hymn: 'Tal Qual Estou'
  },
  {
    category: 'Consagração e Lealdade',
    number: '279',
    hymn: 'Viver por Cristo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '280',
    hymn: 'O Mestre nos Chama'
  },
  {
    category: 'Consagração e Lealdade',
    number: '281',
    hymn: 'Eu Venho a Ti, Senhor'
  },
  {
    category: 'Consagração e Lealdade',
    number: '282',
    hymn: 'Tempo de Ser Santo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '283',
    hymn: 'No Querer de Deus'
  },
  {
    category: 'Consagração e Lealdade',
    number: '284',
    hymn: 'Tudo por Cristo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '285',
    hymn: 'Pertenço a Cristo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '286',
    hymn: 'Pai, Eu me Achego a Ti'
  },
  {
    category: 'Consagração e Lealdade',
    number: '287',
    hymn: 'Minha Entrega'
  },
  {
    category: 'Consagração e Lealdade',
    number: '288',
    hymn: 'Ser Igual a Cristo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '289',
    hymn: 'Mais Perto da Tua Cruz'
  },
  {
    category: 'Consagração e Lealdade',
    number: '290',
    hymn: 'Jesus, Sempre Te Amo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '291',
    hymn: 'Muitos Há Que me Contemplam'
  },
  {
    category: 'Consagração e Lealdade',
    number: '292',
    hymn: 'Onde Quer Que Seja'
  },
  {
    category: 'Consagração e Lealdade',
    number: '293',
    hymn: 'Teu Divinal Amor'
  },
  {
    category: 'Consagração e Lealdade',
    number: '294',
    hymn: 'Não Eu, Mas Cristo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '295',
    hymn: 'Tudo Entregarei'
  },
  {
    category: 'Consagração e Lealdade',
    number: '296',
    hymn: 'Que Faria Cristo?'
  },
  {
    category: 'Consagração e Lealdade',
    number: '297',
    hymn: 'Minha Cruz'
  },
  {
    category: 'Consagração e Lealdade',
    number: '298',
    hymn: 'Toma, ó Deus, Meu Coração'
  },
  {
    category: 'Consagração e Lealdade',
    number: '299',
    hymn: 'Eis-nos Prontos'
  },
  {
    category: 'Consagração e Lealdade',
    number: '300',
    hymn: 'Herdeiro do Reino'
  },
  {
    category: 'Consagração e Lealdade',
    number: '301',
    hymn: 'Crer e Observar'
  },
  {
    category: 'Consagração e Lealdade',
    number: '302',
    hymn: 'Minha Oração'
  },
  {
    category: 'Consagração e Lealdade',
    number: '303',
    hymn: 'Se Cristo For Comigo'
  },
  {
    category: 'Consagração e Lealdade',
    number: '304',
    hymn: 'Veem os Outros Cristo em Ti?'
  },
  {
    category: 'Consagração e Lealdade',
    number: '305',
    hymn: 'O Teu Querer'
  },
  {
    category: 'Serviço Cristão',
    number: '306',
    hymn: 'Diz, Senhor'
  },
  {
    category: 'Serviço Cristão',
    number: '307',
    hymn: 'Cristo nos Conclama'
  },
  {
    category: 'Serviço Cristão',
    number: '308',
    hymn: 'Brilha no Meio do Teu Viver'
  },
  {
    category: 'Serviço Cristão',
    number: '309',
    hymn: 'Vamos à Colheita'
  },
  {
    category: 'Serviço Cristão',
    number: '310',
    hymn: 'O Mestre Chama'
  },
  {
    category: 'Serviço Cristão',
    number: '311',
    hymn: 'Dai-nos Luz'
  },
  {
    category: 'Serviço Cristão',
    number: '312',
    hymn: 'Havemos de Colher'
  },
  {
    category: 'Serviço Cristão',
    number: '313',
    hymn: 'A Grande Comissão'
  },
  {
    category: 'Serviço Cristão',
    number: '314',
    hymn: 'Guarda, Faz Troar ao Longe'
  },
  {
    category: 'Serviço Cristão',
    number: '315',
    hymn: 'Hoje Ajuda a Alguém'
  },
  {
    category: 'Serviço Cristão',
    number: '316',
    hymn: 'Não me Falaram de Cristo'
  },
  {
    category: 'Serviço Cristão',
    number: '317',
    hymn: 'Sobre o Altar'
  },
  {
    category: 'Serviço Cristão',
    number: '318',
    hymn: 'Servi Alegremente'
  },
  {
    category: 'Serviço Cristão',
    number: '319',
    hymn: 'Mãos ao Trabalho'
  },
  {
    category: 'Serviço Cristão',
    number: '320',
    hymn: 'A Todo Semelhante Meu'
  },
  {
    category: 'Serviço Cristão',
    number: '321',
    hymn: 'Ao Mundo Vou Contar'
  },
  {
    category: 'Serviço Cristão',
    number: '322',
    hymn: 'No Serviço do Meu Rei'
  },
  {
    category: 'Serviço Cristão',
    number: '323',
    hymn: 'Eis de Cristo a Voz Que Chama'
  },
  {
    category: 'Serviço Cristão',
    number: '324',
    hymn: 'Mãos'
  },
  {
    category: 'Serviço Cristão',
    number: '325',
    hymn: 'As Novas do Evangelho'
  },
  {
    category: 'Serviço Cristão',
    number: '326',
    hymn: 'Vaso de Bênção'
  },
  {
    category: 'Serviço Cristão',
    number: '327',
    hymn: 'Mensagem ao Mundo'
  },
  {
    category: 'Serviço Cristão',
    number: '328',
    hymn: 'Ide!'
  },
  {
    category: 'Serviço Cristão',
    number: '329',
    hymn: 'Trabalho Cristão'
  },
  {
    category: 'Serviço Cristão',
    number: '330',
    hymn: 'Trabalhar e Orar'
  },
  {
    category: 'Serviço Cristão',
    number: '331',
    hymn: 'As Searas Maduras'
  },
  {
    category: 'Serviço Cristão',
    number: '332',
    hymn: 'Compensa Servir a Jesus'
  },
  {
    category: 'Serviço Cristão',
    number: '333',
    hymn: 'Há um Dever'
  },
  {
    category: 'Peregrinação',
    number: '334',
    hymn: 'Sou Peregrino e Forasteiro'
  },
  {
    category: 'Peregrinação',
    number: '335',
    hymn: 'Oh! Quão Doces as Novas'
  },
  {
    category: 'Peregrinação',
    number: '336',
    hymn: 'Almejo o Lar'
  },
  {
    category: 'Peregrinação',
    number: '337',
    hymn: 'Sou Forasteiro Aqui'
  },
  {
    category: 'Peregrinação',
    number: '338',
    hymn: 'Brilho Celeste'
  },
  {
    category: 'Peregrinação',
    number: '339',
    hymn: 'Inda é Longe Canaã?'
  },
  {
    category: 'Peregrinação',
    number: '340',
    hymn: 'Saudade'
  },
  {
    category: 'Peregrinação',
    number: '341',
    hymn: 'Vinde Fiéis'
  },
  {
    category: 'Luta',
    number: '342',
    hymn: 'Grande Comandante'
  },
  {
    category: 'Luta',
    number: '343',
    hymn: 'Vamos Batalhar'
  },
  {
    category: 'Luta',
    number: '344',
    hymn: 'Ó Cristãos, Avante!'
  },
  {
    category: 'Luta',
    number: '345',
    hymn: 'Lutai por Cristo'
  },
  {
    category: 'Luta',
    number: '346',
    hymn: 'Cristãos, Despertai!'
  },
  {
    category: 'Luta',
    number: '347',
    hymn: 'O Pendão Real'
  },
  {
    category: 'Luta',
    number: '348',
    hymn: 'Quantos Fiéis Descansam do Labor'
  },
  {
    category: 'Consolo e Segurança',
    number: '349',
    hymn: 'Consolação'
  },
  {
    category: 'Consolo e Segurança',
    number: '350',
    hymn: 'Eu Pertenço ao Meu Rei'
  },
  {
    category: 'Consolo e Segurança',
    number: '351',
    hymn: 'Nunca me Deixar'
  },
  {
    category: 'Consolo e Segurança',
    number: '352',
    hymn: 'Meu Refúgio Está no Monte'
  },
  {
    category: 'Consolo e Segurança',
    number: '353',
    hymn: 'Meu Jesus me Guia Sempre'
  },
  {
    category: 'Consolo e Segurança',
    number: '354',
    hymn: 'Entrega a Deus'
  },
  {
    category: 'Consolo e Segurança',
    number: '355',
    hymn: 'Oh, Não Temas, Sou Contigo'
  },
  {
    category: 'Consolo e Segurança',
    number: '356',
    hymn: 'Conduze-me, Meu Mestre'
  },
  {
    category: 'Consolo e Segurança',
    number: '357',
    hymn: 'Sob Suas Asas'
  },
  {
    category: 'Consolo e Segurança',
    number: '358',
    hymn: 'Guia, Cristo, Minha Nau'
  },
  {
    category: 'Consolo e Segurança',
    number: '359',
    hymn: 'Dia a Dia'
  },
  {
    category: 'Consolo e Segurança',
    number: '360',
    hymn: 'Fixa Teus Olhos no Mestre'
  },
  {
    category: 'Consolo e Segurança',
    number: '361',
    hymn: 'Ó Tu Que Aflito Estás'
  },
  {
    category: 'Consolo e Segurança',
    number: '362',
    hymn: 'Cristo Ajudará'
  },
  {
    category: 'Consolo e Segurança',
    number: '363',
    hymn: 'Terra de Beulá'
  },
  {
    category: 'Consolo e Segurança',
    number: '364',
    hymn: 'Sombras'
  },
  {
    category: 'Consolo e Segurança',
    number: '365',
    hymn: 'Vede o Lírio a Florescer'
  },
  {
    category: 'Consolo e Segurança',
    number: '366',
    hymn: 'O Anjo do Senhor'
  },
  {
    category: 'Consolo e Segurança',
    number: '367',
    hymn: 'Ao Passares Pelas Águas'
  },
  {
    category: 'Consolo e Segurança',
    number: '368',
    hymn: 'Mágoas'
  },
  {
    category: 'Consolo e Segurança',
    number: '369',
    hymn: 'Segura Minha Mão'
  },
  {
    category: 'Consolo e Segurança',
    number: '370',
    hymn: 'Cada Momento'
  },
  {
    category: 'Consolo e Segurança',
    number: '371',
    hymn: 'Cuidará de Mim Também'
  },
  {
    category: 'Consolo e Segurança',
    number: '372',
    hymn: 'Meu Jesus me Guia os Passos'
  },
  {
    category: 'Consolo e Segurança',
    number: '373',
    hymn: 'Deus Cuidará de Ti'
  },
  {
    category: 'Consolo e Segurança',
    number: '374',
    hymn: 'Abrigo na Rocha'
  },
  {
    category: 'Consolo e Segurança',
    number: '375',
    hymn: 'Ao Tomar Minha Frágil Mão'
  },
  {
    category: 'Consolo e Segurança',
    number: '376',
    hymn: 'Guia-me, Meu Salvador'
  },
  {
    category: 'Consolo e Segurança',
    number: '377',
    hymn: 'Refúgio em Temporal'
  },
  {
    category: 'Consolo e Segurança',
    number: '378',
    hymn: 'Alguém me Vê'
  },
  {
    category: 'Consolo e Segurança',
    number: '379',
    hymn: 'Ó Mestre, o Mar se Revolta'
  },
  {
    category: 'Consolo e Segurança',
    number: '380',
    hymn: "Ó Amante de Minh'Alma"
  },
  {
    category: 'Consolo e Segurança',
    number: '381',
    hymn: 'Jesus Proverá'
  },
  {
    category: 'Consolo e Segurança',
    number: '382',
    hymn: 'Não Ando Só'
  },
  {
    category: 'Consolo e Segurança',
    number: '383',
    hymn: 'Importará?'
  },
  {
    category: 'Consolo e Segurança',
    number: '384',
    hymn: 'Jesus me Guia'
  },
  {
    category: 'Consolo e Segurança',
    number: '385',
    hymn: 'Deus Está nas Sombras'
  },
  {
    category: 'Consolo e Segurança',
    number: '386',
    hymn: 'Nunca te Deixarei'
  },
  {
    category: 'Consolo e Segurança',
    number: '387',
    hymn: 'Deus vos Guarde'
  },
  {
    category: 'Consolo e Segurança',
    number: '388',
    hymn: 'Vem, Alma Cansada'
  },
  {
    category: 'Consolo e Segurança',
    number: '389',
    hymn: 'Nas Agruras Desta Vida'
  },
  {
    category: 'Consolo e Segurança',
    number: '390',
    hymn: 'Olhando Para Cima'
  },
  {
    category: 'Petição',
    number: '391',
    hymn: 'Cada Vez Mais Puro'
  },
  {
    category: 'Petição',
    number: '392',
    hymn: 'Bem Junto a Cristo'
  },
  {
    category: 'Petição',
    number: '393',
    hymn: "Sentado às Ribas d'Água Viva"
  },
  {
    category: 'Petição',
    number: '394',
    hymn: 'De Ti Careço, ó Deus'
  },
  {
    category: 'Petição',
    number: '395',
    hymn: 'Jesus, Pastor Amado'
  },
  {
    category: 'Petição',
    number: '396',
    hymn: 'Ouve-nos, Pastor Divino'
  },
  {
    category: 'Petição',
    number: '397',
    hymn: 'Comigo Habita'
  },
  {
    category: 'Petição',
    number: '398',
    hymn: 'Sonda-me, ó Deus'
  },
  {
    category: 'Petição',
    number: '399',
    hymn: 'Salva-me Também'
  },
  {
    category: 'Petição',
    number: '400',
    hymn: 'Quero Ter Jesus Comigo'
  },
  {
    category: 'Petição',
    number: '401',
    hymn: 'Abre, Senhor, os Olhos Meus'
  },
  {
    category: 'Petição',
    number: '402',
    hymn: "Fala à Minh'Alma"
  },
  {
    category: 'Petição',
    number: '403',
    hymn: 'Mais de Cristo'
  },
  {
    category: 'Petição',
    number: '404',
    hymn: 'Ó Deus, Contigo Almejo Andar'
  },
  {
    category: 'Petição',
    number: '405',
    hymn: 'Vem, Jesus, nos Despertar'
  },
  {
    category: 'Petição',
    number: '406',
    hymn: 'Em Mim Vem Habitar'
  },
  {
    category: 'Petição',
    number: '407',
    hymn: 'Ao Teu Lado Quero Andar'
  },
  {
    category: 'Petição',
    number: '408',
    hymn: 'Dá-me Tua Paz'
  },
  {
    category: 'Petição',
    number: '409',
    hymn: 'Rosa de Sarom'
  },
  {
    category: 'Petição',
    number: '410',
    hymn: 'Faz Brilhar a Tua Luz'
  },
  {
    category: 'Petição',
    number: '411',
    hymn: 'Súplica'
  },
  {
    category: 'Oração e Comunhão',
    number: '412',
    hymn: 'Comunhão Preciosa'
  },
  {
    category: 'Oração e Comunhão',
    number: '413',
    hymn: 'Lugar de Paz'
  },
  {
    category: 'Oração e Comunhão',
    number: '414',
    hymn: 'Santa Hora de Oração'
  },
  {
    category: 'Oração e Comunhão',
    number: '415',
    hymn: 'Só, com Teu Deus'
  },
  {
    category: 'Oração e Comunhão',
    number: '416',
    hymn: 'Ao Pé da Cruz de Cristo'
  },
  {
    category: 'Oração e Comunhão',
    number: '417',
    hymn: 'Meu Deus e Eu'
  },
  {
    category: 'Oração e Comunhão',
    number: '418',
    hymn: 'O Jardim de Oração'
  },
  {
    category: 'Oração e Comunhão',
    number: '419',
    hymn: 'Bendita Hora de Oração'
  },
  {
    category: 'Oração e Comunhão',
    number: '420',
    hymn: 'Oh! Que Amigo em Cristo Temos!'
  },
  {
    category: 'Oração e Comunhão',
    number: '421',
    hymn: 'Brando Qual Coro Celeste'
  },
  {
    category: 'Oração e Comunhão',
    number: '422',
    hymn: 'Assentado aos Pés de Cristo'
  },
  {
    category: 'Oração e Comunhão',
    number: '423',
    hymn: 'Música Celeste'
  },
  {
    category: 'Oração e Comunhão',
    number: '424',
    hymn: 'Como a Brisa Suave'
  },
  {
    category: 'Oração e Comunhão',
    number: '425',
    hymn: 'Que Tempo Já Faz?'
  },
  {
    category: 'Oração e Comunhão',
    number: '426',
    hymn: 'No Jardim'
  },
  {
    category: 'Oração e Comunhão',
    number: '427',
    hymn: 'Mais Perto Quero Estar'
  },
  {
    category: 'Vitória e Recompensa',
    number: '428',
    hymn: 'Glória Perene'
  },
  {
    category: 'Vitória e Recompensa',
    number: '429',
    hymn: 'Eu Face a Face Vê-Lo-ei'
  },
  {
    category: 'Vitória e Recompensa',
    number: '430',
    hymn: 'O Eterno Lar'
  },
  {
    category: 'Vitória e Recompensa',
    number: '431',
    hymn: 'Sim, Glória Haverá no Final'
  },
  {
    category: 'Vitória e Recompensa',
    number: '432',
    hymn: 'Hei de Ver o Rei'
  },
  {
    category: 'Vitória e Recompensa',
    number: '433',
    hymn: 'O Triunfo do Messias'
  },
  {
    category: 'Vitória e Recompensa',
    number: '434',
    hymn: 'Quando For Chamado'
  },
  {
    category: 'Vitória e Recompensa',
    number: '435',
    hymn: 'Estrelas Terei'
  },
  {
    category: 'Vitória e Recompensa',
    number: '436',
    hymn: 'Que Será Ver a Cristo'
  },
  {
    category: 'Vitória e Recompensa',
    number: '437',
    hymn: 'Vitória em Cristo'
  },
  {
    category: 'Vitória e Recompensa',
    number: '438',
    hymn: 'Hei de Vê-Lo'
  },
  {
    category: 'Vitória e Recompensa',
    number: '439',
    hymn: 'Primeiro Quero Ver Meu Salvador'
  },
  {
    category: 'Vitória e Recompensa',
    number: '440',
    hymn: 'Para Além das Montanhas'
  },
  {
    category: 'Vitória e Recompensa',
    number: '441',
    hymn: 'Junto ao Rio Jordão'
  },
  {
    category: 'Vitória e Recompensa',
    number: '442',
    hymn: 'Tão Grato me é Lembrar'
  },
  {
    category: 'Vitória e Recompensa',
    number: '443',
    hymn: 'Eis Que as Estrelas Vêm'
  },
  {
    category: 'Vitória e Recompensa',
    number: '444',
    hymn: 'Face a Face'
  },
  {
    category: 'Vitória e Recompensa',
    number: '445',
    hymn: 'As Riquezas Mundanas Nada Valem'
  },
  {
    category: 'Vitória e Recompensa',
    number: '446',
    hymn: 'Junto ao Trono de Deus'
  },
  {
    category: 'Casamento',
    number: '447',
    hymn: 'Almas Gêmeas'
  },
  {
    category: 'Casamento',
    number: '448',
    hymn: 'Duas Vidas'
  },
  {
    category: 'Casamento',
    number: '449',
    hymn: 'Perfeito Amor'
  },
  {
    category: 'Lar',
    number: '450',
    hymn: 'Abençoa Este Lar'
  },
  {
    category: 'Lar',
    number: '451',
    hymn: 'Recordação da Infância'
  },
  {
    category: 'Lar',
    number: '452',
    hymn: 'Meu Nome na Oração'
  },
  {
    category: 'Lar',
    number: '453',
    hymn: 'Amor no Lar'
  },
  {
    category: 'Lar',
    number: '454',
    hymn: 'Vem Entre Nós Morar'
  },
  {
    category: 'Criança',
    number: '455',
    hymn: 'Oração Para Uma Criança'
  },
  {
    category: 'Criança',
    number: '456',
    hymn: 'Sabes Quantas Estrelinhas?'
  },
  {
    category: 'Criança',
    number: '457',
    hymn: 'Sim, Cristo me Ama'
  },
  {
    category: 'Criança',
    number: '458',
    hymn: 'Vinde, Meninos'
  },
  {
    category: 'Criança',
    number: '459',
    hymn: 'Cristo Ama as Criancinhas'
  },
  {
    category: 'Criança',
    number: '460',
    hymn: 'Jesus me Quer Bem'
  },
  {
    category: 'Criança',
    number: '461',
    hymn: 'Deus Sempre me Ama'
  },
  {
    category: 'Criança',
    number: '462',
    hymn: 'Joias Preciosas'
  },
  {
    category: 'Criança',
    number: '463',
    hymn: 'Brilhando, Brilhando!'
  },
  {
    category: 'Criança',
    number: '464',
    hymn: 'Belas Mãozinhas'
  },
  {
    category: 'Criança',
    number: '465',
    hymn: 'Brilhemos por Jesus'
  },
  {
    category: 'Criança',
    number: '466',
    hymn: 'Louvai-O'
  },
  {
    category: 'Criança',
    number: '467',
    hymn: 'Ouço o Clamor do Bom Pastor'
  },
  {
    category: 'Criança',
    number: '468',
    hymn: 'Preceitos Para os Pequenos'
  },
  {
    category: 'Jovem',
    number: '469',
    hymn: 'Oh! Que Esperança!'
  },
  {
    category: 'Jovem',
    number: '470',
    hymn: 'O Senhor Está Aqui'
  },
  {
    category: 'Jovem',
    number: '471',
    hymn: 'Confiei no Meu Senhor'
  },
  {
    category: 'Jovem',
    number: '472',
    hymn: 'Deus é Tão Bom'
  },
  {
    category: 'Jovem',
    number: '473',
    hymn: 'Maravilhoso És, Meu Mestre'
  },
  {
    category: 'Jovem',
    number: '474',
    hymn: 'Seguindo a Jesus'
  },
  {
    category: 'Jovem',
    number: '475',
    hymn: 'Diante da Face de Cristo'
  },
  {
    category: 'Jovem',
    number: '476',
    hymn: 'Eu Achei'
  },
  {
    category: 'Jovem',
    number: '477',
    hymn: 'Canção da Vida'
  },
  {
    category: 'Jovem',
    number: '478',
    hymn: 'Jesus, Tu És a Minha Vida'
  },
  {
    category: 'Jovem',
    number: '479',
    hymn: 'Querido Jesus'
  },
  {
    category: 'Jovem',
    number: '480',
    hymn: 'Em Tuas Mãos'
  },
  {
    category: 'Jovem',
    number: '481',
    hymn: 'Nos Passos de Jesus'
  },
  {
    category: 'Jovem',
    number: '482',
    hymn: 'Jesus Precisa de Ti'
  },
  {
    category: 'Jovem',
    number: '483',
    hymn: 'Partilhai Vossa Fé'
  },
  {
    category: 'Jovem',
    number: '484',
    hymn: 'Faze Como Daniel'
  },
  {
    category: 'Jovem',
    number: '485',
    hymn: 'Levantai-vos, Jovens'
  },
  {
    category: 'Jovem',
    number: '486',
    hymn: 'Sal da Terra'
  },
  {
    category: 'Jovem',
    number: '487',
    hymn: 'Cristo, Conta Comigo Agora!'
  },
  {
    category: 'Jovem',
    number: '488',
    hymn: 'Novo Canto Há em Meu Ser'
  },
  {
    category: 'Jovem',
    number: '489',
    hymn: 'Grande Alegria'
  },
  {
    category: 'Jovem',
    number: '490',
    hymn: 'Caminhando'
  },
  {
    category: 'Jovem',
    number: '491',
    hymn: 'Além do Céu Azul'
  },
  {
    category: 'Jovem',
    number: '492',
    hymn: 'Lado a Lado'
  },
  {
    category: 'Jovem',
    number: '493',
    hymn: 'Minha Mão em Tua Mão'
  },
  {
    category: 'Jovem',
    number: '494',
    hymn: 'Vem Dedicar-te, ó Mocidade'
  },
  {
    category: 'Jovem',
    number: '495',
    hymn: 'Haja Paz na Terra'
  },
  {
    category: 'Jovem',
    number: '496',
    hymn: 'Cristo, Dá-nos Tua Paz'
  },
  {
    category: 'Jovem',
    number: '497',
    hymn: 'Queremos Dar Louvor'
  },
  {
    category: 'Jovem',
    number: '498',
    hymn: 'Nada Impossível É'
  },
  {
    category: 'Jovem',
    number: '499',
    hymn: 'Não Me Esqueci de Ti'
  },
  {
    category: 'Jovem',
    number: '500',
    hymn: 'Deus Sabe, Deus Ouve, Deus Vê'
  },
  {
    category: 'Jovem',
    number: '501',
    hymn: 'Mansão Sobre o Monte'
  },
  {
    category: 'Jovem',
    number: '502',
    hymn: 'Vaso Novo'
  },
  {
    category: 'Jovem',
    number: '503',
    hymn: 'Deixa-me Contigo Andar'
  },
  {
    category: 'Igreja',
    number: '504',
    hymn: 'Da Igreja o Fundamento'
  },
  {
    category: 'Igreja',
    number: '505',
    hymn: 'Somos um Pequeno Povo'
  },
  {
    category: 'Igreja',
    number: '506',
    hymn: 'Fortalece Tua Igreja'
  },
  {
    category: 'Igreja',
    number: '507',
    hymn: 'Ó Vem à Igreja Comigo'
  },
  {
    category: 'Escola Sabatina',
    number: '508',
    hymn: 'Rumo à Escola Sabatina'
  },
  {
    category: 'Escola Sabatina',
    number: '509',
    hymn: 'A Escola Sabatina'
  },
  {
    category: 'Batismo',
    number: '510',
    hymn: 'Meu Jesus Está Chamando'
  },
  {
    category: 'Batismo',
    number: '511',
    hymn: 'Oh! Que Belos Hinos'
  },
  {
    category: 'Batismo',
    number: '512',
    hymn: 'Às Águas do Jordão'
  },
  {
    category: 'Batismo',
    number: '513',
    hymn: 'As Águas Batismais'
  },
  {
    category: 'Batismo',
    number: '514',
    hymn: 'O Alvo Supremo'
  },
  {
    category: 'Batismo',
    number: '515',
    hymn: 'Importa Renascer'
  },
  {
    category: 'Batismo',
    number: '516',
    hymn: 'Agora Posso Ver'
  },
  {
    category: 'Batismo',
    number: '517',
    hymn: 'Volto ao Lar'
  },
  {
    category: 'Batismo',
    number: '518',
    hymn: 'A Jesus Seguir Eu Quero'
  },
  {
    category: 'Santa Ceia',
    number: '519',
    hymn: 'O Pão da Vida'
  },
  {
    category: 'Santa Ceia',
    number: '520',
    hymn: 'A Ceia do Senhor'
  },
  {
    category: 'Santa Ceia',
    number: '521',
    hymn: 'Senhor, Tu nos Convidas'
  },
  {
    category: 'Santa Ceia',
    number: '522',
    hymn: 'Pelo Pão Nós Oramos'
  },
  {
    category: 'Ordenação',
    number: '523',
    hymn: 'Envio a Ti'
  },
  {
    category: 'Ordenação',
    number: '524',
    hymn: 'Quem se Dispõe a Ir?'
  },
  {
    category: 'Lei de Deus',
    number: '525',
    hymn: 'Obedecer é Melhor'
  },
  {
    category: 'Lei de Deus',
    number: '526',
    hymn: 'A Lei do Meu Senhor'
  },
  {
    category: 'Sábado',
    number: '527',
    hymn: 'Sábado do Meu Senhor'
  },
  {
    category: 'Sábado',
    number: '528',
    hymn: 'Sábado'
  },
  {
    category: 'Sábado',
    number: '529',
    hymn: 'A Semana Já Passou'
  },
  {
    category: 'Sábado',
    number: '530',
    hymn: 'O Sábado Chegou'
  },
  {
    category: 'Sábado',
    number: '531',
    hymn: 'Do Santo Sábado És Senhor'
  },
  {
    category: 'Sábado',
    number: '532',
    hymn: 'Bem-vindo o Sábado'
  },
  {
    category: 'Justificação',
    number: '533',
    hymn: 'Cristo Salva'
  },
  {
    category: 'Justificação',
    number: '534',
    hymn: 'Salvo em Jesus'
  },
  {
    category: 'Justificação',
    number: '535',
    hymn: 'Para o Céu por Jesus Irei'
  },
  {
    category: 'Justificação',
    number: '536',
    hymn: 'Por um Pecador Qual Eu'
  },
  {
    category: 'Justificação',
    number: '537',
    hymn: 'Cristo Salva o Pecador'
  },
  {
    category: 'Justificação',
    number: '538',
    hymn: 'Ó Vem a Jesus'
  },
  {
    category: 'Justificação',
    number: '539',
    hymn: 'Justificado'
  },
  {
    category: 'Justificação',
    number: '540',
    hymn: 'A Revelação da Cruz'
  },
  {
    category: 'Justificação',
    number: '541',
    hymn: 'De Jesus a Doce Voz'
  },
  {
    category: 'Justificação',
    number: '542',
    hymn: 'Jesus é o Salvador'
  },
  {
    category: 'Juizo Final',
    number: '543',
    hymn: 'Na Balança do Senhor'
  },
  {
    category: 'Juizo Final',
    number: '544',
    hymn: 'O Juízo'
  },
  {
    category: 'Juizo Final',
    number: '545',
    hymn: 'Vem o Grande Dia'
  },
  {
    category: 'Juizo Final',
    number: '546',
    hymn: 'Quando o Livro Aberto For'
  },
  {
    category: 'Nova Terra',
    number: '547',
    hymn: 'Oh! Bela Terra de Esplendor'
  },
  {
    category: 'Nova Terra',
    number: '548',
    hymn: 'Há um País de Eterna Luz'
  },
  {
    category: 'Nova Terra',
    number: '549',
    hymn: 'A Glória Suprema'
  },
  {
    category: 'Nova Terra',
    number: '550',
    hymn: 'Marchando para Sião'
  },
  {
    category: 'Nova Terra',
    number: '551',
    hymn: 'Muito Além do Sol'
  },
  {
    category: 'Nova Terra',
    number: '552',
    hymn: 'Cristo Foi Preparar-nos Lugar'
  },
  {
    category: 'Nova Terra',
    number: '553',
    hymn: 'Junto ao Rio Cristalino'
  },
  {
    category: 'Nova Terra',
    number: '554',
    hymn: 'Vamos Ver Jesus Ali'
  },
  {
    category: 'Nova Terra',
    number: '555',
    hymn: 'Até Então'
  },
  {
    category: 'Nova Terra',
    number: '556',
    hymn: 'A Bela Cidade'
  },
  {
    category: 'Nova Terra',
    number: '557',
    hymn: 'Grandes Coisas, Mui Gloriosas'
  },
  {
    category: 'Nova Terra',
    number: '558',
    hymn: 'Meu Doce Lar'
  },
  {
    category: 'Nova Terra',
    number: '559',
    hymn: 'Feliz Manhã'
  },
  {
    category: 'Nova Terra',
    number: '560',
    hymn: 'A Cidade de Ouro e Cristal'
  },
  {
    category: 'Nova Terra',
    number: '561',
    hymn: 'No Celeste Lar Glorioso'
  },
  {
    category: 'Nova Terra',
    number: '562',
    hymn: 'Quão Doce é a Promessa'
  },
  {
    category: 'Nova Terra',
    number: '563',
    hymn: 'Querido Lar'
  },
  {
    category: 'Nova Terra',
    number: '564',
    hymn: 'Jamais se Diz Adeus Ali'
  },
  {
    category: 'Nova Terra',
    number: '565',
    hymn: 'Oh! Nunca Separar!'
  },
  {
    category: 'Nova Terra',
    number: '566',
    hymn: 'Doce Lar'
  },
  {
    category: 'Nova Terra',
    number: '567',
    hymn: 'A Cidade de Luz'
  },
  {
    category: 'Nova Terra',
    number: '568',
    hymn: 'Lar, Doce Lar'
  },
  {
    category: 'Nova Terra',
    number: '569',
    hymn: 'Oh, Vale do Éden, Formoso!'
  },
  {
    category: 'Nova Terra',
    number: '570',
    hymn: 'Além do Rio'
  },
  {
    category: 'Nova Terra',
    number: '571',
    hymn: 'Lindo País'
  },
  {
    category: 'Nova Terra',
    number: '572',
    hymn: 'Lar Feliz'
  },
  {
    category: 'Entrada à Plataforma',
    number: '573',
    hymn: 'O Senhor Está em Seu Templo'
  },
  {
    category: 'Entrada à Plataforma',
    number: '574',
    hymn: 'Deus Está Presente'
  },
  {
    category: 'Entrada à Plataforma',
    number: '575',
    hymn: 'Silêncio'
  },
  {
    category: 'Entrada à Plataforma',
    number: '576',
    hymn: 'Pai, Sê Presente'
  },
  {
    category: 'Entrada à Plataforma',
    number: '577',
    hymn: 'Santo És, Senhor'
  },
  {
    category: 'Entrada à Plataforma',
    number: '578',
    hymn: 'Sinto a Presença do Senhor'
  },
  {
    category: 'Entrada à Plataforma',
    number: '579',
    hymn: 'Eu Te Amo, ó Deus'
  },
  {
    category: 'Entrada à Plataforma',
    number: '580',
    hymn: 'Invocação'
  },
  {
    category: 'Doxologia',
    number: '581',
    hymn: 'Adoração'
  },
  {
    category: 'Doxologia',
    number: '582',
    hymn: 'Vem, Senhor'
  },
  {
    category: 'Doxologia',
    number: '583',
    hymn: 'Glória a Deus'
  },
  {
    category: 'Doxologia',
    number: '584',
    hymn: 'Oh, Como é Bom Louvar'
  },
  {
    category: 'Doxologia',
    number: '585',
    hymn: 'Oh! Adorai'
  },
  {
    category: 'Doxologia',
    number: '586',
    hymn: 'Doxologia'
  },
  {
    category: 'Doxologia',
    number: '587',
    hymn: 'Santo, Santo'
  },
  {
    category: 'Doxologia',
    number: '588',
    hymn: 'Bendito Jesus!'
  },
  {
    category: 'Ofertório',
    number: '589',
    hymn: 'A Melhor Dádiva'
  },
  {
    category: 'Ofertório',
    number: '590',
    hymn: 'Adoração a Ti, Senhor'
  },
  {
    category: 'Ofertório',
    number: '591',
    hymn: 'Ofertório'
  },
  {
    category: 'Responsos',
    number: '592',
    hymn: 'Pai, Imploramos'
  },
  {
    category: 'Responsos',
    number: '593',
    hymn: 'Ao Orarmos, Senhor'
  },
  {
    category: 'Responsos',
    number: '594',
    hymn: 'Ouve-nos, Senhor'
  },
  {
    category: 'Responsos',
    number: '595',
    hymn: 'Ao Meu Coração'
  },
  {
    category: 'Responsos',
    number: '596',
    hymn: 'Vem Morar em Mim'
  },
  {
    category: 'Responsos',
    number: '597',
    hymn: 'Humilde Oração'
  },
  {
    category: 'Responsos',
    number: '598',
    hymn: 'Vem, Espírito Santo'
  },
  {
    category: 'Responsos',
    number: '599',
    hymn: 'Paz'
  },
  {
    category: 'Fim do Culto',
    number: '600',
    hymn: 'Deus Esteja em Mim'
  },
  {
    category: 'Fim do Culto',
    number: '601',
    hymn: 'A Mão de Deus'
  },
  {
    category: 'Fim do Culto',
    number: '602',
    hymn: 'Graça, Amor e Comunhão'
  },
  {
    category: 'Fim do Culto',
    number: '603',
    hymn: 'Benditos Laços'
  },
  {
    category: 'Fim do Culto',
    number: '604',
    hymn: 'Preitos de Louvor'
  },
  {
    category: 'Fim do Culto',
    number: '605',
    hymn: 'Vem Despedir-nos'
  },
  {
    category: 'Fim do Culto',
    number: '606',
    hymn: 'Amigo, Não Saia Sem Cristo'
  },
  {
    category: 'Fim do Culto',
    number: '607',
    hymn: 'Fim de Culto'
  },
  {
    category: 'Fim do Culto',
    number: '608',
    hymn: 'Que Deus Te Abençoe'
  },
  {
    category: 'Fim do Culto',
    number: '609',
    hymn: 'Pai Nosso'
  },
  {
    category: 'Améns',
    number: '610',
    hymn: 'Amém (A)'
  },
  {
    category: 'Améns',
    number: '611',
    hymn: 'Amém (B)'
  },
  {
    category: 'Améns',
    number: '612',
    hymn: 'Amém (C)'
  },
  {
    category: 'Améns',
    number: '613',
    hymn: 'Amém (D)'
  }
];

console.log('[');
for (let option of options) {
  console.log(
    `{ category: "${option.category}", number: ${parseInt(
      option.number
    )}, hymn: "${option.hymn}" },`
  );
}
console.log(']');
