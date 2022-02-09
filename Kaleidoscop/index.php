<!DOCTYPE html>
<html>
  <head>
    <title>Project Kaleidoscop</title>
    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <script src="logic.js"></script>
    <script src="dataHandling.js"></script>
    <script>
      $(function(){
        $("header").hide();
        $("main").hide();
        $("header").fadeIn("slow");
        $("main").fadeIn("slow");
      });
    </script>
  </head>

  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://redwars22.github.io/Projetos-Web-3/resx/kaleidoscop.png" alt="" width="32" height="32" class="d-inline-block align-text-top light">
            Kaleidoscop
          </a>
          <div>
            <a href="https://github.com/Redwars22" class="link-dark">Criado por André Pereira(@Redwars22)</a>
            <img src="https://github.com/Redwars22.png" width="32" height="32" class="round-photo">
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 left-bar">
            <div class="country-container">
              <img src="resx/flag.jpg" width="38px" class="flag">
              <span class="lead" contenteditable="true" id="country-name">Nome do país</span>
            </div>
            <hr/>
            <div class="btn-group-vertical button-group">
              <button type="button" class="btn btn-outline-warning" onclick="reloadWindow()"><i class="bi bi-arrow-repeat"></i> Gerar outro país </button>
              <button type="button" class="btn btn-outline-warning" onclick="saveData()"><i class="bi bi-save"></i> Salvar </button>
              <button type="button" class="btn btn-outline-warning" onclick="retrieveData()"><i class="bi bi-folder2-open"></i> Abrir </button>
              <button type="button" class="btn btn-outline-warning" onclick="clearData()"><i class="bi bi-trash"></i> Deletar </button>
              <button type="button" class="btn btn-outline-warning" onclick="setFlag()"><i class="bi bi-flag"></i> Adicionar Bandeira </button>
              <button type="button" class="btn btn-outline-warning" onclick="reportBug()"><i class="bi bi-bug"></i> Reportar bug </button>
              <button type="button" class="btn btn-outline-warning" onclick="helpPage()"><i class="bi bi-question-octagon"></i> Ajuda </button>
              <button type="button" class="btn btn-outline-warning" onclick="aboutBox()"><i class="bi bi-info-square"></i> Sobre</button>
            </div>
          </div>

          <div class="col w-100 right-bar">
            <h1>Gerador de país aleatório</h1>
            <div class="table-container">
              <table class="table table-secondary table-hover table-stripped">
                <thead>
                  <th>Parâmetro</th>
                  <th>Valor</th>
                </thead>
                <tr>
                  <td>
                    População:
                  </td>
                  <td>
                  <?php 
                    $min_pop = 100;
                    $max_pop = 1900000000;
                    $population = rand($min_pop, $max_pop);

                    echo "<input class='form-control' id='population' value='".number_format($population)." pessoas'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Altitude Média:
                  </td>
                  <td>
                  <?php 
                    $min_alt = 0;
                    $max_alt = 8900;
                    $altitude = rand($min_alt, $max_alt);

                    echo "<input class='form-control' id='altitude' value='".number_format($altitude)." metros'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Latitude:
                  </td>
                  <td>
                  <?php 
                    $lat = rand(1, 90);
                    $lat_dir = rand(0, 1);
                    $lat_dir_symbol = "";

                    if($lat_dir == 0){
                      $lat_dir_symbol = "ºN";
                    } else {
                      $lat_dir_symbol = "ºS";
                    }
 
                    echo "<input class='form-control' id='latitude' value=".$lat.$lat_dir_symbol."></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Longitude:
                  </td>
                  <td>
                  <?php 
                    $long = rand(1, 180);
                    $long_dir = rand(0, 1);
                    $long_dir_symbol = "";

                    if($long_dir == 0){
                      $long_dir_symbol = "ºW";
                    } else {
                      $long_dir_symbol = "ºE";
                    }
 
                    echo "<input class='form-control' id='longitude' value=".$long.$long_dir_symbol."></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Temperatura Média Anual:
                  </td>
                  <td>
                  <?php 
                    $min_temp_winter = -50;
                    $max_temp_winter = 15;
                    $average_temp_winter = rand($min_temp_winter, $max_temp_winter);
                    $min_temp_summer = 15;
                    $max_temp_summer = 54;
                    $average_temp_summer = rand($min_temp_summer, $max_temp_summer);
                    $average_temp = rand($average_temp_winter, $average_temp_summer);

                    echo "<input class='form-control' id='average-temperature' value='".$average_temp."ºC'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Independência:
                  </td>
                  <td>
                  <?php 
                    $day = rand(1,31);
                    $month = rand(1, 12);
                    $months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                    $year = rand(1600, 2022);

                    switch($month){
                      case 2:
                        if($day > 28)
                          $day = 28;
                        break;
                      case 4:
                        if($day > 31)
                          $day = 30;
                        break;
                      case 6:
                        if($day > 31)
                          $day = 30;
                        break;
                      case 9:
                        if($day > 31)
                          $day = 30;
                        break; 
                      case 11:
                        if($day > 31)
                          $day = 30;
                        break; 
                      default:
                        //do nothing
                        break;
                    }

                    $date = $day." de ".$months[$month - 1]." de ".$year;

                    echo "<input class='form-control' id='independence-day' value='".$date."'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Área:
                  </td>
                  <td>
                  <?php 
                    $min_area = 1000;
                    $max_area = 20000000;
                    $area = rand($min_area, $max_area);

                    echo "<input class='form-control' id='total-area' value='".number_format($area)." km²'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Taxa de câmbio(1R$ equivale a X na moeda local):
                  </td>
                  <td>
                  <?php 
                    $currency = rand(0, 99);
                    $cents = rand(10, 99);

                    echo "<input class='form-control' id='currency' value='".$currency.",".$cents."'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    PIB:
                  </td>
                  <td>
                  <?php 
                    $min_gdp = 46;
                    $max_gdp = 30000000000;
                    $gdp = rand($min_gdp, $max_gdp);

                    echo "<input class='form-control' id='gdp' value='$".number_format($gdp)."'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    IDH:
                  </td>
                  <td>
                  <?php 
                    $min_IDH = 250;
                    $max_IDH = 999;
                    $IDH = rand($min_IDH, $max_IDH);

                    echo "<input class='form-control' id='idh' value='0,".
                    $IDH."'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Código Telefone:
                  </td>
                  <td>
                  <?php 
                    $min_phonecode = 1;
                    $max_phonecode = 999;
                    $phonecode = rand($min_phonecode, $max_phonecode);

                    echo "<input class='form-control' id='phone-code' value='+".$phonecode."'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Clima:
                  </td>
                  <td>
                  <?php 
                    $climate = ["Temperado", "Mediterrânico", "Semiárido", "Equatorial", "Frio", "Desértico", "Tropical", "Frio de Montanha", "Subtropical", "Polar"];
                    $cl_index = rand(0, 9);

                    echo "<input class='form-control' id='climate' value=".$climate[$cl_index]."></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Água:
                  </td>
                  <td>
                  <?php 
                    $water = rand(1, 70);

                    echo "<input class='form-control' id='water' value='".$water."%'></input>";
                  ?>
                  <td>
                </tr>

                <tr>
                  <td>
                    Densidade Demográfica:
                  </td>
                  <td>
                  <?php 
                    $densidade = ($population/$area);

                    echo "<input class='form-control' id='density' value='".number_format($densidade, 2, ',','.')." hab./km²'></input>";
                  ?>
                  <td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>