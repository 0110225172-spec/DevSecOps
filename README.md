# DevSecOps Pipeline Implementation (P5)

Repository ini berisi implementasi pipeline **DevSecOps** otomatis menggunakan **GitHub Actions** dan **CodeQL / Semgrep SAST Tool** pada aplikasi REST API berbasis **Node.js (Express.js)**.

## 1. Nama Aplikasi & Fungsi
* **Nama Aplikasi:** DevSecOps Express REST API
* **Fungsi:** Menyediakan endpoint otentikasi sederhana, pengolahan query data, serta pemrosesan status server yang terintegrasi dengan pengujian keamanan otomatis.

## 2. Bahasa & Framework
* **Runtime:** Node.js (v20)
* **Framework:** Express.js
* **Testing Framework:** Jest & Supertest

## 3. Cara Menjalankan Aplikasi
```bash
# 1. Install Dependencies
npm install

# 2. Jalankan Unit Test
npm test

# 3. Jalankan Aplikasi
npm start