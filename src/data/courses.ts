export type CourseFormat = 'Online' | 'Physical';

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  track: string;
  tools: string[];
  level: 'Basic' | 'Intermediate' | 'Advanced' | 'Bonus';
  duration: string;
  suitableFor: string;
  prerequisites?: string;
  isBonus?: boolean;
  prices: {
    online: string;
    physical: string;
  };
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
}

export const coursesData: CourseData[] = [
  // ─── Business Analysis Track ──────────────────────────────────────────────
  {
    id: "c1",
    slug: "business-excel-basic",
    title: "Business Analysis with Excel",
    track: "Business Analysis",
    tools: ["Microsoft Excel"],
    level: "Basic",
    duration: "4 weeks",
    suitableFor: "Beginners, office workers, marketers, HR professionals",
    prices: {
      online: "₦50,000",
      physical: "₦90,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Excel Fundamentals & Data Entry",
        topics: ["Spreadsheet navigation", "Formatting & cell styles", "Basic formulas: SUM, AVERAGE, COUNT, IF, IFS"]
      },
      {
        week: 2,
        title: "Data Cleaning & Transformation",
        topics: ["VLOOKUP, XLOOKUP, INDEX/MATCH", "TEXT & date functions", "Removing duplicates", "Data validation rules"]
      },
      {
        week: 3,
        title: "Pivot Tables & Dashboards",
        topics: ["PivotTables & PivotCharts", "Slicers & Timelines", "Dashboard design principles", "Conditional formatting"]
      },
      {
        week: 4,
        title: "Business Reporting & Capstone",
        topics: ["Charts for executive reports", "Power Query introduction", "Automation with macros (intro)", "Capstone business dashboard project"]
      }
    ]
  },
  {
    id: "c2",
    slug: "business-powerbi-intermediate",
    title: "Business Intelligence with Power BI",
    track: "Business Analysis",
    tools: ["Microsoft Excel", "Power BI"],
    level: "Intermediate",
    duration: "4 weeks",
    suitableFor: "Data analysts, business intelligence professionals, corporate managers",
    prerequisites: "Basic Excel recommended",
    prices: {
      online: "₦80,000",
      physical: "₦140,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Power BI Desktop Fundamentals",
        topics: ["Interface overview", "Connecting multiple data sources", "Power Query transformations"]
      },
      {
        week: 2,
        title: "Data Modeling & Relationships",
        topics: ["Star schema design", "Table relationships & cardinality", "DAX fundamentals: CALCULATE, SUMX, FILTER, ALL"]
      },
      {
        week: 3,
        title: "Interactive Dashboards & Visualizations",
        topics: ["Visual types & best practices", "Slicers, bookmarks & drill-throughs", "Tooltip pages", "Mobile layout design"]
      },
      {
        week: 4,
        title: "Publishing, Sharing & Capstone",
        topics: ["Power BI Service workspace", "Scheduled refresh & gateway", "Row-level security (RLS)", "Capstone executive dashboard"]
      }
    ]
  },

  // ─── Research Analysis Track ──────────────────────────────────────────────
  {
    id: "c3",
    slug: "research-excel-spss-basic",
    title: "Research Analysis with Excel & SPSS",
    track: "Research Analysis",
    tools: ["Microsoft Excel", "IBM SPSS"],
    level: "Basic",
    duration: "4 weeks",
    suitableFor: "Students, academic researchers, NGO workers, postgraduates",
    prices: {
      online: "₦50,000",
      physical: "₦90,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Research Data Setup with Excel",
        topics: ["Questionnaire design & coding", "Data entry best practices", "Cleaning survey data", "Descriptive statistics in Excel"]
      },
      {
        week: 2,
        title: "Introduction to IBM SPSS",
        topics: ["Interface & Variable View", "Importing data from Excel", "Frequency tables & crosstabs", "Data View management"]
      },
      {
        week: 3,
        title: "Statistical Tests in SPSS",
        topics: ["Mean, median, standard deviation", "Chi-square test of independence", "Independent samples T-test", "One-way ANOVA"]
      },
      {
        week: 4,
        title: "Interpretation & Academic Reporting",
        topics: ["Reading SPSS output tables", "APA 7 reporting format", "Regression basics", "Capstone thesis analysis project"]
      }
    ]
  },

  // ─── Financial Analysis & Econometrics Track ──────────────────────────────
  {
    id: "c5",
    slug: "financial-excel-basic",
    title: "Financial Analysis with Excel",
    track: "Financial Analysis & Econometrics",
    tools: ["Microsoft Excel"],
    level: "Basic",
    duration: "4 weeks",
    suitableFor: "Finance students, economists, banking professionals, accountants",
    prices: {
      online: "₦50,000",
      physical: "₦90,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Financial Spreadsheet Foundations",
        topics: ["Financial formulas: NPV, IRR, PMT, XIRR", "PV, FV, amortization schedules"]
      },
      {
        week: 2,
        title: "Time Series & Trend Analysis",
        topics: ["Line charts & sparklines", "Moving averages & forecasting", "Growth rate & CAGR calculations"]
      },
      {
        week: 3,
        title: "Financial Modelling",
        topics: ["Scenario & sensitivity analysis", "What-If data tables", "Three-statement model intro", "Valuation basics"]
      },
      {
        week: 4,
        title: "Reporting & Investment Analysis",
        topics: ["Financial KPI dashboards", "Ratio analysis (liquidity, profitability)", "Presentation-ready charts", "Capstone project"]
      }
    ]
  },
  {
    id: "c6",
    slug: "financial-eviews-intermediate",
    title: "Econometrics with EViews",
    track: "Financial Analysis & Econometrics",
    tools: ["Microsoft Excel", "EViews"],
    level: "Intermediate",
    duration: "4 weeks",
    suitableFor: "Economists, researchers, financial analysts, policy professionals",
    prerequisites: "Basic statistics knowledge",
    prices: {
      online: "₦80,000",
      physical: "₦140,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Introduction to EViews",
        topics: ["Interface & workfile setup", "Importing time series data (CBN, World Bank)", "Descriptive statistics & graphs"]
      },
      {
        week: 2,
        title: "Regression Analysis",
        topics: ["OLS regression fundamentals", "Interpreting coefficients & p-values", "R-squared, F-statistics, DW test"]
      },
      {
        week: 3,
        title: "Time Series Econometrics",
        topics: ["Stationarity & differencing", "Unit root tests (ADF, PP)", "Cointegration (Engle-Granger, Johansen)", "ARIMA models"]
      },
      {
        week: 4,
        title: "Advanced Models & Academic Output",
        topics: ["VECM & VAR models", "Granger causality test", "ARCH/GARCH volatility", "Academic thesis writeup & formatting"]
      }
    ]
  },

  // ─── Database Management Track ────────────────────────────────────────────
  {
    id: "c7",
    slug: "database-management-sql",
    title: "Database Management with SQL",
    track: "Database Management",
    tools: ["SQL", "PostgreSQL", "MySQL"],
    level: "Basic",
    duration: "6 weeks",
    suitableFor: "Analysts, developers, researchers, business intelligence professionals",
    prices: {
      online: "₦65,000",
      physical: "₦110,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Relational Database Fundamentals",
        topics: ["What is a database?", "Tables, rows, columns", "Primary keys, foreign keys", "Database design principles"]
      },
      {
        week: 2,
        title: "SQL Foundations",
        topics: ["SELECT, FROM, WHERE", "ORDER BY, LIMIT, DISTINCT", "Data types & NULL handling"]
      },
      {
        week: 3,
        title: "Aggregations & Grouping",
        topics: ["GROUP BY & HAVING", "COUNT, SUM, AVG, MIN, MAX", "Window functions: ROW_NUMBER, RANK, LAG"]
      },
      {
        week: 4,
        title: "Joins & Subqueries",
        topics: ["INNER JOIN, LEFT JOIN, FULL JOIN", "Self-joins", "Subqueries & CTEs (WITH clauses)"]
      },
      {
        week: 5,
        title: "Database Design & Administration",
        topics: ["CREATE, ALTER, DROP tables", "Normalization (1NF, 2NF, 3NF)", "Indexes & query optimization", "Views & stored procedures"]
      },
      {
        week: 6,
        title: "Real-World Projects & Integration",
        topics: ["Connecting SQL to Excel & Power BI", "Building a database from scratch", "Querying business datasets", "Capstone database project"]
      }
    ]
  },

  // ─── Data Analytics with Python/R Track ──────────────────────────────────
  {
    id: "c8",
    slug: "data-analytics-python-r",
    title: "Data Analytics with Python & R",
    track: "Data Analytics with Python / R",
    tools: ["Python", "R", "Jupyter Notebook", "VS Code"],
    level: "Intermediate",
    duration: "8 weeks",
    suitableFor: "Aspiring data scientists, analysts, researchers, STEM graduates",
    prerequisites: "Basic computer literacy; no coding experience required",
    prices: {
      online: "₦90,000",
      physical: "₦160,000"
    },
    curriculum: [
      {
        week: 1,
        title: "Python & R Environment Setup",
        topics: ["Installing Python, Anaconda, Jupyter", "Python syntax fundamentals", "R & RStudio setup", "Variables, data types, control flow"]
      },
      {
        week: 2,
        title: "Data Manipulation with Python",
        topics: ["Pandas: DataFrames & Series", "Data cleaning with pandas", "Merging & reshaping datasets", "Handling missing values"]
      },
      {
        week: 3,
        title: "Data Manipulation with R",
        topics: ["tidyverse: dplyr & tidyr", "Piping with %>%", "Data transformation & wrangling", "Joining & pivoting data"]
      },
      {
        week: 4,
        title: "Data Visualization",
        topics: ["Matplotlib & Seaborn (Python)", "ggplot2 (R)", "Interactive charts with Plotly", "Storytelling with data"]
      },
      {
        week: 5,
        title: "Exploratory Data Analysis (EDA)",
        topics: ["Distributions & outlier detection", "Correlation analysis", "Feature engineering basics", "EDA on real-world datasets"]
      },
      {
        week: 6,
        title: "Statistical Analysis in Python & R",
        topics: ["Hypothesis testing (t-test, chi-square)", "ANOVA in Python & R", "Regression analysis", "Statistical reporting"]
      },
      {
        week: 7,
        title: "Working with APIs & Web Data",
        topics: ["Fetching data from REST APIs", "Web scraping with BeautifulSoup", "JSON & CSV data handling", "Automation scripts"]
      },
      {
        week: 8,
        title: "Portfolio Projects & Capstone",
        topics: ["End-to-end analytics project", "GitHub portfolio setup", "Presenting insights to stakeholders", "Capstone presentation"]
      }
    ]
  },

  // ─── Machine Learning Track ───────────────────────────────────────────────
  {
    id: "c9",
    slug: "machine-learning-python",
    title: "Machine Learning with Python",
    track: "Machine Learning",
    tools: ["Python", "scikit-learn", "TensorFlow", "Jupyter Notebook"],
    level: "Advanced",
    duration: "10 weeks",
    suitableFor: "Data analysts, Python developers, engineers, advanced researchers",
    prerequisites: "Python programming & data analytics fundamentals",
    prices: {
      online: "₦120,000",
      physical: "₦200,000"
    },
    curriculum: [
      {
        week: 1,
        title: "ML Foundations & Environment",
        topics: ["What is Machine Learning?", "Types: supervised, unsupervised, reinforcement", "Python ML stack: NumPy, pandas, scikit-learn", "Setting up Jupyter & Colab"]
      },
      {
        week: 2,
        title: "Data Preprocessing for ML",
        topics: ["Feature scaling & normalization", "Encoding categorical variables", "Train/test splits & cross-validation", "Handling imbalanced datasets"]
      },
      {
        week: 3,
        title: "Regression Algorithms",
        topics: ["Linear & polynomial regression", "Ridge & Lasso regularization", "Evaluating regression: MSE, RMSE, R²", "Real-world regression projects"]
      },
      {
        week: 4,
        title: "Classification Algorithms",
        topics: ["Logistic regression", "Decision trees & Random Forest", "Support Vector Machines (SVM)", "Evaluating: accuracy, precision, recall, F1, ROC-AUC"]
      },
      {
        week: 5,
        title: "Unsupervised Learning",
        topics: ["K-Means clustering", "Hierarchical clustering", "Dimensionality reduction: PCA, t-SNE", "Anomaly detection"]
      },
      {
        week: 6,
        title: "Advanced Algorithms & Ensembles",
        topics: ["Gradient Boosting, XGBoost, LightGBM", "Stacking & blending models", "Feature importance & SHAP values", "Bayesian optimization"]
      },
      {
        week: 7,
        title: "Deep Learning Fundamentals",
        topics: ["Neural network architecture", "TensorFlow & Keras basics", "Training & activation functions", "Image classification intro"]
      },
      {
        week: 8,
        title: "Natural Language Processing (NLP)",
        topics: ["Text preprocessing & tokenization", "Sentiment analysis", "Topic modelling", "Transformers intro (BERT, GPT)"]
      },
      {
        week: 9,
        title: "Model Deployment & MLOps",
        topics: ["Saving & loading models", "Building a REST API with Flask", "Deploying to cloud (AWS/GCP intro)", "Model monitoring basics"]
      },
      {
        week: 10,
        title: "Capstone ML Project",
        topics: ["End-to-end ML pipeline", "Problem definition & data collection", "Model selection & tuning", "Final presentation & GitHub portfolio"]
      }
    ]
  },

  // ─── BONUS: Prompt Engineering ────────────────────────────────────────────
  {
    id: "c10",
    slug: "prompt-engineering-analysis",
    title: "Prompt Engineering for Data Analysis",
    track: "Bonus Class",
    tools: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot"],
    level: "Bonus",
    duration: "2 weeks",
    isBonus: true,
    suitableFor: "All BezaTo students — bundled free with any course enrolment",
    prices: {
      online: "FREE (bundled)",
      physical: "FREE (bundled)"
    },
    curriculum: [
      {
        week: 1,
        title: "AI Tools for Analysts",
        topics: ["Prompt engineering fundamentals", "Using ChatGPT to write & debug SQL", "AI-assisted EDA & data cleaning", "Generating Python code with Copilot"]
      },
      {
        week: 2,
        title: "Practical AI-Augmented Workflows",
        topics: ["Building dashboards 10× faster with AI", "Using AI to interpret statistical outputs", "Automating reports with AI", "Responsible use of AI in analytics"]
      }
    ]
  }
];
