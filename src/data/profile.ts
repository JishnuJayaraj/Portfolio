// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Everything on the site AND the generated CV reads from this file.
// Edit here → both update. Items marked `TODO` are placeholders to confirm.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jishnu Jayaraj',
  // A few tagline options — keep `tagline` as the active one, swap freely.
  tagline: 'Think. Code. Iterate.',
  taglineAlternatives: [
    'Think. Code. Iterate.',
    'Turning data into decisions.',
    'From fluid dynamics to language models.',
    'ML engineer. Systems thinker. Lifelong tinkerer.',
    'I build systems that learn.',
  ],
  role: 'Machine Learning Engineer',
  location: 'Nürnberg, Germany',
  // Portrait shown in the About section. Lives in /public, served as-is.
  photo: '/me.jpg',
  about: [
    `I'm a Machine Learning Engineer focused on Large Language Models and the systems
     that put them to work. My path started in computational mechanics — simulating
     fluids in C++ and MATLAB — which gave me a deep respect for numerical rigor before
     I moved into deep learning.`,
    `Today I build retrieval-augmented assistants, knowledge-extraction pipelines, and
     recommendation systems — and I care just as much about the data engineering, cloud
     infrastructure, and MLOps that make them reliable in production.`,
    `Outside of work I run a home lab, automate everything I can, and stay endlessly
     curious about how data and AI reshape the world.`,
  ],

  links: {
    github: 'https://github.com/JishnuJayaraj',
    linkedin: 'https://www.linkedin.com/in/jishnu-jayaraj/',
    twitter: 'https://x.com/JI5hnu',
  },

  // ── Technical capabilities ──────────────────────────────────────────────────
  skills: [
    {
      group: 'LLMs & Retrieval Systems',
      summary: 'RAG assistants, grounded generation, private-document search, and evaluation workflows.',
      primary: ['RAG', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Prompt Engineering', 'Embeddings'],
      also: ['LoRA / QLoRA', 'PEFT', 'vLLM', 'TGI', 'RAGAS', 'LangSmith', 'Ollama'],
      applied: 'Private-document QA, HR knowledge tools, retrieval-backed assistants',
    },
    {
      group: 'NLP & Knowledge Graphs',
      summary: 'Transforms unstructured text into entities, topics, relations, search indexes, and graph-backed knowledge.',
      primary: ['Hugging Face', 'Transformers', 'BERT / RoBERTa', 'spaCy', 'NER', 'Text Classification'],
      also: ['BERTopic', 'LDA', 'Sentence Transformers', 'Cross-encoder Reranking', 'Knowledge Graphs', 'Graph Databases'],
      applied: 'Knowledge extraction, topic modeling, career and labour-market intelligence',
    },
    {
      group: 'Machine Learning Engineering',
      summary: 'Training, evaluation, embedding, recommendation, and graph-learning workflows.',
      primary: ['PyTorch', 'scikit-learn', 'Deep Learning', 'Transfer Learning', 'Graph Neural Nets'],
      also: ['XGBoost', 'LightGBM', 'Recommendation Systems', 'Embedding Models', 'PyTorch Lightning'],
      applied: 'Recommendation systems, graph learning pipelines, production-oriented model workflows',
    },
    {
      group: 'Vector Search & Data Systems',
      summary: 'Retrieval layers, hybrid search, structured storage, and data pipelines for ML and LLM systems.',
      primary: ['Python', 'Pandas / NumPy', 'FAISS', 'pgvector', 'PostgreSQL', 'Hybrid Search'],
      also: ['Weaviate', 'Chroma', 'Qdrant', 'Elasticsearch', 'Redis', 'MongoDB', 'DuckDB'],
      applied: 'Document retrieval, semantic search, ETL pipelines, search-backed applications',
    },
    {
      group: 'MLOps & Model Serving',
      summary: 'Reproducible pipelines, APIs, deployments, monitoring, and model-service delivery.',
      primary: ['Docker', 'FastAPI', 'GitLab CI', 'MLflow', 'W&B', 'Model Deployment'],
      also: ['BentoML', 'GitHub Actions', 'Prometheus', 'Grafana', 'DVC', 'Prefect'],
      applied: 'Prototype-to-production paths, model serving, CI/CD-backed ML workflows',
    },
    {
      group: 'Cloud, DevOps & Infrastructure',
      summary: 'Linux-based systems, containers, orchestration, messaging, and cloud deployments.',
      primary: ['Linux', 'Bash', 'Docker', 'Kubernetes', 'AWS S3 / EC2 / Lambda'],
      also: ['GCP Vertex AI', 'RabbitMQ', 'Nginx', 'Helm', 'Terraform', 'Kafka'],
      applied: 'Self-hosted services, cloud deployments, queue-backed systems, infrastructure automation',
    },
    {
      group: 'Backend APIs & Automation',
      summary: 'APIs, ingestion workflows, automation, and backend services around ML products.',
      primary: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Redis', 'Pydantic', 'pytest'],
      also: ['Scrapy', 'BeautifulSoup', 'Playwright', 'Celery', 'asyncio', 'Node.js', 'TypeScript'],
      applied: 'Data collection, backend APIs, web automation, internal ML tools',
    },
    {
      group: 'Scientific Computing Foundation',
      summary: 'Numerical rigor from simulation, optimization, and computational engineering.',
      primary: ['C++', 'MATLAB', 'Numerical Methods', 'CUDA / GPU', 'High-performance Computing'],
      also: ['Fluid Simulation', 'Shape Optimization', 'Mathematical Modeling', 'Pattern Recognition'],
      applied: 'Computational mechanics background applied to reliable ML engineering',
    },
  ],

  // ── Experience ───────────────────────────────────────────────────────────────
  experience: [
    {
      company: 'MYPEGASUS GmbH',
      url: 'https://www.mypegasus.de/',
      title: 'Machine Learning Engineer',
      period: 'Nov 2024 — Present',
      location: 'Nuremberg, Germany · On-site',
      bullets: [
        'Build and deploy machine-learning systems that support workforce transformation and career-transition services.',
        'Develop NLP and LLM-powered tooling to turn unstructured HR and labour-market data into actionable guidance.',
        'Own the path from prototype to production — data pipelines, model serving, and MLOps.',
      ],
    },
    {
      company: 'Greple GmbH',
      url: 'https://greple.de/',
      title: 'Machine Learning Engineer',
      period: 'Jun 2021 — Nov 2024',
      location: 'Fürth, Germany',
      bullets: [
        'Led the design and implementation of a Workplace Transformation System — an internal tool that recommends personalized career-progression paths to improve employee development.',
        'Architected NLP and graph-learning pipelines to extract knowledge from unstructured data and power information retrieval.',
        'Built AI chatbot services with retrieval augmentation and live web lookup for contextually relevant answers.',
        'Established MLOps practices and GitLab-based CI/CD for reproducible model delivery.',
      ],
    },
    {
      company: 'ROKIN',
      url: 'https://www.rokin.tech/',
      title: 'NLP Intern',
      period: 'Mar 2020 — Mar 2021',
      location: 'Germany · Remote',
      bullets: [
        'Developed a trend-analysis workflow integrating state-of-the-art unsupervised machine learning to anticipate market movements.',
        'Built topic-modeling strategies to surface key themes and improve content categorization.',
        'Applied transformer models (BERT, RoBERTa, XLNet) to advance text-analysis capabilities. Master-thesis project.',
      ],
    },
    {
      company: 'Siemens Healthineers',
      url: 'https://www.siemens-healthineers.com/de',
      title: 'Research & Development Engineer',
      period: 'Nov 2018 — Dec 2019',
      location: 'Erlangen, Germany',
      bullets: [
        'Co-engineered highly available RabbitMQ clusters to improve the performance of message-oriented middleware systems.',
        'Automated routine processes with shell scripting and strengthened systems design.',
        'Piloted the move from manual to automated web testing, using neural networks to simulate complex user interactions.',
      ],
    },
    {
      company: 'Institute FAPS, FAU',
      url: 'https://www.faps.fau.de/',
      title: 'Research Assistant',
      period: 'Mar 2018 — Oct 2018',
      location: 'Germany',
      bullets: [
        'Administered Windows server environments, ensuring performance, security, and reliability of university network systems.',
        'Implemented operational best practices and supported research infrastructure.',
      ],
    },
  ],

  // ── Education ────────────────────────────────────────────────────────────────
  education: [
    {
      school: 'FAU Erlangen-Nürnberg',
      degree: "M.Sc. Computational Engineering",
      period: 'Oct 2017 — Mar 2021',
      note: 'Grade 2.0. Focus: pattern recognition, fluid simulation, high-performance computing, and mathematical modeling.',
    },
    {
      school: 'Government Engineering College, Palakkad',
      degree: 'B.Tech Mechanical Engineering',
      period: 'Mar 2012 — Sep 2016',
      note: 'Focus: thermodynamics, automotive engineering, material science, and 3D modeling.',
    },
  ],

  // ── Projects (PLACEHOLDERS — realistic, swap with real work later) ────────────
  projects: [
    {
      title: 'RAG Knowledge Assistant',
      blurb: 'A retrieval-augmented chat assistant over private documents, with hybrid vector + keyword search, citations, and streaming responses.',
      tags: ['LLM', 'RAG', 'FastAPI', 'Vector DB'],
      area: 'ML / LLMs',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
    {
      title: 'LLM Evaluation Harness',
      blurb: 'A framework to benchmark prompts and models on custom tasks — automated scoring, regression tracking, and side-by-side diffing.',
      tags: ['LLM', 'Evaluation', 'Python', 'CI/CD'],
      area: 'ML / LLMs',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
    {
      title: 'Graph Entity Extractor',
      blurb: 'Turns unstructured text into a queryable knowledge graph using NER, relation extraction, and graph embeddings.',
      tags: ['NLP', 'Graph Learning', 'PyTorch'],
      area: 'Data Science',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
    {
      title: 'Personality-from-Text Model',
      blurb: 'Infers Big-Five personality facets from writing samples, with a calibrated confidence score and an interpretable feature breakdown.',
      tags: ['NLP', 'Transformers', 'scikit-learn'],
      area: 'Data Science',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
    {
      title: 'Home Lab Automation Stack',
      blurb: 'A self-hosted, GitOps-driven home lab: Kubernetes, monitoring, automated backups, and reproducible infra-as-code.',
      tags: ['Kubernetes', 'Docker', 'IaC', 'Self-hosted'],
      area: 'DevOps / Home Lab',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
    {
      title: 'Shape Optimization Toolkit',
      blurb: 'Gradient-based shape optimization for fluid-dynamics problems, GPU-accelerated and built on a C++ simulation core.',
      tags: ['C++', 'CUDA', 'Simulation', 'Optimization'],
      area: 'Scientific Computing',
      links: { github: '#', demo: '#' },
      placeholder: true,
    },
  ],
};

export type Profile = typeof profile;
