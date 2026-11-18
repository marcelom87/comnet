export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.members': 'Membros',
    'nav.projects': 'Projetos',
    'nav.students': 'Alunos',
    'nav.about': 'Sobre & Contato',

    // Hero
    'hero.badge': 'Universidade de Brasília • CIC / UnB',
    'hero.title': 'COMNET',
    'hero.subtitle': 'Laboratório de Redes de Comunicações e Computação Avançada',
    'hero.description': 'Desenvolvendo pesquisa de fronteira em Redes 5G/6G, Softwarização de Redes (SDN/NFV), Internet das Coisas (IoT), Sistemas Distribuídos e Inteligência Artificial Aplicada no Departamento de Ciência da Computação da UnB.',
    'hero.cta.members': 'Conhecer Pesquisadores',
    'hero.cta.projects': 'Ver Projetos & Parcerias',
    'hero.stats.professors': 'Professores',
    'hero.stats.students': 'Alunos Ativos',
    'hero.stats.alumni': 'Egressos Formados',
    'hero.img1.caption': 'Ambiente de Pesquisa & Bancadas de Teste',
    'hero.img2.caption': 'Inovação em Redes do Futuro (5G/6G & IBN)',

    // Mission & Vision
    'mission.title': 'Nossa Missão',
    'mission.desc': 'Produzir pesquisa científica e inovação tecnológica de padrão internacional nas áreas de redes de computadores e sistemas distribuídos, formando recursos humanos qualificados em níveis de graduação e pós-graduação capazes de liderar transformações na academia e na indústria.',
    'vision.title': 'Nossa Visão',
    'vision.desc': 'Consolidar o COMNET como um centro de excelência e referência nacional e internacional no desenvolvimento das redes do futuro (6G, redes autônomas e IBN), fomentando parcerias estratégicas com órgãos governamentais, agências de fomento e o setor produtivo.',

    // Research Lines
    'research.tag': 'Áreas de Investigação',
    'research.title': 'Linhas de Pesquisa Estratégicas',
    'research.subtitle': 'Nossas frentes de pesquisa cobrem desde a camada física e óptica até inteligência artificial e segurança cibernética em larga escala.',
    'research.line1.title': 'Redes Sem Fio, 5G & 6G',
    'research.line1.desc': 'Arquiteturas C-RAN/O-RAN, alocação de recursos de rádio, computação em nuvem na borda e comunicação de ultra-baixa latência.',
    'research.line2.title': 'Softwarização de Redes (SDN/NFV)',
    'research.line2.desc': 'Programabilidade de planos de dados, virtualização de funções de rede, orquestração de fatiamento de rede (Network Slicing).',
    'research.line3.title': 'Internet das Coisas & Cidades Inteligentes',
    'research.line3.desc': 'Protocolos de comunicação para IoT, redes de sensores sem fio, cidades inteligentes e redes veiculares (VANETs).',
    'research.line4.title': 'Redes Baseadas em Intenção & IA',
    'research.line4.desc': 'Inteligência Artificial e Aprendizado por Reforço aplicados ao gerenciamento autônomo e preditivo de infraestruturas de rede.',
    'research.line5.title': 'Sistemas Distribuídos & Segurança',
    'research.line5.desc': 'Tolerância a falhas, algoritmos de consenso, tecnologia blockchain, privacidade e mitigação de ataques em redes.',
    'research.line6.title': 'Redes Ópticas & Modelagem',
    'research.line6.desc': 'Redes ópticas elásticas (EON), engenharia de tráfego, simulação em larga escala e algoritmos de otimização de rotas.',

    // Projects Section
    'projects.tag': 'Inovação & Financiamento',
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Projetos financiados por FAPDF, CNPq, RNP e parceiros industriais.',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.details': 'Ver Detalhes do Projeto',
    'projects.coordination': 'Coordenação',
    'projects.funding': 'Fomento',
    'projects.status.ongoing': '● Em Andamento',
    'projects.status.completed': '✓ Concluído',

    // Members Section
    'members.tag': 'Corpo Docente',
    'members.title': 'Professores Pesquisadores',
    'members.subtitle': 'Docentes e orientadores credenciados no Departamento de Ciência da Computação da UnB.',
    'members.viewAll': 'Ver todos os membros',
    'members.areas': 'Áreas de Atuação',
    'members.profile': 'Perfil & Publicações',
    'members.lattes': 'Currículo Lattes',
    'members.contact': 'Entrar em Contato',

    // Students Section
    'students.tag': 'Formação de Recursos Humanos',
    'students.title': 'Alunos & Egressos',
    'students.subtitle': 'O COMNET orgulha-se de participar da formação de dezenas de mestres, doutores e pesquisadores de destaque no Brasil e no exterior.',
    'students.active.nav': '● Alunos Ativos',
    'students.active.title': 'Alunos Ativos',
    'students.active.desc': 'Ordenados em ordem alfabética pelo primeiro nome.',
    'students.active.colName': 'Nome do Aluno',
    'students.active.colAdvisor': 'Nome do Orientador',
    'students.active.colLevel': 'Nível',
    'students.phd.title': 'Egressos — Doutorado',
    'students.msc.title': 'Egressos — Mestrado',
    'students.bsc.title': 'Egressos — Graduação & Iniciação Científica',
    'students.alumni.desc': 'Organizados por ordem cronológica decrescente (ano de conclusão) e, em seguida, ordem alfabética.',

    // About & Location
    'about.tag': 'Institucional & Contato',
    'about.title': 'Sobre o Laboratório COMNET',
    'about.subtitle': 'Centro de excelência em pesquisa, ensino e desenvolvimento tecnológico em redes de comunicação no coração do Centro-Oeste brasileiro.',
    'about.infrastructure.title': 'Infraestrutura e Testbeds',
    'about.location.title': 'Localização do Laboratório',
    'about.location.building': 'Prédio CIC / EST — Térreo',
    'about.location.address': 'Campus Universitário Darcy Ribeiro, Asa Norte, Brasília - DF, CEP 70910-900',
    'about.location.contact': 'E-mail: cic@unb.br | Telefone: +55 (61) 3107-3661',

    // Footer
    'footer.about': 'Laboratório de Redes de Comunicações',
    'footer.desc': 'Grupo de pesquisa de excelência dedicado à inovação em redes de comunicação, sistemas distribuídos, 5G/6G, softwarização e inteligência artificial aplicada no Departamento de Ciência da Computação da Universidade de Brasília.',
    'footer.rights': 'COMNET — Laboratório de Redes de Comunicações • Universidade de Brasília (UnB).'
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.members': 'Members',
    'nav.projects': 'Projects',
    'nav.students': 'Students',
    'nav.about': 'About & Contact',

    // Hero
    'hero.badge': 'University of Brasília • CIC / UnB',
    'hero.title': 'COMNET',
    'hero.subtitle': 'Computer Networks & Advanced Computing Laboratory',
    'hero.description': 'Conducting cutting-edge research in 5G/6G Networks, Network Softwarization (SDN/NFV), Internet of Things (IoT), Distributed Systems, and Applied Artificial Intelligence at the Department of Computer Science, University of Brasília.',
    'hero.cta.members': 'Meet Researchers',
    'hero.cta.projects': 'View Projects & Partners',
    'hero.stats.professors': 'Professors',
    'hero.stats.students': 'Active Students',
    'hero.stats.alumni': 'Alumni Graduated',
    'hero.img1.caption': 'Research Environment & Experimental Testbeds',
    'hero.img2.caption': 'Future Networks Innovation (5G/6G & IBN)',

    // Mission & Vision
    'mission.title': 'Our Mission',
    'mission.desc': 'To conduct world-class scientific research and technological innovation in computer networks and distributed systems, educating highly qualified undergraduate and graduate researchers capable of leading advancements in academia and industry.',
    'vision.title': 'Our Vision',
    'vision.desc': 'To consolidate COMNET as a premier national and international center of excellence for the next generation of networks (6G, autonomous and intent-based networks), fostering strategic partnerships with government bodies, research funding agencies, and industry leaders.',

    // Research Lines
    'research.tag': 'Research Areas',
    'research.title': 'Strategic Research Directions',
    'research.subtitle': 'Our research spans from optical and physical transport layers to artificial intelligence and large-scale cybersecurity.',
    'research.line1.title': 'Wireless, 5G & 6G Networks',
    'research.line1.desc': 'C-RAN/O-RAN architectures, radio resource allocation, multi-access edge computing, and ultra-reliable low-latency communications.',
    'research.line2.title': 'Network Softwarization (SDN/NFV)',
    'research.line2.desc': 'Data plane programmability, network function virtualization, and end-to-end network slicing orchestration.',
    'research.line3.title': 'Internet of Things & Smart Cities',
    'research.line3.desc': 'Communication protocols for IoT, wireless sensor networks, smart urban infrastructure, and vehicular networks (VANETs).',
    'research.line4.title': 'Intent-Based Networks & AI',
    'research.line4.desc': 'Artificial Intelligence and Reinforcement Learning for zero-touch autonomous management and predictive networking.',
    'research.line5.title': 'Distributed Systems & Security',
    'research.line5.desc': 'Fault tolerance, consensus algorithms, blockchain technology, privacy preservation, and network anomaly mitigation.',
    'research.line6.title': 'Optical Networks & Modeling',
    'research.line6.desc': 'Elastic Optical Networks (EON), traffic engineering, large-scale network simulation, and heuristic routing optimization.',

    // Projects Section
    'projects.tag': 'Innovation & Grants',
    'projects.title': 'Featured Research Projects',
    'projects.subtitle': 'Projects sponsored by FAPDF, CNPq, RNP, and leading industry partners.',
    'projects.viewAll': 'View all projects',
    'projects.details': 'View Project Details',
    'projects.coordination': 'Principal Investigator',
    'projects.funding': 'Sponsors',
    'projects.status.ongoing': '● Ongoing',
    'projects.status.completed': '✓ Completed',

    // Members Section
    'members.tag': 'Faculty & Team',
    'members.title': 'Faculty Researchers',
    'members.subtitle': 'Tenured professors and research advisors at the Department of Computer Science, University of Brasília.',
    'members.viewAll': 'View all members',
    'members.areas': 'Areas of Expertise',
    'members.profile': 'Profile & Publications',
    'members.lattes': 'Curriculum Lattes (CNPq)',
    'members.contact': 'Get in Touch',

    // Students Section
    'students.tag': 'Academic Mentorship',
    'students.title': 'Students & Alumni',
    'students.subtitle': 'COMNET is proud to have mentored dozens of doctoral, master’s, and undergraduate researchers thriving in academia and tech leaders worldwide.',
    'students.active.nav': '● Active Students',
    'students.active.title': 'Active Graduate & Undergrad Students',
    'students.active.desc': 'Alphabetically sorted by first name.',
    'students.active.colName': 'Student Name',
    'students.active.colAdvisor': 'Faculty Advisor',
    'students.active.colLevel': 'Degree Level',
    'students.phd.title': 'Alumni — Ph.D. Dissertations',
    'students.msc.title': 'Alumni — Master’s Theses',
    'students.bsc.title': 'Alumni — Undergraduate & Scientific Initiation',
    'students.alumni.desc': 'Sorted chronologically in descending order by completion year, followed by alphabetical order.',

    // About & Location
    'about.tag': 'Institutional & Contact',
    'about.title': 'About the COMNET Laboratory',
    'about.subtitle': 'A premier center for telecommunications research, education, and technological development in the federal capital of Brazil.',
    'about.infrastructure.title': 'Infrastructure & Testbeds',
    'about.location.title': 'Laboratory Location',
    'about.location.building': 'CIC / EST Building — Ground Floor',
    'about.location.address': 'Campus Universitário Darcy Ribeiro, Asa Norte, Brasília - DF, 70910-900, Brazil',
    'about.location.contact': 'Email: cic@unb.br | Phone: +55 (61) 3107-3661',

    // Footer
    'footer.about': 'Computer Networks Laboratory',
    'footer.desc': 'A leading research group dedicated to innovation in computer networks, distributed systems, 5G/6G, softwarization, and applied AI at the Department of Computer Science, University of Brasília.',
    'footer.rights': 'COMNET — Computer Networks Laboratory • University of Brasília (UnB).'
  }
} as const;
