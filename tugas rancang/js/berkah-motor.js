var darkModeOn = false;

function cekDarkMode()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const darkMode = urlParams.get('dark_mode');
    if (darkMode != null)
    {
        if (darkMode == "on")
        {
            switchDarkLightMode();
        }
    }
}

function cekMobil()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nomorMobil = urlParams.get('nomor_mobil');
    switch (nomorMobil)
    {
        case '0':
            document.getElementById("carousel-switch-0").src = "img/mobil-1/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-1/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-1/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-1/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-1/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-1/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-1/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-1/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-1/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-1/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-1/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-1/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "Fortuner GR Sport | 2022";
            document.getElementById("text-jarak-tempuh").innerHTML = "5.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 550.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Solar";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '1':
            document.getElementById("carousel-switch-0").src = "img/mobil-2/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-2/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-2/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-2/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-2/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-2/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-2/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-2/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-2/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-2/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-2/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-2/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "Innova G Luxury 2.0 | 2012";
            document.getElementById("text-jarak-tempuh").innerHTML = "140.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 157.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Solar";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '2':
            document.getElementById("carousel-switch-0").src = "img/mobil-3/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-3/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-3/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-3/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-3/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-3/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-3/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-3/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-3/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-3/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-3/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-3/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "March 1.2 | 2017";
            document.getElementById("text-jarak-tempuh").innerHTML = "60.000 Km | Manual";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 105.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '3':
            document.getElementById("carousel-switch-0").src = "img/mobil-4/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-4/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-4/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-4/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-4/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-4/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-4/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-4/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-4/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-4/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-4/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-4/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "CRV Prestige Sensing | 2021";
            document.getElementById("text-jarak-tempuh").innerHTML = "14.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 530.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '4':
            document.getElementById("carousel-switch-0").src = "img/mobil-5/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-5/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-5/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-5/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-5/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-5/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-5/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-5/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-5/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-5/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-5/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-5/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "Venturer 2.4 | 2021";
            document.getElementById("text-jarak-tempuh").innerHTML = "40.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 448.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Solar";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '5':
            document.getElementById("carousel-switch-0").src = "img/mobil-6/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-6/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-6/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-6/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-6/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-6/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-6/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-6/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-6/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-6/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-6/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-6/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "Mobilio RS CVT | 2016";
            document.getElementById("text-jarak-tempuh").innerHTML = "100.000 Km | Manual";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 165.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '6':
            document.getElementById("carousel-switch-0").src = "img/mobil-7/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-7/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-7/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-7/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-7/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-7/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-7/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-7/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-7/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-7/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-7/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-7/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "Accord VTI-L | 2014";
            document.getElementById("text-jarak-tempuh").innerHTML = "50.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 265.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '7':
            document.getElementById("carousel-switch-0").src = "img/mobil-8/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-8/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-8/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-8/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-8/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-8/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-8/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-8/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-8/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-8/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-8/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-8/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "XPander Ultimate | 2019";
            document.getElementById("text-jarak-tempuh").innerHTML = "50.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "Rp. 228.000.000";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
        case '8':
            document.getElementById("carousel-switch-0").src = "img/mobil-9/1.jpg";
            document.getElementById("carousel-switch-1").src = "img/mobil-9/2.jpg";
            document.getElementById("carousel-switch-2").src = "img/mobil-9/3.jpg";
            document.getElementById("carousel-switch-3").src = "img/mobil-9/4.jpg";
            document.getElementById("carousel-switch-4").src = "img/mobil-9/5.jpg";
            document.getElementById("carousel-switch-5").src = "img/mobil-9/6.jpg";
            document.getElementById("carousel-preview-0").style.backgroundImage = "url('img/mobil-9/1.jpg')";
            document.getElementById("carousel-preview-1").style.backgroundImage = "url('img/mobil-9/2.jpg')";
            document.getElementById("carousel-preview-2").style.backgroundImage = "url('img/mobil-9/3.jpg')";
            document.getElementById("carousel-preview-3").style.backgroundImage = "url('img/mobil-9/4.jpg')";
            document.getElementById("carousel-preview-4").style.backgroundImage = "url('img/mobil-9/5.jpg')";
            document.getElementById("carousel-preview-5").style.backgroundImage = "url('img/mobil-9/6.jpg')";
            document.getElementById("text-nama-mobil").innerHTML = "HRV E CVT | 2015";
            document.getElementById("text-jarak-tempuh").innerHTML = "80.000 Km | Automatic";
            document.getElementById("text-pajak-atas").innerHTML = "Pajak ON";
            document.getElementById("text-harga").innerHTML = "SOLD OUT";
            document.getElementById("text-bahan-bakar").innerHTML = "Bahan Bakar";
            document.getElementById("text-keterangan-bahan-bakar").innerHTML = "Bensin";
            document.getElementById("text-pajak-bawah").innerHTML = "Pajak";
            document.getElementById("text-pajak-on").innerHTML = "ON";
            document.getElementById("text-surat-surat").innerHTML = "Surat-Surat";
            document.getElementById("text-surat-surat-lengkap").innerHTML = "Lengkap";
            document.getElementById("text-jaminan").innerHTML = "Jaminan";
            document.getElementById("text-unit-terawat").innerHTML = "Unit Terawat & Siap Pakai";
            break;
    }
}

function switchDarkLightMode()
{
    // if (document.documentElement.getAttribute("data-bs-theme") == "dark")
    // {
    //     document.documentElement.setAttribute("data-bs-theme", "light");
    // }
    // else
    // {
    //     document.documentElement.setAttribute("data-bs-theme", "dark");
    // }
    let darkMode = document.querySelectorAll("[data-bs-theme='light']");
    let lightMode = document.querySelectorAll("[data-bs-theme='dark']");
    for (let i = 0; i < darkMode.length; i++)
    {
        darkMode[i].setAttribute("data-bs-theme", "dark");
    }
    for (let i = 0; i < lightMode.length; i++)
    {
        lightMode[i].setAttribute("data-bs-theme", "light");
    }
    if (document.getElementsByClassName("navbar")[0].classList.contains("navbar-light"))
    {
        document.getElementsByClassName("navbar")[0].classList.replace("navbar-light", "navbar-dark"); 
        document.getElementsByClassName("navbar")[0].classList.replace("bg-light", "bg-dark");
        document.getElementById("dark-light").innerHTML = "<path fill=\"currentColor\" d=\"M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z\"/>";
        document.getElementById("text-dark-mode").innerHTML = "Dark Mode: ON";
        document.getElementById("link_beranda").href = "index.html?dark_mode=on";
        document.getElementById("link_beli_mobil").href = "beli-mobil.html?dark_mode=on";
        document.getElementById("link_jual_mobil").href = "jual-mobil.html?dark_mode=on";
        document.getElementById("link_faq").href = "faq.html?dark_mode=on";
        document.getElementById("link_tentang_kami").href = "tentang-kami.html?dark_mode=on";
        darkModeOn = true;
        // document.getElementById("link-").href = "";
    }
    else
    {
        document.getElementsByClassName("navbar")[0].classList.replace("navbar-dark", "navbar-light");
        document.getElementsByClassName("navbar")[0].classList.replace("bg-dark", "bg-light");
        document.getElementById("dark-light").innerHTML = "<path fill=\"currentColor\" d=\"M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20\"/>";
        document.getElementById("text-dark-mode").innerHTML = "Dark Mode: OFF";
        document.getElementById("link_beranda").href = "index.html";
        document.getElementById("link_beli_mobil").href = "beli-mobil.html";
        document.getElementById("link_jual_mobil").href = "jual-mobil.html";
        document.getElementById("link_faq").href = "faq.html";
        document.getElementById("link_tentang_kami").href = "tentang-kami.html";
        darkModeOn = false;
    }
}

function filterDaftarMobil(merek)
{
    let navMerekMobil = document.getElementsByClassName("nav-car");
    let daftarMobil = document.getElementsByClassName("car");
    // for (let i = 0; i < tampungDaftarMobil.length; i++)
    // {
    //     if (tampungDaftarMobil[i].classList.contains("car-on"))
    //     {
    //         carOn = true;
    //         break;
    //         // tampungDaftarMobil[i].classList.remove("car-on");
    //     }
    // }
    for (let i = 0; i < navMerekMobil.length; i++)
    {
        if (navMerekMobil[i].classList.contains("nav-" + merek))
        {
            if (navMerekMobil[i].classList.contains("car-on"))
            {
                navMerekMobil[i].classList.remove("car-on");
                for (let j = 0; j < daftarMobil.length; j++)
                {
                    daftarMobil[j].style.display = null;
                }
                document.getElementById("load-more").style.display = "flex";
                document.getElementById("data-kosong").style.display = "none";
            }
            else
            {
                navMerekMobil[i].classList.add("car-on");
                for (let j = 0; j < daftarMobil.length; j++)
                {
                    if (daftarMobil[j].classList.contains(merek))
                    {
                        daftarMobil[j].style.display = "block";
                    }
                    else
                    {
                        daftarMobil[j].style.display = "none";
                    }
                }
                switch(merek)
                {
                    case "car-suzuki":
                    case "car-mazda":
                        document.getElementById("load-more").style.display = "none";
                        document.getElementById("data-kosong").style.display = "block";
                        break;
                    default:
                        document.getElementById("load-more").style.display = "none";
                        document.getElementById("data-kosong").style.display = "none";
                }
            }
        }
        else
        {
            navMerekMobil[i].classList.remove("car-on");
        }
    }
}

function pilihMobil(nomorMobil)
{
    if (darkModeOn)
    {
        location.href = "detail-produk.html?dark_mode=on&nomor_mobil=" + nomorMobil;
    }
    else
    {
        location.href = "detail-produk.html?nomor_mobil=" + nomorMobil;
    }
}