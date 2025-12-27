<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Administrator</title>

  <!-- Bootstrap CSS -->
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet">

  <!-- Bootstrap Icons -->
  <link href="../assets/css/font/bootstrap-icon.css" rel="stylesheet">
  <link rel="icon" type="image/png" href="../assets/img/properties/F.png">

  <style>
    body {
      overflow-x: hidden;
    }

    /* Sidebar */
    .sidebar {
      width: 250px;
      min-height: 100vh;
    }

    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        left: -250px;
        top: 56px;
        transition: 0.3s;
        z-index: 1000;
      }

      .sidebar.show {
        left: 0;
      }
    }
  </style>
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar navbar-dark bg-secondary fixed-top">
  <div class="container-fluid">
    <button class="btn btn-outline-warning text-white d-md-none" onclick="toggleSidebar()" >
      <i class="bi bi-list"></i>
    </button>
    <span class="navbar-brand ms-2"><img src="../assets/img/properties/Fo.png" alt="" width="60" height="60"> PONPES AL ANKABUUT</span>
    <div class="text-white fw-bold">Hi, Admin</div>
  </div>
</nav>

<!-- MAIN WRAPPER -->
<div class="container-fluid">
  <div class="row" style="margin-top: 5rem;">

    <!-- SIDEBAR -->
    <nav class="col-md-3 col-lg-2 bg-success sidebar p-3 text-white" id="sidebars">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link text-muted" href="#">Menu Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white menu-link-adm active" data-page="pages1" href="#"><i class="bi bi-house"></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white menu-link-adm" data-page="pages2" href="#"><i class="bi bi-person"></i> Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white menu-link-adm" data-page="pages3" href="#"><i class="bi bi-book"></i> Kegiatan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white menu-link-adm" data-page="pages4" href="#"><i class="bi bi-image"></i>Documentasi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white menu-link-adm" data-page="pages5" href="#"><i class="bi bi-phone"></i> Kontak</a>
        </li>
        <li class="nav-item mt-5">
          <a class="nav-link text-white" href="#"><i class="bi bi-box-arrow-right"></i> Logout</a>
        </li>
      </ul>
    </nav>

    <!-- CONTENT -->
    <main class="col-md-9 col-lg-10 px-md-4 py-4 bg-light">
      <div id="contentAdmin">
      </div>
    </main>
  </div>
</div>

<!-- Bootstrap JS -->
<script src="../assets/js/js/bootstrap.bundle.min.js"></script>
<script src="../assets/js/jquery-3.7.1.min.js"></script>
<script src="../assets/js/mainAdmin.js"></script>
</body>
</html>
