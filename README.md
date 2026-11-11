# Motion Geomatric - Logistics & Supply Chain Solutions

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

**Motion Geomatric** is a modern, responsive, multi-page web platform designed for international shipping, multi-modal freight forwarding, and end-to-end supply chain logistics. Engineered with clean web standards, engaging animations, and multimedia integrations, the platform presents a professional digital presence for global logistics management, quote requests, real-time shipment tracking, and customer engagement.

---

## 📌 Table of Contents

- [About Motion Geomatric](#-about-motion-geomatric)
- [Key Features](#-key-features)
- [Services Portfolio](#-services-portfolio)
- [Contact Details & Alternative Channels](#-contact-details--alternative-channels)
- [Project Structure](#-project-structure)
- [Technologies & Libraries](#-technologies--libraries)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Page Overview](#-page-overview)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)

---

## 🏢 About Motion Geomatric

Founded in Mumbai, India, **Motion Geomatric** provides reliable, timely, and cost-effective shipping and freight services across worldwide trade routes. With over a decade of industry expertise, Motion Geomatric partners with leading global container lines and cargo haulers, delivering customized supply chain solutions for commercial exporters, importers, and enterprises.

---

## 🚀 Key Features

- **Hero Multimedia Experience**: Seamless transition from an autoplaying background video to an automated image slideshow upon playback completion.
- **Dedicated Service Verticals**: In-depth pages for air, ocean, and overland freight, customs clearance, warehousing, and project cargo.
- **Motion Eye Watch Tracking**: Real-time status monitoring allowing customers to look up cargo via Job Number, Bill of Lading (B/L), Container Number, or Airway Bill (AWB).
- **Online Quote & Contact Form**: Web3Forms-integrated contact page for instant quotations and customer inquiries.
- **Primary & Alternative Contact Channels**: Readily available multi-channel contact options (primary phone, alternative phone, primary email, alternative support email).
- **Authentication Pages**: User onboarding templates for Login, Registration with field validation, and Password Recovery.
- **Managing Director's Address**: Dedicated profile and leadership message highlighting company heritage and strategic vision.
- **Global Accessibility**: Integrated Google Translate toolbar for multi-lingual translation.
- **Modern Responsive Design**: Mobile-first navigation bar with collapsible drawer, CSS Grid and Flexbox layouts, and optimized typography.

---

## 📦 Services Portfolio

| Service | Page | Description |
| :--- | :--- | :--- |
| **Ocean Freight** | [`seafreight.html`](seafreight.html) | Dependable FCL & LCL sea freight solutions partnering with major international shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd, etc.). |
| **Road Transport** | [`roadtransport.html`](roadtransport.html) | Safe, schedule-driven interstate road transportation with active tracking and hauler coordination. |
| **Air Freight** | [`airfreight.html`](airfreight.html) | Rapid air cargo transportation with transit time analysis, port cooling management, and ODC freight support. |
| **Custom Clearance** | [`customclearance.html`](customclearance.html) | Harmonized System (HS) code classification, consular legalization, and liaison with regulatory authorities (ADC, FSSAI, Spice Board, Health, Phyto). |
| **Special Equipment & ODC** | [`specialequipment.html`](specialequipment.html) | Specialized handling for Over-Dimensional Cargo (ODC), flat racks, open tops, and heavy machinery. |
| **Motion Eye Watch** | [`syseyewatch.html`](syseyewatch.html) | 24/7 cargo monitoring ensuring security, punctuality, and milestone transparency. |
| **Warehousing** | [`ware.html`](ware.html) | Secure warehouse facilities equipped with modern inventory management and rapid dispatch systems. |
| **Door-to-Door Delivery** | [`dtd.html`](dtd.html) | Comprehensive end-to-end pickup from origin doorstep to destination handoff. |
| **Allied Services** | [`allieds.html`](allieds.html) | Supplementary supply chain assistance, packaging, inspection, and cargo consultation. |

---

## 📞 Contact Details & Alternative Channels

Motion Geomatric maintains multiple communication channels to ensure uninterrupted assistance for global clients:

| Channel | Primary Detail | Alternative / Support Detail |
| :--- | :--- | :--- |
| **Telephone** | `+91 22 2757 2565` | `+91 98200 12345` *(24/7 Helpline)* |
| **Email** | [`info@motiongeomatric.com`](mailto:info@motiongeomatric.com) | [`support@motiongeomatric.com`](mailto:support@motiongeomatric.com) |
| **Toll Free / Header** | `+91 22 2757 2565` | `Alt: +91 98200 12345` |
| **Corporate Office** | **Motion Geomatric Hub**, Tower 2, 2nd Floor, Commercial Complex, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra - 400614, India. |

---

## 📂 Project Structure

```plaintext
Motion-Geomatric/
│
├── index.html                 # Main Motion Geomatric homepage
├── contact.html               # Contact & quote request form
├── tracking.html              # Cargo & container tracking portal
│
├── airfreight.html            # Air freight service page
├── seafreight.html            # Ocean freight service page
├── roadtransport.html         # Road transport service page
├── customclearance.html       # Customs documentation & clearance
├── specialequipment.html      # Special equipments & ODC cargo
├── syseyewatch.html           # Motion Eye Watch 24/7 monitoring
├── ware.html                  # Warehousing solutions
├── dtd.html                   # Door-to-door logistics
├── allieds.html               # Allied logistics services
├── speech.html                # Managing Director's address
│
├── login.html                 # User authentication portal
├── registration.html          # New account registration portal
├── forgot.html                # Password recovery portal
│
├── Code_Document.txt          # Technical code architecture documentation
├── README.md                  # Comprehensive project documentation
├── LICENSE                    # MIT License
├── favicon.ico                # Website icon
│
└── assets/
    ├── css/
    │   ├── style.css          # Homepage styling (hero, services, features, footer)
    │   ├── style2.css         # Styling for all service & tracking pages
    │   ├── style3.css         # Auth styling (login, register, forgot)
    │   ├── style5.css         # Contact form styling with glassmorphism
    │   └── speechstyle.css    # Managing Director's page styling
    │
    ├── js/
    │   ├── script.js          # Homepage navigation, video transition, image slider
    │   ├── script2.js         # Navigation toggle & shipment tracking dropdown logic
    │   ├── script3.js         # Show / hide password toggle logic
    │   └── script4.js         # Client-side form input validation logic
    │
    └── images/                # Banners, service icons, feature graphics, hero video (.mp4)
```

---

## 🛠️ Technologies & Libraries

- **HTML5**: Semantic web architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`).
- **Tailwind CSS**: Modern utility-first styling with custom brand palettes, responsive design, and glassmorphic navigation.
- **CSS3**: Custom CSS variables, Flexbox, CSS Grid, glassmorphism filters, keyframe animations, and media queries.
- **Vanilla JavaScript (ES6+)**: Document Object Model manipulation, event listeners, intervals for slide rotation, and custom form validation.
- **Icons**:
  - [Ionicons](https://ionic.io/ionicons) (`ionicons.esm.js`, `ionicons.js`)
  - [Remix Icon](https://remixicon.com/) (CDN)
- **Typography**: Google Fonts ([Oswald](https://fonts.google.com/specimen/Oswald), [Rubik](https://fonts.google.com/specimen/Rubik), [Caprasimo](https://fonts.google.com/specimen/Caprasimo), [Poppins](https://fonts.google.com/specimen/Poppins)).
- **Form Handling**: [Web3Forms API](https://web3forms.com/) for serverless form submissions directly to email.
- **Localization**: Google Translate API element.

---

## 💻 Getting Started & Local Setup

### Prerequisites
You only need a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari).

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PATILPARTH1500/LOGISTICS-WEBSITE.git
   cd LOGISTICS-WEBSITE
   ```

2. **Open in Browser**:
   - Double-click `index.html` to open it in your default web browser, or
   - Use a lightweight local development server:
     - **VS Code Live Server**: Right-click `index.html` and click **"Open with Live Server"**.
     - **Python 3**:
       ```bash
       python -m http.server 8000
       ```
       Then navigate to `http://localhost:8000` in your browser.
     - **Node.js (npx serve)**:
       ```bash
       npx serve .
       ```

---

## 📄 Page Overview

1. **Homepage (`index.html`)**: The central hub highlighting Motion Geomatric's core capabilities, statistics, service overview, features, client feedback, and MD quote.
2. **Contact & Quote (`contact.html`)**: Glassmorphism contact form with fields for name, email, contact number, and message, alongside official address, phone, and alternative contact channels.
3. **Tracking (`tracking.html`)**: Interactive shipment lookup supporting B/L, Container, Airway Bill, and Tracking Numbers.
4. **Service Pages**: Dedicated deep-dives covering operational procedures, carrier partnerships, regulatory compliance, and cargo security.
5. **Authentication Suite (`login.html`, `registration.html`, `forgot.html`)**: Clean, responsive user account portal with password reveal toggles and client-side validation.

---

## 🔮 Future Roadmap

- [ ] **Full Backend Integration**: Node.js / Express or Python backend for dynamic database storage.
- [ ] **Live Carrier API Tracking**: Direct integration with shipping line APIs for live GPS container tracking.
- [ ] **Instant Freight Rate Calculator**: Dynamic cost estimator based on origin, destination, container type, and weight.
- [ ] **Customer Portal**: Authenticated dashboard allowing clients to view shipment histories, download invoices, and manage customs documentation.

---

## ⚖️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

---

*© 2025 Motion Geomatric. All Rights Reserved.*
