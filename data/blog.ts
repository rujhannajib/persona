export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "persona-rujhan-portfolio",
    title: "Persona: My personal portfolio",
    excerpt: "New personal portfolio, 3rd edition",
    date: "March 9, 2026",
    readTime: "1 min read",
    image: "/blogs/portfolio.png",
    category: "Career",
    content: `
      Persona is basically the project for my personal portfolio. Although I am no longer interested in front-end development, or web design to be exact, having a nice portfolio for a programmer is like having a luxury pen for a professional. Honestly, I really use Claude to help me speed up the development process.
      The theme color of Persona follows my Nike Air Force 1 colorway: orange, brown, and some white. Why orange? Orange is my favorite color, that's why. It also features my first personal emblem/crest, which I was inspired to create after watching a one-hour reel about the Ottoman Empire.
![My Nike Air Force 1](https://dks.scene7.com/is/image/GolfGalaxy/16NIKMRFRC1GRYWHTLFS_Mosswood_Brown_Campfire?wid=2000&hei=2000&fit=constrain&fmt=pjpeg)
      I also would like to use this portfolio as my writing platform. Due to my secret directive, speaking my thoughts in public is no longer an option. Hopefully, writing in my own portfolio will help me express my feelings and ideas about the past and the future.
    `,
  },
  {
    slug: "ihpm-password-manager",
    title: "IHPM",
    excerpt: "IHPM: In-House Password Manager",
    date: "March 9, 2026",
    readTime: "2 min read",
    image: "/projects/ihpm_front.png",
    category: "Cybersecurity",
    content: `
      IHPM is a locally managed, terminal-based password manager built with Python and MySQL — simple, secure, and entirely under your control.

      The inspiration came from growing concerns over how big tech companies handle personal data. Beyond monetizing user data without consent, some of these companies have been complicit in [collaborating with nations involved in human rights violations](https://www.theguardian.com/us-news/2025/oct/29/google-amazon-israel-contract-secret-code). IHPM was built on a straightforward belief: your passwords should never leave your machine.

      The program uses SHA-256 hashing to securely store credentials, allowing users to store, manage, and retrieve passwords through a clean terminal interface. A separate backup script runs periodically to export all credentials into an encrypted file, safeguarding your data against program corruption or system failure.

      Currently, IHPM is terminal-only. The roadmap includes a locally hosted web interface to serve as a GUI, making it more accessible without compromising its core principle of local ownership.

      IHPM is designed to be paired with a personal homelab setup — in my case, Admona — where it runs as part of a self-hosted, privacy-first infrastructure.
      `,
  },
  {
    slug: "pimp",
    title: "Me, Invest and PIMP (Personal Investment Management Platform)",
    excerpt: "Story of my life and investing",
    date: "March 24, 2026",
    readTime: "2 min read",
    image: "",
    category: "Finance",
    content: `
      I started investing in my second year. I mostly invest in ETFs and commodities, as they are stable and I don't have enough capital to invest in riskier environments. 
      I learned about investing when I joined my university's Quantitative Finance Club, PSU Quant. The lectures were rigorous, but I never skipped a meeting. 
      The vice president of the club noticed me and invited me to join the development team. I had to go through my first technical interview, consisting of two easy LeetCode questions and several Python questions from CMPSC 132. 
      I had the opportunity to build the club's first homepage and contribute to its trading tool. 

Several months in, I realized that gambling all my spare time on landing a job at a quant firm might not be worth it. 
That was when I decided to quit the club. Now, in my final year, I am taking MATH 448, Mathematical Finance, to learn the material I was introduced to in the club. 
To make sure I applied what I learned both in the club and in class, I created this project, PIMP (cool name, right?) to help me analyze my investment decisions. 
I personally use MooMoo as my stock broker, but the UI can be overwhelming. PIMP is designed to be used as a research platform before I execute trades on my broker. 
Right now, PIMP is just an API connecting my Supabase database with API endpoints. Future development will include graphical interfaces.
      `,
  },
  {
    slug: "admona",
    title: "Homelab: Admona",
    excerpt: "Building my own lab",
    date: "April 2, 2026",
    readTime: "2 min read",
    image: "/blogs/admona_barebone.png",
    category: "Tech",
    content: `
      A connected world is both a good and bad thing. The good news is that you can connect with other people. 
      The bad news is that any entity can access your digital information, intellectual property, and so on. 
      A connected and digitalized world has created excessive dependency on corporations, which are known for driving up their revenue by all means possible, including manipulating people. 
      That is the reason why I decided to start my own homelab.

      The second reason is that I have started to get back into robotics, which means I will have a room full of circuit boards and small LED lights all over the floor. 
      To make sure I don't waste money on unnecessary things, it is important to have a plan, which is part of Admona.

      This is the last you will hear about this project because it should be a [secret](https://youtu.be/Aq5WXmQQooo?si=bGS01clLc-K7ZFMz). Bye!
      `,
  },
  {
    slug: "internship1",
    title: "Internship#1: MARA",
    excerpt: "Policy research for my sponsor",
    date: "April 5, 2026",
    readTime: "4 min read",
    image: "/blogs/sleeping.jpg",
    category: "Career",
    content: `
      Well, I guess this is my first blog about a personal experience. Have you ever heard of someone doing an internship at MARA? Me neither. But this internship felt truly special to me. 
      If I had a list of the 10 most important events in my life, this would be one of them.

      First, let's talk about how I got the job. It was Spring 2024, and I was applying to every internship I could find. I got an offer from Pandai (a Malaysian educational startup), but the problem was they were stingy with holiday breaks and the allowance was only RM800 a month. 
      Then one day, Puan Muna, MARA's US director, shared an email about a policy research internship offer at MARA. Puan Muna was no stranger to me — I had visited her house in Washington DC just a couple of weeks prior. 
      It was my first time seeing a policy research internship, and I sent in my application because I was drawn to the investment and data science aspects of the role. Long story short, I got the offer and had to choose between MARA and Pandai. 
      MARA had several clear advantages: 1) MARA is my sponsor, 2) the allowance was RM5/hour, meaning I could actually earn more than RM800 a month (RM 5 x 9 hours of working x 20 days = RM 800), and 3) unlimited breaks. Honestly, there were also plenty of complaints about Pandai's HR department on Glassdoor, and I figured I could always do a tech internship in my junior year.
      
      ![Visiting the parliment as MARA representative](/blogs/parliment.jpg)

      I was pretty foolish when I said I could start on the 20th of May, given that I only arrived in Malaysia on the 17th — leaving myself just two days to recover after a year abroad. There was no direct public transport from my house to the office (near SOGO), and I didn't have a driving license (thanks to JPJ giving me the wrong instructions for renewing it). Luckily, my father works in KL and could drop me off at KL Sentral. 
      From there, I took the monorail straight to Medan Tuanku and walked to the office.
      
      ![My desk](/blogs/mara_workspace.jpg)

      I showed up on my first day dressed like a catering worker — white collar shirt, black pants. People say first impressions really matter, and they took that seriously. Within my first hour, I had joined a meeting, received my first assignment with no template and no clear instructions, and was told to present results the next day. 
      I literally spent hours staring at an Excel sheet trying to figure out what to do.  Eventually, I came up with the idea of cross-checking MARA's promises to the public using the data.  I presented my findings the next day and was pretty confident I nailed it. My supervisor packaged them into an official slide deck and sent it up to top management. 
      The coolest part of this internship was getting to meet well-known politicians and corporate figures. One of them was the former Governor of Bank Negara, Tan Sri Muhammad Ibrahim, who sat on the MARA board and frequently visited the Strategic Planning Division. He walked me through basic financial modelling, and I got the chance to briefly discuss my findings with him. 
      Another memorable opportunity was visiting the Malaysian Parliament — not as a tourist, but as MARA staff. It was fascinating to see two politicians laughing together just minutes after going at each other during a parliamentary session. 
      I even got to attend a meeting chaired by the Deputy Prime Minister, DS Ahmad Zahid Hamidi — a session so exclusive that my own boss had only attended it twice in her entire career.
      
      ![One of the meetings where I got the chance to work with former governor of Bank Negara](/blogs/mara_meeting.jpg)

      I have to give credit to my coworkers in the Strategic Planning Division for the incredible support they showed me throughout the internship. They treated me like a real employee, which I think is genuinely rare. 
      They always invited me out for lunch. Honestly, after my second year at Penn State, I had almost forgotten what it felt like to eat lunch with people. During my last month at MARA, I didn't spend a single cent on lunch because my coworkers kept picking up the tab. 
      I really hope I get the same kind of colleagues (in term of kindness and professionalism, of course) when I start my first job after graduation.

      ![My last day of internship](/blogs/mara_farewell.jpg)

      It was eye-opening to witness the full arc of how government policy is made — from proposal all the way to Parliament. I left feeling genuinely happy knowing I had contributed something meaningful, and that someone like me could still make a difference in the public sphere. 
      Internship rating: 5/5.
      `,
  },

  //   {
  //     slug: "introduction-to-machine-learning-with-python",
  //     title: "Introduction to Machine Learning with Python",
  //     excerpt:
  //       "Get started with machine learning using Python. Learn about scikit-learn, neural networks, and how to build your first ML model.",
  //     date: "January 20, 2026",
  //     readTime: "10 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMjcxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //     category: "Machine Learning",
  //     content: `Machine learning is transforming industries from healthcare to finance. Here's how to get started with Python.

  // ## Setting Up

  // Python's ML ecosystem is mature and well-supported. Start with these essential libraries:

  // \`\`\`bash
  // pip install numpy pandas scikit-learn matplotlib
  // \`\`\`

  // ## Your First Model

  // ### 1. Load and Explore Data

  // \`\`\`python
  // import pandas as pd
  // from sklearn.datasets import load_iris

  // data = load_iris()
  // df = pd.DataFrame(data.data, columns=data.feature_names)
  // \`\`\`

  // ### 2. Train a Classifier

  // \`\`\`python
  // from sklearn.model_selection import train_test_split
  // from sklearn.ensemble import RandomForestClassifier

  // X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.2)
  // model = RandomForestClassifier()
  // model.fit(X_train, y_train)
  // \`\`\`

  // ### 3. Evaluate

  // \`\`\`python
  // accuracy = model.score(X_test, y_test)
  // print(f"Accuracy: {accuracy:.2%}")
  // \`\`\`

  // ## Key Concepts

  // - **Supervised Learning** — learning from labeled examples (classification, regression)
  // - **Unsupervised Learning** — finding patterns in unlabeled data (clustering, dimensionality reduction)
  // - **Neural Networks** — deep learning models inspired by biological neural networks

  // ## Conclusion

  // Start simple with scikit-learn, understand the fundamentals, and gradually explore deep learning frameworks like PyTorch and TensorFlow.`,
  //   },
];
