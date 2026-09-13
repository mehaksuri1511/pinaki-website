# ============================================
# Pinaki IT - Backend Structure Setup
# ============================================

Write-Host "Creating Pinaki IT backend structure..." -ForegroundColor Cyan

# Root directories
$directories = @(
    "config",
    "controllers",
    "routes",
    "services",
    "middleware",
    "utils",
    "certs",
    "scripts"
)

# Create directories
foreach ($directory in $directories) {
    $path = Join-Path $PSScriptRoot $directory

    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
        Write-Host "[CREATED] $directory/" -ForegroundColor Green
    }
    else {
        Write-Host "[EXISTS]  $directory/" -ForegroundColor Yellow
    }
}

# ============================================
# Files
# ============================================

$files = @(
    "server.js",

    # Config
    "config/db.js",

    # Controllers
    "controllers/authController.js",
    "controllers/courseController.js",
    "controllers/blogController.js",
    "controllers/enrollmentController.js",
    "controllers/projectController.js",
    "controllers/contactController.js",

    # Routes
    "routes/authRoutes.js",
    "routes/courseRoutes.js",
    "routes/blogRoutes.js",
    "routes/enrollmentRoutes.js",
    "routes/projectRoutes.js",
    "routes/contactRoutes.js",

    # Services
    "services/authService.js",
    "services/courseService.js",
    "services/blogService.js",
    "services/enrollmentService.js",
    "services/projectService.js",

    # Middleware
    "middleware/authMiddleware.js",
    "middleware/adminMiddleware.js",
    "middleware/errorMiddleware.js",

    # Utils
    "utils/tokens.js",
    "utils/helpers.js",

    # Scripts
    "scripts/seedCourses.js",
    "scripts/migrateBlogs.js"
)

foreach ($file in $files) {
    $path = Join-Path $PSScriptRoot $file

    if (!(Test-Path $path)) {
        New-Item -ItemType File -Path $path | Out-Null
        Write-Host "[CREATED] $file" -ForegroundColor Green
    }
    else {
        Write-Host "[EXISTS]  $file" -ForegroundColor Yellow
    }
}

# ============================================
# .gitkeep for empty folders
# ============================================

$gitkeepDirectories = @(
    "certs"
)

foreach ($directory in $gitkeepDirectories) {
    $gitkeep = Join-Path $PSScriptRoot "$directory/.gitkeep"

    if (!(Test-Path $gitkeep)) {
        New-Item -ItemType File -Path $gitkeep | Out-Null
        Write-Host "[CREATED] $directory/.gitkeep" -ForegroundColor Green
    }
}

# ============================================
# Summary
# ============================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Backend structure created successfully!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Structure:" -ForegroundColor White
Write-Host @"
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── courseController.js
│   ├── blogController.js
│   ├── enrollmentController.js
│   ├── projectController.js
│   └── contactController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── courseRoutes.js
│   ├── blogRoutes.js
│   ├── enrollmentRoutes.js
│   ├── projectRoutes.js
│   └── contactRoutes.js
│
├── services/
│   ├── authService.js
│   ├── courseService.js
│   ├── blogService.js
│   ├── enrollmentService.js
│   └── projectService.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   └── errorMiddleware.js
│
├── utils/
│   ├── tokens.js
│   └── helpers.js
│
├── certs/
│   └── .gitkeep
│
├── scripts/
│   ├── seedCourses.js
│   └── migrateBlogs.js
│
└── server.js
"@

Write-Host ""
Write-Host "Next step: populate the files with the actual backend code." -ForegroundColor Cyan