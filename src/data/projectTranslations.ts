export type ProjectTranslation = {
  title: string;
  organization: string;
  summary: string;
  scope: string[];
  responsibilities: {
    owned: string[];
    collaborated?: string[];
    notPrimary?: string[];
  };
};

export const projectTranslations: Record<string, ProjectTranslation> = {
  "sixd-pose-aoi": {
    title: "Next-generation inspection: 6D pose estimation for dual-arm defect detection",
    organization: "NYCU / Hucenrotia",
    summary: "A dual-arm AOI system for reflective metal parts, integrating 6D pose estimation, defect detection, coordinate calibration and robot inspection into one pipeline.",
    scope: [
      "The team built a dual-arm AOI system combining 6D pose estimation, YOLOv7 defect detection and robotic inspection.",
      "Team testing reached approximately 95% detection accuracy and identified defects down to 1 mm; these figures are presented as team results.",
      "3D CAD models generated synthetic training data, while PSO, hand-eye calibration and pose matrices connected perception to robot motion."
    ],
    responsibilities: {
      owned: ["6D pose-estimation model training.", "Synthetic-data generation and automatic annotation from 3D CAD.", "PSO pose refinement, hand-eye calibration and pose-matrix computation.", "Dual-arm inspection-flow integration.", "ChatGPT and LINEBot text, image and voice interfaces."],
      collaborated: ["The overall project was a team effort; YOLOv7 defect detection and quantitative testing are presented as system-level team results."],
      notPrimary: ["Dynamic camera or lighting viewpoint planning has not been confirmed as my primary responsibility."]
    }
  },
  "book-retrieval": {
    title: "Generative AI book recognition and robotic retrieval system",
    organization: "National Yang Ming Chiao Tung University",
    summary: "A robotic book retrieval system combining book localization, semantic recognition, grasp pose generation, path planning and motion planning.",
    scope: ["The robot locates a requested book, plans a grasp and completes the retrieval action.", "The team system combines voice input, vision/VLA communication, grasping, path planning and arm motion planning.", "This remains one of my main research projects for deeper documentation."],
    responsibilities: {
      owned: ["All grasping-related work.", "Path planning.", "Motion planning."],
      collaborated: ["Communication and system integration with the VLA vision model."],
      notPrimary: ["Voice processing was primarily handled by other team members.", "Image recognition was primarily handled by other team members."]
    }
  },
  "voice-gripper": {
    title: "Voice-controlled robotic soft gripper",
    organization: "National Yang Ming Chiao Tung University",
    summary: "Integrates voice commands, object recognition and ROS 2 MoveIt MTC so a robot arm can plan and execute grasping tasks from spoken instructions.",
    scope: ["The system integrates OpenAI Whisper, Qwen3B and YOLOE to convert natural-language tasks into executable grasp targets.", "Point-cloud conversion generates grasp poses, while ROS 2 MoveIt MTC plans arm motion.", "Recorded tests show approximately 90% success and around 10 seconds of overall response time."],
    responsibilities: {
      owned: ["ROS 2 communication setup.", "Robot-arm control.", "Grasp-pose design.", "Grasp workflow design.", "Connecting recognition results to MoveIt MTC motion planning."],
      collaborated: ["The team integrated OpenAI Whisper, Qwen3B and YOLOE for voice-command object recognition."],
      notPrimary: ["Voice and image-recognition models were primarily handled by other team members."]
    }
  },
  "autonomous-trash-can": {
    title: "Autonomous Trash Can",
    organization: "MIT Media Lab CSL UROP",
    summary: "An app-callable autonomous trash can integrating a mobile base, threaded lid mechanism, Raspberry Pi, Arduino and ROS navigation.",
    scope: ["Built a ROS mobility-control flow for autonomous navigation.", "Connected hardware control through Raspberry Pi and Arduino.", "Designed the automatic lid mechanism and overall trash-can structure."],
    responsibilities: { owned: ["Trash-can mechanism design.", "ROS navigation control.", "Mechanical development and circuit design documented through the UROP work."] }
  },
  "tello-drone-apriltag": {
    title: "Drone following using AprilTags",
    organization: "Personal / Course Project",
    summary: "Uses a Tello drone camera to track AprilTags and converts tag position and scale changes into flight-control commands.",
    scope: ["Detected the relative AprilTag position in the camera image.", "Converted visual error into forward, lateral and altitude control.", "Used the project to practice visual servoing and aerial-robot control."],
    responsibilities: { owned: ["Drone flight-control program."] }
  },
  "ai-enforcement": {
    title: "AI-based autonomous vehicle parking enforcement system",
    organization: "Course / Team Project",
    summary: "Uses an autonomous vehicle as a mobile sensing platform to detect illegally parked vehicles and record license-plate information.",
    scope: ["Used YOLOv4 for roadside object and vehicle detection.", "Worked with the Autoware autonomous-driving environment.", "Processed imagery and designed decision logic for enforcement records."],
    responsibilities: { owned: ["Data annotation.", "Model training.", "Decision-method design.", "Image processing.", "Autoware operation."] }
  },
  "tdk-robot": {
    title: "24th TDK Cup competition robot",
    organization: "National Taipei University of Technology",
    summary: "A competition robot for slope climbing, object handling and opening a trash-can lid, focused on stable mechanisms and task execution.",
    scope: ["Designed mechanisms for the competition tasks.", "Completed fabrication and task testing.", "Built early experience in mechanical design and robotics competition work."],
    responsibilities: { owned: ["Mechanism design.", "Fabrication."] }
  },
  "line-following-car": {
    title: "Line-following autonomous car",
    organization: "National Taipei University of Technology",
    summary: "A personal build covering component selection, line-sensor path correction, distance sensing and vehicle motion control.",
    scope: ["Read line and distance sensor data.", "Controlled motor output based on path error.", "Integrated hardware and control software."],
    responsibilities: { owned: ["Circuit-component selection.", "Hardware integration.", "Motion-control programming."] }
  },
  "agri-suspended-robot": {
    title: "Suspended robot for AI-assisted agriculture",
    organization: "National Taipei University of Technology",
    summary: "A four-motor cable system that moves a camera above crops to collect plant images and condition data.",
    scope: ["Designed the suspended motion mechanism.", "Controlled camera position through motors and cable reels.", "Used the platform to collect data for AI-assisted crop care."],
    responsibilities: { owned: ["Mechanism design.", "Circuit-component selection.", "Control-circuit implementation."] }
  },
  "reward-vending-machine": {
    title: "Reward redemption vending machine",
    organization: "National Taipei University of Technology",
    summary: "An Arduino prototype simulating card balance, keypad input, LCD feedback and product redemption.",
    scope: ["Built the keypad-input and LCD-display flow.", "Simulated card balance and product redemption.", "Completed wiring and program control."],
    responsibilities: { owned: ["Programming.", "Circuit wiring."] }
  },
  "lane-detection": {
    title: "Automatic lane detection",
    organization: "National Taipei University of Technology",
    summary: "An OpenCV lane-detection pipeline covering grayscale conversion, edge detection, region masking, line filtering and noise reduction.",
    scope: ["Built the basic image-processing pipeline.", "Detected lane edges and line segments.", "Improved output stability through noise filtering."],
    responsibilities: { owned: ["Algorithm development.", "Noise filtering."] }
  },
  "background-removal": {
    title: "Automatic object removal and background inpainting",
    organization: "National Taipei University of Technology",
    summary: "A traditional image-processing pipeline that removes a selected object region and fills it using surrounding visual information.",
    scope: ["Detected and removed the target object.", "Filled the missing region using surrounding background information.", "Practiced traditional image processing and program-flow design."],
    responsibilities: { owned: ["Programming."] }
  },
  "cifar10-low-data": {
    title: "CIFAR-10 model optimization with limited data",
    organization: "National Taipei University of Technology",
    summary: "Built and evaluated an image-classification model using only 10,000 CIFAR-10 training samples.",
    scope: ["Limited the training set to study model behavior in a low-data setting.", "Reviewed related work and built the model.", "Recorded training results and model performance."],
    responsibilities: { owned: ["Model construction.", "Literature review."] }
  },
  "dqn-2048": {
    title: "DQN 2048 AI",
    organization: "Personal / Course Project",
    summary: "Uses the 2048 game as a reinforcement-learning environment and trains a DQN agent to select movement strategies.",
    scope: ["Implemented the 2048 game environment.", "Designed rewards and trained the DQN agent.", "Tested training results and recorded strategy performance."],
    responsibilities: { owned: ["Model construction.", "Reward design and testing.", "Training-result evaluation.", "Game implementation."] }
  },
  "growing-rice": {
    title: "Growing Rice",
    organization: "Personal / Course Project",
    summary: "A Flutter mobile app with alarm and weather reminders, preserved as an early UI and product-planning project.",
    scope: ["Built the app interface.", "Planned alarm and weather-reminder features.", "Used the project as early practice in Flutter and mobile-interface design."],
    responsibilities: { owned: ["UI implementation."] }
  },
  "chrome-dino": {
    title: "Chrome Dino game remake",
    organization: "Personal / Course Project",
    summary: "A Python and Pygame remake implementing the game loop, jumping, obstacles, collision detection and scoring.",
    scope: ["Built the game loop with Pygame.", "Implemented jumping, obstacles, collision detection and scoring.", "Used the project as early Python game and interaction practice."],
    responsibilities: { owned: ["Programming."] }
  }
};

export const projectCategoryLabels: Record<string, { zh: string; en: string }> = {
  flagship: { zh: "代表系統", en: "Featured Systems" },
  mobile: { zh: "移動與自主", en: "Mobile & Autonomous" },
  ai: { zh: "視覺與 AI", en: "Vision & AI" },
  embedded: { zh: "機構與嵌入式", en: "Mechanism & Embedded" },
  software: { zh: "軟體與學習", en: "Software & Learning" }
};
