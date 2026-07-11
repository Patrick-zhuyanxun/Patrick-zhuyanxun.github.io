import portfolio from "./projects.json";

export type Project = {
  id: string;
  title: string;
  shortTitle?: string;
  year: string;
  category: string;
  categoryLabel?: string;
  organization?: string;
  priority?: string;
  tags: string[];
  groups?: string[];
  heroImage: string;
  imageFit?: "contain" | "cover";
  images?: { src: string; caption?: string }[];
  summary?: string;
  scope?: string[];
  responsibilities?: {
    owned?: string[];
    collaborated?: string[];
    notPrimary?: string[];
  };
  links?: { label: string; url: string }[];
  score?: Record<string, string>;
};

type PortfolioData = {
  categories: { id: string; label: string; description: string }[];
  scoringDimensions: string[];
  projects: Project[];
};

export const profile = {
  name: "朱彥勳",
  englishName: "Patrick Zhu",
  email: "Patrickzhu616@gmail.com",
  github: "https://github.com/Patrick-zhuyanxun",
  linkedin: "https://www.linkedin.com/in/patrick-zhu-46991b208/"
};

export const portfolioData = portfolio as PortfolioData;
export const projects = portfolioData.projects;
export const categories = portfolioData.categories;
export const scoringDimensions = portfolioData.scoringDimensions;

export const projectCategoryNames: Record<string, string> = {
  flagship: "代表系統",
  mobile: "移動與自主",
  ai: "視覺與 AI",
  embedded: "機構與嵌入式",
  software: "軟體與學習"
};

export const featuredProjectIds = [
  "sixd-pose-aoi",
  "book-retrieval",
  "autonomous-trash-can"
];

export const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const projectImage = (path: string) => `/images/projects/${path.replace(/^assets\//, "")}`;

export const journey = [
  {
    dateZh: "2025 年至今",
    dateEn: "2025 – present",
    typeZh: "研究專案",
    typeEn: "RESEARCH PROJECT",
    titleZh: "生成式 AI 書籍辨識與機器人抓取系統",
    titleEn: "Generative AI book recognition and robotic grasping",
    descriptionZh: "主責書籍抓取、路徑規劃與動作規劃，並協作 VLA 影像辨識模型與抓取模組之間的資料溝通。",
    descriptionEn: "Owns book grasping, path planning and motion planning; collaborates on the data flow between VLA vision and grasping modules.",
    type: "project"
  },
  {
    dateZh: "2024 年 11 月至 2026 年 1 月",
    dateEn: "Nov 2024 - Jan 2026",
    typeZh: "教學經歷",
    typeEn: "TEACHING",
    titleZh: "亞太美國學校｜VEX 機器人教練",
    titleEn: "Pacific American School | VEX Robotics Coach",
    descriptionZh: "指導學生準備國際 VEX 機器人競賽，涵蓋機構設計、電路控制與程式設計，協助學生取得世界賽資格。",
    descriptionEn: "Coached students for international VEX Robotics Competition across mechanism design, circuit control and programming; supported qualification for the VEX Robotics World Championship.",
    type: "experience"
  },
  {
    dateZh: "2025 年 9 月至 2026 年 1 月",
    dateEn: "Sep 2025 - Jan 2026",
    typeZh: "教學經歷",
    typeEn: "TEACHING",
    titleZh: "亞太美國學校｜Python 教師",
    titleEn: "Pacific American School | Python Teacher",
    descriptionZh: "教授學生 Python 程式設計。",
    descriptionEn: "Taught Python programming to students.",
    type: "experience"
  },
  {
    dateZh: "2024–2025 年",
    dateEn: "2024–2025",
    typeZh: "研究專案",
    typeEn: "RESEARCH PROJECT",
    titleZh: "6D 姿態估測結合雙臂瑕疵檢測系統",
    titleEn: "6D pose estimation for dual-arm defect inspection",
    descriptionZh: "於團隊專案中主責 6D 姿態估測模型訓練、合成資料、PSO 校正與雙臂檢測流程整合。",
    descriptionEn: "Owned 6D pose training, synthetic data, PSO calibration and dual-arm inspection-flow integration in a team project.",
    type: "project"
  },
  {
    dateZh: "2024 年 8 月至今",
    dateEn: "Aug 2024 – present",
    typeZh: "學歷",
    typeEn: "EDUCATION",
    titleZh: "國立陽明交通大學｜電控工程研究所 碩士班",
    titleEn: "NYCU | M.S. in Electrical and Control Engineering",
    descriptionZh: "就讀電機與控制工程研究所，持續投入機器人、機器視覺與 AI 系統整合。",
    descriptionEn: "Studying electrical and control engineering, with continuing work in robotics, vision and AI systems integration.",
    type: "education"
  },
  {
    dateZh: "2023 年",
    dateEn: "2023",
    typeZh: "研究專案",
    typeEn: "RESEARCH PROJECT",
    titleZh: "MIT Media Lab CSL UROP｜智能垃圾桶",
    titleEn: "MIT Media Lab CSL UROP | Autonomous Trash Can",
    descriptionZh: "負責機構開發、電路設計與核心機電整合，串接 Raspberry Pi、Arduino 與 ROS 導航控制流程。",
    descriptionEn: "Developed mechanics, circuits and core mechatronics integration across Raspberry Pi, Arduino and ROS navigation.",
    type: "project"
  },
  {
    dateZh: "2022 年 7–8 月",
    dateEn: "Jul–Aug 2022",
    typeZh: "實習經歷",
    typeEn: "INTERNSHIP",
    titleZh: "和碩聯合科技｜機構及工業設計中心 約聘實習生",
    titleEn: "Pegatron | Mechanical and Industrial Design Center intern",
    descriptionZh: "以 Python 與 Open3D 開發 3D 點雲匹配系統 GUI，並參與量測用產線自走車的硬體機構設計。",
    descriptionEn: "Built a 3D point-cloud matching GUI with Python and Open3D, and contributed to AGV mechanism design for a measurement line.",
    type: "experience"
  },
  {
    dateZh: "2021 年 7–8 月",
    dateEn: "Jul–Aug 2021",
    typeZh: "實習經歷",
    typeEn: "INTERNSHIP",
    titleZh: "精浚科技｜助理機構工程師",
    titleEn: "OME Technology | Assistant mechanical engineer",
    descriptionZh: "參與壓電馬達定位平台與大型雷達設備的機構設計，並以 SolidWorks 進行力學與運動模擬分析。",
    descriptionEn: "Contributed to positioning-stage and radar-equipment mechanisms, including SolidWorks mechanical and motion simulations.",
    type: "experience"
  },
  {
    dateZh: "2018–2023 年",
    dateEn: "2018–2023",
    typeZh: "學歷",
    typeEn: "EDUCATION",
    titleZh: "國立台北科技大學｜智慧自動化工程科 副學士",
    titleEn: "NTUT | Associate degree in Intelligent Automation Engineering",
    descriptionZh: "完成智慧自動化工程科學程，GPA 3.9/4.0。",
    descriptionEn: "Completed the Intelligent Automation Engineering program with a 3.9/4.0 GPA.",
    type: "education"
  }
] as const;
