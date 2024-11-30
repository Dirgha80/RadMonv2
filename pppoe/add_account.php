<?php
/*
*******************************************************************************************************************
* Warning!!!, Tidak untuk diperjual belikan!, Cukup pakai sendiri atau share kepada orang lain secara gratis
*******************************************************************************************************************
* Author : @Maizil https://t.me/maizil41
*******************************************************************************************************************
* © 2024 Mutiara-Net By @Maizil
*******************************************************************************************************************
*/
include ("../include/head.html.php");
?>

<div id="sidenav" class="sidenav">
<a href="../pages/dashboard.php" class="menu"><i class="fa fa-dashboard"></i> Dashboard</a>

<!--hotspot-->
<div class="dropdown-btn"><i class="fa fa-wifi"></i> Hotspot
<i class="fa fa-caret-down"></i>
</div>
<div class="dropdown-container ">
<a href="../hotspot/user.php" class=""><i class="fa fa-users"></i> Hotspot User</a>
<a href="../hotspot/profile.php" class=""><i class="fa fa-pie-chart"></i> Hotspot Profile</a>
<a href="../hotspot/active.php" class=""><i class="fa fa-wifi"></i> Hotspot Active</a>
</div>

<!--pppoe-->
<div class="dropdown-btn active"><i class="fa fa-sitemap"></i> PPPoE
<i class="fa fa-caret-down"></i>
</div>
<div class="dropdown-container ">
<a href="../pppoe/account.php" class="actives"><i class="fa fa-users"></i> PPPoE User</a>
<a href="../pppoe/profile.php" class=""><i class="fa fa-pie-chart"></i> PPPoE Profile</a>
<a href="../pppoe/active.php" class=""><i class="fa fa-plug"></i> PPPoE Active</a>
</div>

<a href="../hotspot/bandwidth.php" class=""><i class="fa fa-area-chart "></i> Bandwidth </a>

<!--quick print-->
<a href="../voucher/quick_print.php" class="menu"> <i class="fa fa-print"></i> Quick Print </a>
<!--vouchers-->
<a href="../voucher/voucher.php" class="menu"> <i class="fa fa-ticket"></i> Vouchers </a>
<!--log-->
<div class="dropdown-btn"><i class="fa fa-align-justify"></i> Log<i class="fa fa-caret-down"></i>
</div>
<div class="dropdown-container">
<a href="../logs/hotspot.php" class=""> <i class="fa fa-wifi"></i> Hotspot Log </a>
<a href="../logs/radius.php" class=""> <i class="fa fa-database"></i> Radius Log </a>
</div>
<!--system-->
<a href="../pages/server.php" class="menu"> <i class="fa fa-server"></i> Status </a>
<!--billing-->
<div class="dropdown-btn "><i class=" fa fa-credit-card"></i> Billing<i class="fa fa-caret-down"></i>
</div>
<div class="dropdown-container ">
<a href="../billing/request.php" class=""> <i class="fa fa-plus-circle "></i> Topup Request </a>
<a href="../billing/user.php" class=""> <i class="fa fa-user "></i> Client List </a>
</div>
<!--report-->
<a href="../hotspot/report.php" class="menu"><i class="nav-icon fa fa-money"></i> Report</a>
<!--settings-->
<div class="dropdown-btn "><i class="fa fa-gear"></i> Settings 
<i class="fa fa-caret-down"></i> &nbsp;
</div>
<div class="dropdown-container ">
<a href="../pages/admin.php" class="menu"> <i class="fa fa-gear"></i> Admin Settings </a>
<a href="../hotspot/hslogo.php" class="menu"> <i class="fa fa-upload"></i> Upload Logo </a>
<a href="../voucher/template.php" class="menu"> <i class="fa fa-edit"></i> Template Setting </a>          
</div>
<!--about-->
<a href="../pages/about.php" class="menu"><i class="fa fa-info-circle"></i> About</a>
</div>

<div id="main">  
<div id="loading" class="lds-dual-ring"></div>
<div class="main-container" style="display:none">
<div class="row">
<div class="col-8">
<div class="card box-bordered">
<div class="card-header">
<h3>
    <i class="fa fa-user-plus"></i> Add Account &nbsp; | &nbsp;
    <small id="loader" style="display: none;">
        <i><i class="fa fa-circle-o-notch fa-spin"></i> Processing...</i>
    </small>
    <?php if (isset($_GET['message'])): ?>
        <small id="message">
            <?php echo htmlspecialchars($_GET['message']); ?>
        </small>
    <?php endif; ?>
</h3>
</div>
<div class="card-body">
    <form method="post" role="form" action="../backend/add.pppoe.php" id="addUserForm">
        <div>
            <a class="btn bg-warning" href="../pppoe/account.php">
                <i class="fa fa-close"></i> Close
            </a>
            <button type="submit" name="addUser" value="top" class="btn bg-primary">
                <i class="fa fa-save"></i> Save
            </button>
        </div>

        <table class="table">
            <tr>
                <td class="align-middle">Client Name</td>
                <td>
                    <input class="form-control" type="text" autocomplete="off" id="clientName" name="clientName" autofocus>
                </td>
            </tr>
            <tr>
                <td class="align-middle">Username</td>
                <td>
                    <input class="form-control" type="text" autocomplete="off" id="Username" name="Username" required autofocus>
                </td>
            </tr>
            <tr>
                <td class="align-middle">Password</td>
                <td>
                    <input class="form-control" type="text" autocomplete="off" id="Password" name="Password" required autofocus>
                </td>
            </tr>
            <tr>
                <td class="align-middle">IP Address</td>
                <td>
                    <input class="form-control" type="text" autocomplete="off" id="ip_address" name="ip_address" required autofocus>
                </td>
            </tr>
            <tr>
                <td class="align-middle">Profile</td>
                <td>
                    <select class="form-control" id="planDropup" name="planName" autocomplete="off">
                        <option value="">Select Plan</option>
                    </select>
                </td>
            </tr>
        </table>
    </form>
</div>
</div>
</div>
<div class="col-4">
  <div class="card">
    <div class="card-header">
      <h3>
        <i class="fa fa-book"></i> Read Me
      </h3>
    </div>
    <div class="card-body">
      <table>
        <tr>
        <table class="table table-bordered">
          <td colspan="2">
                <ul>
                    <li>Username : Kode Voucher</li>
                    <li>Client Name : Nama pelanggan</li>
                    <li>WhatsApp : Nomor WA Pelanggan (Diawali 62)</li>
                    <li>Telegram : ID Telegram Pelanggan.</li><br>
                </ul>
            <p style="padding:0px 5px;"><b>NOTES:</b>
            Yang wajib diisi hanya Username, sisanya opsional<br>
            Abaikan jika tidak ingin diisi</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>
<script src="../js/radmon-ui.<?php echo $theme; ?>.min.js"></script>
<script src="../js/radmon.js"></script>
<script src="../plugins/add.pppoe.js"></script>
</body>
</html>
