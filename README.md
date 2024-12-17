
# Collaboration Guide for Textractor

Welcome to the Textractor project! This is a quick guide how to set up the repo for Collaboration.

---


## **Getting Started**

**1.Clone the Repository**
   Clone the repository to your local machine:


```bash
  git clone https://github.com/tomaatooo/Textractor.git
  cd Textractor
```

**2.Set Up the Environment**
   Follow the setup instructions in the [README.md](README.md) to install dependencies and prepare your development environment.

---

## **Working on the Project**

### **1. Pull the main branch**

To stay updated with the `main` branch use

```bash
git fetch --all
git pull
```

### **2. Create a New Branch**

To keep the `main` branch stable, create a new branch for your work:

```bash
git checkout -b your-name/feature-name
```

#### **Branch Naming Conventions:**

- **Features:** `your-name/feature-name`
- **Bug Fixes:** `your-name/issue-description`

### **3. Make Changes Locally**

Edit the code, test your changes, and ensure everything works. Use commit messages with justified description for each change:

```bash
git add .
git commit -m "Description of the changes made"
```

### **4. Push Your Branch**

Push your branch to the repository:

```bash
git push origin featurefeature-name
```

