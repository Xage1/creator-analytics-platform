# Creator Analytics Platform

A scalable data engineering and analytics system that tracks public creator profiles, analyzes engagement trends, detects anomalies, and provides real-time insights via dashboards and bots.

---

## 🚀 Overview

This platform collects and analyzes publicly available creator data from multiple platforms and transforms it into actionable insights:

- 📊 Follower growth tracking
- 📈 Trending creator ranking system
- ⚠️ Anomaly detection (viral spikes, unusual drops)
- 💬 Sentiment analysis on captions/comments
- 🤖 Telegram/Discord notifications
- 📉 Historical analytics dashboard

---

## 🏗️ System Architecture

Scheduler → Redis Queue → Scraper Workers → PostgreSQL → Analytics Engine → API → Dashboard + Bot

---

## 🧠 Key Features

### Data Collection
- Playwright-based scraping engine
- Handles dynamic JS-heavy websites
- Scheduled and queue-based crawling

### Analytics Engine
- Growth tracking
- Trend detection algorithm
- Creator ranking system

### Machine Learning
- Sentiment classification on captions/comments
- NLP preprocessing pipeline
- Lightweight ML models

### Anomaly Detection
- Detect sudden follower spikes
- Identify unusual engagement patterns
- Z-score and rolling-average detection

### Notification System
- Telegram bot alerts
- Discord webhook integration
- Custom alert rules

---

## 🧰 Tech Stack

### Backend
- Node.js (TypeScript)
- FastAPI (Python)
- PostgreSQL

### Scraping
- Playwright
- Redis
- Background Workers

### Analytics / ML
- Python
- Pandas
- NumPy
- Scikit-learn

### Frontend
- Next.js
- Recharts

### Infrastructure
- Docker
- Docker Compose

---

## 📁 Project Structure

creator-analytics-platform/
├── apps/
│   ├── scraper/
│   ├── api/
│   ├── analytics/
│   ├── dashboard/
│   └── bot/
├── packages/
├── infra/
├── docs/
├── scripts/
└── README.md

---

## ⚙️ Core Modules

### Scraper Engine
- Playwright browser automation
- Queue-based job processing
- Retry and rate limiting

### Analytics Engine
- Time-series growth tracking
- Creator ranking system
- Trend scoring algorithm

### Sentiment Analysis
- NLP preprocessing
- Sentiment classification
- Post-level sentiment scoring

### Anomaly Detection
- Spike detection
- Rolling averages
- Alert generation

### Bot System
- Telegram integration
- Discord integration
- Real-time notifications

---

## 📊 Insights Generated

- Fastest growing creators
- Viral spike alerts
- Engagement drop warnings
- Sentiment breakdowns
- Posting frequency heatmaps

---

## 🔔 Notifications

### Telegram
🔥 Spike Alert!
Creator: @example
Follower growth: +12,400 in 2 hours

### Discord
📊 Trending Update:
@creator is now #3 in weekly rankings

---

## 🧪 Development Setup

```bash
npm install
docker-compose up -d
```

---

## 🗄️ Database Tables

- creators
- posts
- metrics_snapshots
- engagement_stats
- anomaly_events
- sentiment_scores

---

## 📈 Future Improvements

- Kafka streaming
- AI virality prediction
- Multi-platform creator identity matching
- Cloud deployment

---

## ⚠️ Disclaimer

This project is intended to process publicly available data and does not bypass authentication, paywalls, or restricted access systems.

---

## 👨‍💻 Author

Built as a backend and data engineering portfolio project focused on scalable scraping systems, analytics pipelines, ML-driven insights, and real-time processing.
