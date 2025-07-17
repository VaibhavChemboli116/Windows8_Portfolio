import React from 'react';
import { FaGraduationCap, FaBook, FaBriefcase, FaBuilding, FaCode, FaLaptopCode, FaLinkedin, FaGithub, FaFlask, FaAward, FaChalkboardTeacher, FaCertificate, FaHandsHelping, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import type { Project } from '../types/startScreen';

export const projects: Project[] = [
  // Education Category and Items
  { 
    id: 1, 
    title: 'Education', 
    color: '#0078d7', 
    icon: React.createElement(FaGraduationCap), 
    colSpan: 2,
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      textAlign: 'center', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100px',
      width: '100%'
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Education'),
      React.createElement('p', { style: { margin: '0', textAlign: 'center' } }, 'Learned with books. Not bots.')
    )
  },
  { 
    id: 2, 
    title: "Bachelor's", 
    color: '#0078d7', 
    icon: React.createElement(FaBook),
    isExpandable: true,
    isModalExpandable: true,
    expandedColSpan: 4,
    expandedRowSpan: 4,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', null, "Bachelor's in Computer Science & Engineering"),
      React.createElement('p', null, 'GITAM University, Visakhapatnam, India'),
      React.createElement('p', null, '2019-2023'),
      React.createElement('p', null, 'GPA: 3.58/4.0')
    )
  },
  { 
    id: 3, 
    title: "Master's", 
    color: '#0078d7', 
    icon: React.createElement(FaBook),
    isExpandable: true,
    isModalExpandable: true,
    expandedColSpan: 4,
    expandedRowSpan: 4,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', null, "Master's in Artificial Intelligence"),
      React.createElement('p', null, 'Yeshiva University, Manhattan, NYC, NY'),
      React.createElement('p', null, '2024-2026'),
      React.createElement('p', null, 'GPA: 3.7/4.0')
    )
  },

  // Experience Category and Items
  { 
    id: 4, 
    title: 'Experience', 
    color: '#703cb0', 
    icon: React.createElement(FaBriefcase), 
    colSpan: 2,
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      textAlign: 'center', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100px',
      width: '100%'
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Experience'),
      React.createElement('p', { style: { margin: '0', textAlign: 'center' } }, "Vibe coding doesn't work here!")
    )
  },
  { 
    id: 5, 
    title: 'Experience 1', 
    color: '#703cb0', 
    icon: React.createElement(FaBuilding),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Machine Learning Intern'),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '10px',
          flexWrap: 'wrap'
        }
      },
        React.createElement('span', null,
          React.createElement('a', { href: 'https://www.1stop.ai/', target: '_blank', rel: 'noopener noreferrer', style: { color: '#703cb0', textDecoration: 'underline' } }, '1stop-ai')
        ),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Remote'),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'May 2022 - Aug 2022'),
        React.createElement('span', null, ','),
        React.createElement('span', { style: { fontWeight: 600 } }, 'Internship')
      ),
      React.createElement('div', { style: { margin: '0 0 10px 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Responsibilities & Achievements:'),
        React.createElement('ul', { style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px' } },
          React.createElement('li', null, "Developed Hate Speech Detection model using Kaggle's 'Dynamically Generated Hate Speech Dataset' which has 40k data points, utilizing 80% of the data for training."),
          React.createElement('li', null, 'Employed algorithms such as small BERT, LSTM, Decision Trees, Naive Bayes, and Logistic Regression, where small BERT model demonstrated superior testing accuracy compared to other models.'),
          React.createElement('li', null, 'Additionally, enhanced a restaurant review classification dataset by preprocessing with NLP techniques and NLTK, reaching 97% classification accuracy via the small BERT model.')
        )
      ),
      React.createElement('div', { style: { margin: '10px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies Used:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'BERT'),
          React.createElement('li', null, 'LSTM'),
          React.createElement('li', null, 'Decision Trees'),
          React.createElement('li', null, 'Naive Bayes'),
          React.createElement('li', null, 'Logistic Regression'),
          React.createElement('li', null, 'NLP'),
          React.createElement('li', null, 'NLTK'),
          React.createElement('li', null, 'Python'),
          React.createElement('li', null, 'Machine Learning')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'BERT, LSTM, Decision Trees, Naive Bayes, Logistic Regression, NLP, NLTK, Python, Machine Learning')
      )
    )
  },
  { 
    id: 6, 
    title: 'Experience 2', 
    color: '#703cb0', 
    icon: React.createElement(FaBuilding),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Peer Reviewer'),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '10px',
          flexWrap: 'wrap'
        }
      },
        React.createElement('span', null,
          React.createElement('a', { href: 'https://group.springernature.com/gp/group', target: '_blank', rel: 'noopener noreferrer', style: { color: '#703cb0', textDecoration: 'underline' } }, 'Springer Nature in India')
        ),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Remote'),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'May 2023 - July 2023'),
        React.createElement('span', null, ','),
        React.createElement('span', { style: { fontWeight: 600 } }, 'Volunteer')
      ),
      React.createElement('div', { style: { margin: '0 0 10px 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Responsibilities & Achievements:'),
        React.createElement('ul', { style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px' } },
          React.createElement('li', null, 'Reviewed and provided constructive feedback on research papers for 3rd International Conference on Machine Learning and Big Data Analytics (ICMLBDA2023) conference hosted by National Institute of Technology(NIT), Arunachal Pradesh, India.'),
          React.createElement('li', null, 'Contributed to maintaining high academic standards by assessing submissions for publication.'),
          React.createElement('li', null, 'Enhanced understanding of the peer review process and emerging research in AI.')
        )
      )
    )
  },
  { 
    id: 7, 
    title: 'Experience 3', 
    color: '#703cb0', 
    icon: React.createElement(FaBuilding),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'AI/ML Intern'),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '10px',
          flexWrap: 'wrap'
        }
      },
        React.createElement('span', null,
          React.createElement('a', { href: 'https://www.kreativeintegrations.com/', target: '_blank', rel: 'noopener noreferrer', style: { color: '#703cb0', textDecoration: 'underline' } }, 'KReative Integrations LLC')
        ),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Remote'),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Jun 2024 - Dec 2024'),
        React.createElement('span', null, ','),
        React.createElement('span', { style: { fontWeight: 600 } }, 'Internship')
      ),
      React.createElement('p', { style: { margin: '0 0 10px 0', textAlign: 'justify' } }, 'Built two RAG-based medical chatbots: one using OpenAI Assistant API and another with LLaMA2-7B, Pinecone, and Gale Encyclopedia for domain-specific reasoning.'),
      React.createElement('div', { style: { margin: '0 0 10px 0', textAlign: 'justify' } },
        React.createElement('strong', null, 'Responsibilities & Achievements:'),
        React.createElement('ul', { style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'justify', maxWidth: '100%' } },
          React.createElement('li', null, 'Created an medical chatbot utilizing the RAG framework and the LLaMA2 model for natural language processing. The LLaMA Index was used for efficient query retrieval, while Pinecone was used for vector storage and retrieval. I used the Gale series of medical books as the knowledge base and deployed the chatbot using Gradio.'),
          React.createElement('li', null, 'Improved the chatbot by using the OpenAI Assistant API and created a custom function that allows the user to ask data-driven queries. Built and implemented a comprehensive end-to-end solution with Flask as the frontend, resulting in a fully working, robust medical chatbot.'),
          React.createElement('li', null, 'Designed database and metadata management with SQLite; optimized retrieval pipelines for both models.'),
          React.createElement('li', null, 'Contributed to system architecture design, UI/UX planning for web/mobile apps, and conducted technical interviews for full-stack and AI roles.'),
          React.createElement('li', null, 'Edited marketing videos and played a key role in developing the MVP across tech, design, and deployment stages.'),
          React.createElement('li', null, 'I got a chance to enhance my skills and keep a learning approach and explore other dimensions like marketing and talent acquisition where I was involved with a team of 5 members contributing to this startup which sums up my experience.')
        )
      ),
      React.createElement('div', { style: { margin: '10px 0 0 0', textAlign: 'justify' } },
        React.createElement('strong', null, 'Tools & Technologies Used:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'justify', maxWidth: '100%', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'RAG'),
          React.createElement('li', null, 'LangChain'),
          React.createElement('li', null, 'LlamaIndex'),
          React.createElement('li', null, 'Azure AI Studio'),
          React.createElement('li', null, 'AI Agents'),
          React.createElement('li', null, 'Assistant API OpenAI'),
          React.createElement('li', null, 'Chat Completion API'),
          React.createElement('li', null, 'Flask'),
          React.createElement('li', null, 'Gradio'),
          React.createElement('li', null, 'Pinecone'),
          React.createElement('li', null, 'ChromaDB'),
          React.createElement('li', null, 'HTML'),
          React.createElement('li', null, 'CSS'),
          React.createElement('li', null, 'JS')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'justify', maxWidth: '100%' } }, 'RAG, LangChain, LlamaIndex, Azure AI Studio, AI Agents, Assistant API OpenAI, Chat Completion API, Flask, Gradio, Pinecone, ChromaDB, HTML, CSS, JS')
      )
    )
  },
  { 
    id: 30, 
    title: 'Experience 4', 
    color: '#703cb0', 
    icon: React.createElement(FaBuilding),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Graduate Teaching Assistant'),
      React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '10px',
          flexWrap: 'wrap'
        }
      },
        React.createElement('span', null,
          React.createElement('a', { href: 'https://www.yu.edu/katz', target: '_blank', rel: 'noopener noreferrer', style: { color: '#703cb0', textDecoration: 'underline' } }, 'Yeshiva University')
        ),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Lexington Av, Manhattan, NYC, NY'),
        React.createElement('span', null, ','),
        React.createElement('span', null, 'Jan 2025 - May 2025'),
        React.createElement('span', null, ','),
        React.createElement('span', { style: { fontWeight: 600 } }, 'Part-Time')
      ),
      React.createElement('p', { style: { margin: '0 0 10px 0', textAlign: 'left' } }, 'Teaching assistant for the Neural Networks & Deep Learning course.'),
      React.createElement('div', { style: { margin: '0 0 10px 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Responsibilities & Achievements:'),
        React.createElement('ul', { style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px' } },
          React.createElement('li', null, 'Conducted instructional sessions and tutorials to supplement core course lectures, ensuring students gained a strong foundational understanding of neural networks and deep learning concepts.'),
          React.createElement('li', null, 'Evaluated and graded student assignment submissions, providing constructive feedback to support learning and improvement.'),
          React.createElement('li', null, 'Offered individualized guidance and support by addressing students\' queries and clarifying complex topics, fostering an engaging and effective learning environment.')
        )
      ),
      React.createElement('div', { style: { margin: '10px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Technologies Used:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Neural Networks'),
          React.createElement('li', null, 'Deep Learning'),
          React.createElement('li', null, 'Python'),
          React.createElement('li', null, 'PyTorch')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Neural Networks, Deep Learning, Python, PyTorch')
      )
      )
  },

  // Projects Category and Items
  { 
    id: 8, 
    title: 'Projects', 
    color: '#107c10', 
    icon: React.createElement(FaCode), 
    colSpan: 2,
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      textAlign: 'center', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100px',
      width: '100%'
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Projects'),
      React.createElement('p', { style: { margin: '0', textAlign: 'center' } }, 'Powered by curiosity and a bit of LLMs.')
    )
  },
  { 
    id: 9, 
    title: 'Project 1', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Multi Agentic AI System'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/HProject.png', 
          alt: 'Multi Agentic AI System Architecture', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Developed a Python RESTful API for a multi-agent conversational AI system with RAG and a custom CRM. The platform enables chat with multiple AI agents, handles document uploads in various formats, and offers real-time user info extraction, session and analytics management, and conversation history retrieval. A user-friendly frontend was also built, enabling flexible, scalable, and enterprise-ready interactions.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'SQLite'),
          React.createElement('li', null, 'ChromaDB'),
          React.createElement('li', null, 'Python'),
          React.createElement('li', null, 'JavaScript'),
          React.createElement('li', null, 'FastAPI'),
          React.createElement('li', null, 'RAG')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'SQLite, ChromaDB, Python, JavaScript, FastAPI, RAG')
      )
    )
  },
  { 
    id: 10, 
    title: 'Project 2', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Dynamic Ad Recommender Chatbot'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/project1.png', 
          alt: 'Dynamic Ad Recommender Chatbot', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Python chatbot utilizing single-shot learning and prompt engineering with GPT-4o-mini to track chat context, assess topic coherence, and recommend products via SerpApi. Integrates seamless, real-time recommendations and thread-safe design.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Python'),
          React.createElement('li', null, 'OpenAI API'),
          React.createElement('li', null, 'SerpApi'),
          React.createElement('li', null, 'Prompt Engineering')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Python, OpenAI API, SerpApi, Prompt Engineering')
      )
    )
  },
  { 
    id: 11, 
    title: 'Project 3', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Low-Rank Fine-Tuning of TinyLLaMA and Phi-2 for Persona-Driven Causal Language Modeling'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/project2.png', 
          alt: 'Low-Rank Fine-Tuning of TinyLLaMA and Phi-2', 
          style: { 
            width: '282px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Developed a lightweight Tony Stark chatbot by fine-tuning TinyLLaMA and Phi-2 models using LoRA and 4-bit quantization. Leveraged Marvel script data to train for persona-driven, context-aware dialogue, optimizing for efficient deployment on limited hardware.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Python'),
          React.createElement('li', null, 'LoRA'),
          React.createElement('li', null, 'Quantization'),
          React.createElement('li', null, 'Hugging Face')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Python, LoRA, Quantization, Hugging Face')
      )
    )
  },
  { 
    id: 12, 
    title: 'Project 4', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Diffusion-Driven Image Generation on 160-Class Multi-Modal Medical Images'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project3.png', 
          alt: 'Diffusion-Driven Image Generation', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Trained a Diffusion Model (DDPM) on a custom 14 GB multi-modal medical dataset spanning over 160 disease classes. Prepared data in COCO format, enabling efficient image-label pairing. Achieved robust image generation and representation across diverse medical conditions.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Diffusion Models'),
          React.createElement('li', null, 'Generative AI'),
          React.createElement('li', null, 'Medical Imaging'),
          React.createElement('li', null, 'PyTorch')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Diffusion Models, Generative AI, Medical Imaging, PyTorch')
      )
    )
  },
  { 
    id: 13, 
    title: 'Project 5', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'House Price Prediction'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project4.jpg', 
          alt: 'House Price Prediction', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Diligently developed a house price prediction model using the Kaggle dataset, applying meticulous handling of missing values (NAs). Leveraged advanced feature engineering, scaling, and dimensionality reduction for precise property value regression analysis.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'pandas'),
          React.createElement('li', null, 'numpy'),
          React.createElement('li', null, 'matplotlib'),
          React.createElement('li', null, 'seaborn'),
          React.createElement('li', null, 'scikit-learn'),
          React.createElement('li', null, 'xgboost')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'pandas, numpy, matplotlib, seaborn, scikit-learn, xgboost')
      )
    )
  },
  { 
    id: 14, 
    title: 'Project 6', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Canine Cardiomegaly Classification & Key Point Localization for Vertebral Heart Score Prediction in Dogs'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project5.png', 
          alt: 'Canine Cardiomegaly Classification', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Developed advanced deep learning models for canine cardiomegaly detection and VHS prediction from X-rays. A custom CNN-BiLSTM model delivered performance comparable to the pre-trained VGG16, while the HRNet-W32-based regressor for VHS prediction exceeded VGG16\'s results by accurately localizing anatomical keypoints.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'PyTorch'),
          React.createElement('li', null, 'CV'),
          React.createElement('li', null, 'Medical Imaging')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'PyTorch, CV, Medical Imaging')
      )
    )
  },
  { 
    id: 15, 
    title: 'Project 7', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Noise Isolation in Bird Sound Images Using Atrous Convolutions with Multi-Scale Contextual Learning'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project6.png', 
          alt: 'Noise Isolation in Bird Sound Images', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Designed AtrousSegNet, a custom encoder-decoder CNN using atrous convolutions and multi-scale contextual learning, to segment noise regions in bird sound spectrogram images. The model performed competitively with leading approaches like DeepLabV3, effectively isolating noise while remaining computationally efficient.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'PyTorch'),
          React.createElement('li', null, 'CV'),
          React.createElement('li', null, 'Segmentation')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'PyTorch, CV, Segmentation')
      )
    )
  },
  { 
    id: 16, 
    title: 'Project 8', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Explainable AI for Retinal Disease Detection'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project7.png', 
          alt: 'Explainable AI for Retinal Disease Detection', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'This project compares deep learning models for retinal disease detection from OCT scans. A custom CNN and a pretrained DenseNet121 were trained to classify eight retinal conditions, with DenseNet121 outperforming the custom model. Grad-CAM visualizations provided insight into model decision-making for greater explainability.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'PyTorch'),
          React.createElement('li', null, 'Grad-CAM'),
          React.createElement('li', null, 'OCT Medical Imaging')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'PyTorch, Grad-CAM, OCT Medical Imaging')
      )
    )
  },
  { 
    id: 17, 
    title: 'Project 9', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Custom Implementation of K-Means Clustering Algorithm'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project8.png', 
          alt: 'Custom Implementation of K-Means Clustering', 
          style: { 
            width: '282px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Converted a rainbow image into a pixel dataset with coordinates and RGB values. Cleaned and visualized the data, then clustered pixels using both scikit-learn and a custom KMeans algorithm built from scratch to reveal patterns and reduce noise in the image.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Unsupervised Learning'),
          React.createElement('li', null, 'scikit-learn'),
          React.createElement('li', null, 'PyTorch'),
          React.createElement('li', null, 'Clustering'),
          React.createElement('li', null, 'Data Analysis')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Unsupervised Learning, scikit-learn, PyTorch, Clustering, Data Analysis')
      )
    )
  },
  { 
    id: 18, 
    title: 'Project 10', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Targeted Marketing'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project9.png', 
          alt: 'Targeted Marketing', 
          style: { 
            width: '282px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Analyzed SMARTMARKET\'s rotational campaign system using a dataset of 260k records. Developed a neural network achieving 90% accuracy across train, test, and validation sets, and leveraged model predictions to select the top 25% of subscribers, boosting campaign response rates by 65%. The deployed model assigns optimal campaigns to users, maximizing engagement and increasing response rates.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Campaign Optimization'),
          React.createElement('li', null, 'Marketing Analytics'),
          React.createElement('li', null, 'DL')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Campaign Optimization, Marketing Analytics, DL')
      )
    )
  },
  { 
    id: 19, 
    title: 'Project 11', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Understanding Mental Health Through Socioeconomic-Demographic, Lifestyle and Health Factors: An NHANES Perspective'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project10.png', 
          alt: 'Understanding Mental Health Through NHANES', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'This project explores how lifestyle, health, socioeconomic, and demographic factors relate to mental health using NHANES data. Descriptive statistics and generalized linear models reveal key associations by age and gender, informing public health policy and well-being initiatives.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'R'),
          React.createElement('li', null, 'Data Analysis')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'R, Data Analysis')
      )
    )
  },
  { 
    id: 20, 
    title: 'Project 12', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Crop Type Prediction using Supervised, Unsupervised Learning, and Neural Networks'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project11.png', 
          alt: 'Crop Type Prediction', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'This project applies machine learning and deep learning to predict crop types from soil and environmental features, supporting agricultural decision-making. A variety of supervised, unsupervised, and neural network models were trained and fine-tuned using the Kaggle Soil Measures Dataset, providing insights into model performance and interpretability for crop classification.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'sklearn'),
          React.createElement('li', null, 'TensorFlow'),
          React.createElement('li', null, 'Keras')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'sklearn, TensorFlow, Keras')
      )
    )
  },
  { 
    id: 21, 
    title: 'Project 13', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Time Series Air Quality Prediction with Neural Networks'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project12.png', 
          alt: 'Time Series Air Quality Prediction', 
          style: { 
            width: '272px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Developed neural networks for time series air quality prediction using the UCI Air Quality dataset. Achieved 92.6% test accuracy for CO threshold classification and built a regression model for NOx estimation (test RMSE: 58.5, MAE: 38.5). Used TensorFlow and advanced preprocessing.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'TensorFlow'),
          React.createElement('li', null, 'Python')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '50px' } }, 'TensorFlow, Python')
      )
    )
  },
  { 
    id: 22, 
    title: 'Project 14', 
    color: '#107c10', 
    icon: React.createElement(FaLaptopCode), 
    isExpandable: true, 
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Wireless Sound Control'),
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '20px' } },
        React.createElement('img', { 
          src: '/Images/Project13.png', 
          alt: 'Wireless Sound Control', 
          style: { 
            width: '282px', 
            height: '192px', 
            borderRadius: '8px',
            border: '1px solid #333'
          } 
        })
      ),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'justify' } }, 'Implements a real-time hand gesture-based system to control computer volume wirelessly using a webcam. Utilizes OpenCV, MediaPipe, and pycaw to detect hand landmarks and adjust audio levels based on finger positions, enabling intuitive, touch-free sound control.'),
      React.createElement('div', { style: { margin: '15px 0 0 0', textAlign: 'left' } },
        React.createElement('strong', null, 'Tools & Technologies:'),
        React.createElement('ul', { className: 'tools-list-desktop', style: { padding: '0 0 0 18px', margin: '8px 0', textAlign: 'left', maxWidth: '500px', columnCount: 2, columnGap: '30px' } },
          React.createElement('li', null, 'Gesture Control'),
          React.createElement('li', null, 'Computer Vision'),
          React.createElement('li', null, 'Python')
        ),
        React.createElement('p', { className: 'tools-list-mobile', style: { margin: '8px 0', textAlign: 'left', maxWidth: '500px' } }, 'Gesture Control, Computer Vision, Python')
      )
    )
  },

  // New Publications Tile
  { 
    id: 20.5, // Using a decimal for easy insertion, can be re-indexed later if needed
    title: 'Publications', 
    color: '#d13438', // Changed to match ResearchGate
    icon: React.createElement(FaBookOpen),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '15px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'My Publications'),
      React.createElement('ul', { style: { margin: '0 auto', padding: '0', maxWidth: '600px', textAlign: 'left', listStyleType: 'none' } },
        React.createElement('li', { style: { marginBottom: '20px', padding: '15px', border: '1px solid #333', borderRadius: '8px' } },
          React.createElement('h4', { style: { margin: '0 0 8px 0', color: '#d13438' } }, 'Session-Based News Recommendation System'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, 'V. Vemani, Vaibhav Chemboli, Pusarla Sindhu'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, '2023, Springer Indexed'),
          React.createElement('p', { style: { margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' } }, 'Advances in Machine Learning and Big Data Analytics I (ICMLBDA 2023)'),
          React.createElement('p', { style: { margin: '0 0 8px 0', textAlign: 'justify', fontSize: '14px' } }, 'Developed a session-aware news recommendation system utilizing XLNet with causal language modeling and attention-based sequence processing. The system was trained and evaluated on the G1 news dataset, achieving a Recall at 20 of 0.34 and an NDCG at 20 of 0.16. The approach specifically modeled temporal dynamics and short-term user behavior to deliver highly relevant recommendations in real time.'),
          React.createElement('a', { href: 'https://link.springer.com/chapter/10.1007/978-3-031-51338-1_28', target: '_blank', rel: 'noopener noreferrer', style: { color: '#d13438', textDecoration: 'underline', fontSize: '14px' } }, 'View Publication')
        ),
        React.createElement('li', { style: { marginBottom: '20px', padding: '15px', border: '1px solid #333', borderRadius: '8px' } },
          React.createElement('h4', { style: { margin: '0 0 8px 0', color: '#d13438' } }, 'Conditional DCGAN for Targeted Generation of MNIST Handwritten Digits'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, 'Samuel Vasamsetti, Vaibhav Chemboli, G. S. S. Shreyas, Srikanth Thota'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, '2023, Springer Indexed'),
          React.createElement('p', { style: { margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' } }, 'Accelerating Discoveries in Data Science and Artificial Intelligence I (ICDSAI 2023)'),
          React.createElement('p', { style: { margin: '0 0 8px 0', textAlign: 'justify', fontSize: '14px' } }, 'Constructed a cDCGAN model to generate high-quality handwritten digit images conditioned on specific labels using the MNIST dataset. Conducted extensive hyperparameter tuning (e.g., epochs, batch size, optimizers, activation functions) and achieved a discriminator accuracy of 94%, outperforming several other GAN models.'),
          React.createElement('a', { href: 'https://link.springer.com/chapter/10.1007/978-3-031-51167-7_23', target: '_blank', rel: 'noopener noreferrer', style: { color: '#d13438', textDecoration: 'underline', fontSize: '14px' } }, 'View Publication')
        ),
        React.createElement('li', { style: { marginBottom: '20px', padding: '15px', border: '1px solid #333', borderRadius: '8px' } },
          React.createElement('h4', { style: { margin: '0 0 8px 0', color: '#d13438' } }, 'Comparative Performance Analysis of Deep Learning Models for Lung Disease Prediction Using Chest X-Ray Images'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, 'Samuel Vasamsetti, Vaibhav Chemboli, G.S.S. Shreyas, Srikanth Thota'),
          React.createElement('p', { style: { margin: '0 0 5px 0', fontSize: '14px' } }, '2023, IEEE Indexed'),
          React.createElement('p', { style: { margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' } }, '2023 International Conference on Inventive Computation Technologies (ICICT)'),
          React.createElement('p', { style: { margin: '0 0 8px 0', textAlign: 'justify', fontSize: '14px' } }, 'Created a custom CNN-BiLSTM model to classify chest X-ray images into four categories: COVID-19, Pneumonia, Tuberculosis, and Normal. Outperformed several pre-trained models including EfficientNetB7 and VGG16, achieving 97% accuracy with high precision and recall across all classes. Integrated Grad-CAM for model explainability and clinical validation.'),
          React.createElement('a', { href: 'https://ieeexplore.ieee.org/document/10134132', target: '_blank', rel: 'noopener noreferrer', style: { color: '#d13438', textDecoration: 'underline', fontSize: '14px' } }, 'View Publication')
        )
      )
    )
  },

  // Other individual links
  { 
    id: 23, 
    title: 'LinkedIn', 
    color: '#0078d7', 
    icon: React.createElement(FaLinkedin),
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', null, 'Connect with me on LinkedIn'),
      React.createElement('p', null, 'View my professional profile and experience'),
      React.createElement('a', {
        href: 'https://www.linkedin.com/in/vaibhav-chemboli/',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block'
        }
      }, 'Open LinkedIn Profile')
    )
  },
  { 
    id: 24, 
    title: 'GitHub', 
    color: '#1a1a1a', 
    icon: React.createElement(FaGithub),
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      padding: '20px', 
      border: '1px solid #333', 
      borderRadius: '8px', 
      maxWidth: '90%',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center' 
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Check out my GitHub'),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Explore my projects and contributions'),
      React.createElement('a', {
        href: 'https://github.com/VaibhavChemboli116',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block',
          textAlign: 'center'
        }
      }, 'Open GitHub Profile')
    )
  },
  { 
    id: 25, 
    title: 'ResearchGate', 
    color: '#d13438', 
    icon: React.createElement(FaFlask),
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      padding: 20, 
      border: '1px solid #333', 
      borderRadius: 8, 
      maxWidth: '90%',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Visit my ResearchGate'),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'View my research publications and work'),
      React.createElement('a', {
        href: 'https://www.researchgate.net/profile/Vaibhav-Chemboli?ev=hdr_xprf',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block',
          textAlign: 'center'
        }
      }, 'Open ResearchGate Profile')
    )
  },
  {
    id: 26,
    title: 'Honors & Awards',
    color: '#f7630c',
    icon: React.createElement(FaAward),
    isExpandable: true,
    isModalExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', { style: { margin: '0 0 10px 0' } }, 'Best Student Paper Award'),
      React.createElement('p', { style: { margin: '0 0 5px 0' } }, 'Issued by Lendi Institute of Engineering & Technology, India'),
      React.createElement('p', { style: { margin: '0 0 15px 0' } }, 'August 2023'),
      React.createElement('p', { style: { textAlign: 'justify' } }, 'I was delighted to be awarded the Best Student Paper Award at the 2nd International Conference on,'),
      React.createElement('p', { style: { textAlign: 'justify' } }, 'Data Science and Artificial Intelligence for my research work,'),
      React.createElement('p', { style: { textAlign: 'justify' } }, '"Conditional DCGAN for Targeted Generation of MNIST Handwritten Digits."'),
      React.createElement('div', { style: { textAlign: 'left', marginTop: '15px' } },
        React.createElement('a', {
          href: 'https://www.linkedin.com/in/vaibhav-chemboli/overlay/1729728787073/single-media-viewer/?profileId=ACoAADSZewkBD2GtJHEWfORmvgNO-cUen403Qk0',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            color: '#0078d7',
            textDecoration: 'underline',
            display: 'inline-block'
          }
        },
          'View Award Certificate'
        )
      )
    )
  },
  { 
    id: 27, 
    title: 'Courses', 
    color: '#0078d7', 
    icon: React.createElement(FaChalkboardTeacher),
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '100%' } },
      React.createElement('h3', null, 'Courses'),
      React.createElement('p', null, 'View the courses that I have done through my Bachelors and Masters'),
      React.createElement('a', {
        href: 'https://www.linkedin.com/in/vaibhav-chemboli/details/courses/',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block'
        }
      }, 'View Courses')
    )
  },
  { 
    id: 28, 
    title: 'Certifications', 
    color: '#703cb0', 
    icon: React.createElement(FaCertificate),
    isExpandable: true,
    isModalExpandable: false,
    expandedContent: React.createElement('div', { style: { 
      padding: '20px', 
      border: '1px solid #333', 
      borderRadius: '8px', 
      maxWidth: '90%',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center' 
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Certifications'),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'View my licenses and certifications'),
      React.createElement('a', {
        href: 'https://www.linkedin.com/in/vaibhav-chemboli/details/certifications/',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block',
          textAlign: 'center'
        }
      }, 'View Certifications')
    )
  },
  { 
    id: 29, 
    title: 'Random Facts', 
    color: '#ffb900', 
    icon: React.createElement(FaLightbulb),
    isExpandable: true,
    isModalExpandable: false,
    expandedContent: null // Dynamic content handled in StartScreen.tsx
  },
  { 
    id: 31, 
    title: 'Another Portfolio', 
    color: '#0078d7', 
    icon: React.createElement(FaBookOpen),
    isExpandable: true,
    expandedContent: React.createElement('div', { style: { 
      padding: '20px', 
      border: '1px solid #333', 
      borderRadius: '8px', 
      maxWidth: '90%',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    } },
      React.createElement('h3', { style: { margin: '0 0 10px 0', textAlign: 'center' } }, 'Alternative Portfolio'),
      React.createElement('p', { style: { margin: '0 0 15px 0', textAlign: 'center' } }, 'Here is a link to my non-creative portfolio'),
      React.createElement('a', {
        href: 'https://vaibhavchemboli116.github.io/VC_Portfolio/',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: {
          color: 'white',
          textDecoration: 'underline',
          marginTop: '10px',
          display: 'inline-block',
          textAlign: 'center'
        }
      }, 'View Alternative Portfolio')
    )
  },
];