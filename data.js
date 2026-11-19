// 이 파일만 고치면 사이트 내용이 전부 바뀝니다.
window.PORTFOLIO = {
  name: "성수연",
  handle: "saeodixx",
  role: "Flutter App Developer, AI-Native Builder",
  tagline: "Flutter 앱을 만들고, 앱이 쓰는 서버와 DB까지 직접 다룹니다.",
  photo: "assets/profile.jpg",

  links: {
    github: "https://github.com/saeodixx",
    email: "brrenda20051@gmail.com",
    blog: "",      // 비워두면 버튼이 숨겨집니다
    linkedin: "",
    resume: "",    // 예: "assets/resume.pdf"
  },

  about: [
    "2005년생, 대림대학교 컴퓨터정보학부 졸업예정인 성수연입니다.",
    "Flutter 앱 개발을 중심으로 공부하고 만들어 왔습니다. 습관 육성 게임 앱, 뷰티 커뮤니티 앱 같은 모바일 앱부터 Windows·macOS 데스크톱 앱까지 Flutter로 개발했고, 상태 관리·REST API 연동·이미지 업로드·소셜 로그인처럼 실제 서비스에 필요한 기능을 직접 구현했습니다.",
    "앱만 만드는 데서 멈추지 않고, 앱이 붙을 서버(Spring Boot·Node.js)와 DB(PostgreSQL), Docker·AWS 배포까지 직접 해 봤습니다. 그래서 백엔드 개발자와 API를 같이 설계하고, 문제가 생기면 앱과 서버 어느 쪽 문제인지 스스로 찾을 수 있습니다.",
    "AI를 '대신 짜주는 도구'가 아니라 '같이 생각하는 팀원'으로 씁니다. 기획서와 결정 기록을 먼저 쓰고 AI와 함께 구현하며, 나온 코드는 테스트와 문서로 직접 검증합니다. 그 과정에서 AI 에이전트 생태계 자체에 관심이 생겨, AI 코딩 에이전트의 스킬을 관리하는 앱 MgrS까지 만들었습니다.",
  ],

  // AI 활용 섹션
  ai: {
    intro: "AI를 잘 쓰는 것도 실력이라고 생각합니다. AI에게 일을 맡기는 데서 그치지 않고, AI가 일하는 환경(하네스)을 직접 설계하고, 새로 나오는 AI 스킬·도구를 빠르게 찾아 내 작업에 붙입니다.",
    points: [
      {
        title: "하네스 엔지니어링",
        body: "CLAUDE.md 규칙, 직접 만든 스킬(/inbox, /init-project, /meeting), hooks로 AI 에이전트의 작업 환경을 설계합니다. 대화가 끝나면 hook이 일지를 자동으로 쓰고, 매일 내가 AI를 고쳐 준 말을 모아 규칙 후보로 제안하게 해서, 승인한 규칙만 다음부터 지키게 합니다. 토큰이 떨어지면 Codex → Gemini → Antigravity 순서로 자동으로 넘깁니다.",
      },
      {
        title: "AI 스킬 트렌드 탐색",
        body: "Agent Skills·MCP·플러그인 생태계가 나오면 바로 써 봅니다. find-skills로 레지스트리를 뒤져 필요한 스킬을 찾고, 지금 Claude Code에 스킬 140여 개와 Superpowers·Vercel 플러그인, Figma·JetBrains·AWS MCP를 연결해 씁니다. 써 보고 안 맞는 건 정리하고, 반복되는 일은 직접 스킬로 만듭니다. 이 관심이 MgrS 개발로 이어졌습니다.",
      },
      {
        title: "AI 페어 프로그래밍",
        body: "기획서와 결정 기록을 먼저 쓰고 AI와 함께 구현합니다. 회의록에 @claude를 달면 AI가 답하고 결정·할 일을 정리해 줍니다. 나온 코드는 테스트와 문서로 직접 확인합니다.",
      },
      {
        title: "서비스에 LLM 연동",
        body: "TreePlan에서 Gemini API를 서버 뒤에 숨겨 키 노출을 막고, 시간 초과·429·503 시 예비 모델로 자동 전환되도록 설계했습니다. 포폴링에는 실행 실패 원인 분석·QA 요약 AI를 넣었습니다.",
      },
      {
        title: "AI 에이전트 도구 개발",
        body: "AI 해커톤에서 Claude Code·Codex 스킬을 한 화면에서 보고, 배포하고, 비교하는 앱 MgrS를 기획·개발해 Vercel로 완성했습니다.",
      },
      {
        title: "책임 있게 쓰기",
        body: "외부로 보내는 데이터 범위를 사용자에게 알리고, 비밀값은 가린 뒤 전송하며, 로컬 LLM 전환까지 검토합니다. 빠르게 만들되 안전하게.",
      },
    ],
    tools: ["Claude Code", "Codex", "Gemini", "Antigravity", "ChatGPT", "Agent Skills", "MCP", "Plugins", "Hooks", "Local LLM"],
  },

  // UI 디자인 섹션, 케이스마다 하나씩
  designs: [
    {
      title: "모아루틴: 기획과 아트부터 직접",
      tool: "Claude Artifact",
      intro: "기획과 몬스터 아트를 직접 맡고, Claude Artifact 시안을 Flutter 화면으로 옮겼습니다.",
      points: [
        "기획: 게임 규칙, 화면 흐름, 기능 기획서 전부 작성",
        "캐릭터 아트: 몬스터 28종과 진화 그림 32장, 로고를 AI로 직접 생성",
        "디자인 토큰: AppColors·AppTheme, Galmuri11(픽셀)·Pretendard",
        "교감 창: DragTarget으로 물약 끌어 먹이기, 공 던지기",
        "소셜 로그인: 카카오·구글 토큰을 서버가 검증 후 JWT 발급",
        "공부 타이머: 뽀모도로, 공부 소리 3개 numpy로 합성",
      ],
      link: "https://github.com/dynamicduo-daelim/habit_monster",
      linkLabel: "GitHub에서 보기",
      shots: [
        { src: "assets/routinemon-ui.jpg", caption: "홈, 챗봇, 상대 고르기, 교감, 출석부" },
      ],
    },
    {
      title: "HUR: Figma로 직접 디자인",
      tool: "Figma",
      intro: "전 화면과 화면 흐름, ERD를 Figma로 설계하고 Flutter로 구현했습니다.",
      link: "https://www.figma.com/design/8XGRFvWoXAfLmMU8g18MeA/Hur?node-id=0-1",
      linkLabel: "Figma에서 보기",
      shots: [
        { src: "assets/hur-ranking.jpg", caption: "추구미 랭킹, 제품 상세, 구매" },
        { src: "assets/hur-home.jpg", caption: "온보딩, 홈 피드, 게시물 상세" },
        { src: "assets/hur-login.jpg", caption: "로그인, 회원가입" },
      ],
    },
  ],

  certs: [
    { name: "정보처리산업기사", status: "필기 합격", note: "" },
    { name: "인공지능 전문가 1급", status: "취득 예정", note: "" },
  ],

  skills: [
    { group: "App (Main)", items: ["Flutter", "Dart", "Android", "iOS", "Flutter Desktop", "Kotlin"] },
    { group: "App 기능", items: ["REST API 연동", "JWT 인증", "소셜 로그인", "이미지 업로드", "로컬 저장소", "상태 관리"] },
    { group: "Backend", items: ["Spring Boot", "Java", "Node.js", "Express", "WebSocket"] },
    { group: "Web", items: ["React", "TypeScript", "JSP"] },
    { group: "Database", items: ["PostgreSQL", "MySQL", "Oracle", "Redis"] },
    { group: "DevOps", items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "Vercel", "AWS EC2", "S3", "ECR"] },
    { group: "AI", items: ["Claude", "ChatGPT", "Gemini", "Local LLM"] },
    { group: "Design, Collab", items: ["Figma", "Claude Artifact", "GitHub", "Jira", "Notion"] },
  ],

  projects: [
    {
      title: "HUR",
      period: "2026.04 ~ 2026.09",
      badge: "졸업작품 우수작",
      description: "퍼스널 컬러 기반 화장품 추천, 뷰티 커뮤니티 앱. 팀장, Figma 디자인과 Flutter 구현.",
      tags: ["Figma", "Flutter", "Node.js", "PostgreSQL"],
      github: "https://github.com/App-Legend/HUR",
      demo: "",
    },
    {
      title: "모아루틴",
      period: "2026.10 ~ 진행 중",
      badge: "졸업 프로젝트 2",
      description: "습관을 지키면 몬스터가 자라는 게임형 습관 앱. 기획 전체, 몬스터 아트, Flutter 앱 담당.",
      tags: ["Flutter", "Gemini API", "Claude Artifact"],
      github: "https://github.com/dynamicduo-daelim/habit_monster",
      demo: "",
    },
    {
      title: "MgrS",
      period: "2026.10 ~ 2026.11",
      badge: "AI 해커톤 완료",
      description: "AI 코딩 에이전트의 스킬을 한 화면에서 보고, 배포하고, 비교하는 앱. Vercel로 개발·배포.",
      tags: ["Flutter", "Vercel", "LLM", "AI Agents"],
      github: "https://github.com/App-Legend/Skills-GUI",
      demo: "",
    },
    {
      title: "포폴링 (POPOL-ing)",
      period: "2026.11 ~ 진행 중",
      badge: "4인 팀",
      description: "내 프로젝트를 한곳에서 실행하고, 실패하면 AI가 원인을 분석하는 데스크톱 앱. core 패키지 설계.",
      tags: ["Flutter Desktop", "Docker Compose", "Gemini API"],
      github: "https://github.com/App-Legend/POPOL-ing",
      demo: "",
    },
    {
      title: "TreePlan",
      period: "2026.10",
      badge: "Full-Stack, AI",
      description: "AI가 뻗는 단어 트리로 아이디어와 실행안을 만드는 웹 서비스. 팀원과 실시간 공유.",
      tags: ["React", "Spring Boot", "WebSocket", "Gemini API"],
      github: "https://github.com/App-Legend/treeplan",
      demo: "",
    },
  ],

  // 수상, 전시 (Experience 섹션 맨 위에 사진과 함께)
  awards: [
    {
      title: "대림대학교 테크페어",
      period: "2026",
      highlight: "졸업작품 우수작 선정",
      points: ["HUR 팀장", "학과 부스 운영, 앱 시연", "전시 포스터 직접 디자인"],
      image: "assets/techfair-hur.jpg",
      caption: "테크페어 HUR 부스",
    },
  ],

  experience: [
    { period: "2026.11", title: "AI 해커톤", role: "MgrS 기획·개발 완료", detail: "" },
    { period: "2025.12", title: "반도체 부트캠프", role: "중급반 수료", detail: "" },
    { period: "2024 ~ 졸업예정", title: "대림대학교", role: "컴퓨터정보학부 (3년제)", detail: "" },
    { period: "2024.02", title: "수일고등학교", role: "졸업", detail: "" },
    { period: "2021.02", title: "박달중학교", role: "졸업", detail: "" },
  ],
};
