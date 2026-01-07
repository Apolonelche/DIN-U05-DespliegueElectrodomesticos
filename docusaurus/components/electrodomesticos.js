//Array de productos con propiedades: nombre, descripcion, precio, categoria, imagen
const electrodomesticos = [
    {
        nombre: "Frigorífico Combi Samsung",
        descripcion: "Frigorífico combi - Samsung RB38C776ASR/EF, Twin & Metal Cooling, 203 cm, 387 l, Wifi, Inox.",
        precio: 899.99,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVtsRUH71BiFDmferwOTimw2UtjrznKVdQOlnm45Gr8yXiC3Iye2FsnuMh-UfC8u7Cxq1szN9Nua2Cz1kVuxoI-ubCBlNTLJISRqY7Da5zy1oCFZa62rD1fQ"
    },
    {
        nombre: "Frigorífico Combi Balay 3kfc879bi",
        descripcion: "Frigorífico Balay 3KFC879BI Combi 203cm 440L C Blanco Botellero Cromado LED Antiescarcha.",
        precio: 1190.00,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpREaVHKf7Dq03UYDecZSUwiN1O7Odo8pPBZKUL9T_uYz5GD7w9rEIoal8OA0THlJrOMQ7bCYP8sXzjk335rINncQssVZciY-aXbowrZ8Z"
    },
    {
        nombre: "Frigorífico Americano Samsung",
        descripcion: "Samsung Bespoke AI RS70F64KETEF, All Around Cooling, No Frost, 178.4 cm, 640 l, Dispensador agua y hielo, Inox.",
        precio: 1300.00,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1QYYYYdb6E5v4f9b520JJFjyOQs_AtbbHpk-XmOfigUxsXftDgOa88isHfgRltB8nUpiU3xjjhOeCmHxGhyQUdDuRdBE-KwmRpt-nwYNAn15tqFuxN-kYaQ"
    },
    {
        nombre: "Frigorífico 2 Puertas Hisense",
        descripcion: "Frigorífico Dos Puertas, Calss E, Capacidad 325 L Neto, Alto 170 cm,Multi Air Flow, Cajón.",
        precio: 549.00,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2wURfJs8Gnle726VGN8Zw9NG-n8ffsa21H-kLdoXeg89TNodNzB3P4K0qPy4lFviOEUGhs4L2rj8WrNP6ZilY9ijXc2myKeEW_Qpq0ZNq08kxzQJuVTC3cw"
    },
    {
        nombre: "Frigorífico Combi Bosch kgn49lbcf",
        descripcion: "Bosch Serie 6 Frigorífico combinado de libre instalación, Acabado en cristal 203 x 70 cm.",
        precio: 1180.99,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScLvxt9vQVrEqNyV4It5qD-2TrhLJhpo4rp-d7B7d6bu4GFc07Y4ME4UJm9d0uXarMumNRwot_Kf373PL77BRwNwQvlmC3AZjLyFa1AM2Z"
    },
    {
        nombre: "Frigorífico Americano Hisense",
        descripcion: "Frigorífico Americano Hisense RS3P538NAIE, No Frost, 178,6 cm, 527 L, 4 Cajones, Eficiencia E.",
        precio: 609.00,
        categoria: "frigorifico",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1TUry2f89SiLHBAfwczsiJ3v16b7BM9_DejzuSXsXQcy7kauDn_4-SkrJoTba7mTMVdJSPyR8K6YcsXhaBmOveK-eZi9OykSQmHtf6nkT8P_0nSraN6Mu"
    },

    {
        nombre: "Lavadora Hisense WF1Q9041BW",
        descripcion: "Hisense wf1q9041bw lavadora carga frontal 9 kg 1400 rpm blanco",
        precio: 409.50,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0-VR7VWvgx7TvOY6qZlc7X-EwqDCYwJWP5OEsNa6i0nLf9W-v3E6fxOMVCt9-3xMuGNyOTS4qDucc5UyvdTXZfSLzEthXqxQ1H2ndFCsUBKjiQs3Rs3Hd"
    },
    {
        nombre: "Lavadora LG F4WR6010AGW 10kg",
        descripcion: "Lavadora LG 10 kg /1400 rpm, TurboWash 360 - F4WR6010AGW.",
        precio: 489.00,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrxTY9HezIdlwz3XqTLuWJ2OTQENLzc3rE6SJ9TgKcepZcxMzVxvcGurmBC4R3tv0jIhuAu13aKNbqJkqdezGmdpmU6KPR1V4MByu-DfxOW4Pz26wuyPvV"
    },
    {
        nombre: "Lavadora TCL FF1214WA0ES",
        descripcion: "Lavadora TCL, 12 kg, Carga Frontal, 1400 rpm, Clase A - Blanco.",
        precio: 308.99,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAPzheQuYziX2zHTc_okMyHjai4FeJC-Xqq-CpRl8p2TwI43ogL40LnQDpeGFlNmOWg9JhpwVw5dyviweW-unE6TjJ6WZNyhJYvYKPS2Cq6ES8BYWTQKK6Pg"
    },
    {
        nombre: "Lavadora Cecotec Bolero DressCode",
        descripcion: "Lavadora 12Kg de Carga Fronta Bolero DressCode 121000 A. 2000W, 1400 rpm.",
        precio: 469.00,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcC1G4Fkoqvv27H56CbHz3WMDNd3boVKMo5CdDtSrs0hY__uA9UNbBQFIWPlqxLNJovxzTo3WfUiHwd4ndJ1cUleoNgUGvDNwQP_wQbvmnwMK-ba_t69-juQ"
    },
    {
        nombre: "Lavadora Hisense WF1G7021BW",
        descripcion: "Hisense WF1G7021BW - Lavadora, Clase B, 7 Kg, 1200 rpm, Alto 84.5cm x Ancho 59.5 cm, Blanco.",
        precio: 265.00,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_kNB-4kcTO_lCOmoMSWaNgAv-pbnlEGbQGU3yDLS9UULFaHRM6rr_aWYojHOM8P-9FLsDvkYpR2mdVbb0_1yZYPyuxkEfBH6uQ88VJ_L2kJWQmbrCjJQETqs"
    },
    {
        nombre: "Lavadora Samsung ww90cgc04dabec",
        descripcion: "Lavadora carga frontal - Samsung WW90CGC04DABEC, 9kg, 1400 rpm, EcoBubble , Función WiFi.",
        precio: 489.00,
        categoria: "lavadora",
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvfLORVECzlJXyUMaN5Y-S1YUwYfdIHBSGvtDaKc_2GHhcUMbvQGjFWR1EgVra4cHGFglkYomWqgHk-jK0SqIcdC0n4flaZGiHYwZvblyfWMMIIX1o9Yjh"
    },

    {
        nombre: "Horno Bosch hba574es3",
        descripcion: "Horno Multifunción Pirolítico, Serie 4, 60 cm. de ancho, Asistente de limpieza, Acero, HBA574ES3.",
        precio: 424.00,
        categoria: "horno",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSN0pOpjMM-nUiULiNye3Dmx4i02opNw9VlpgP8S8YYcmuL0jaokcZtIdgFg4ZDzp4Vq2A-awyi4pbqJUrAw--WlEnjZz5y16n7BwAzqufIcGrt5LsUmwiU"
    },
    {
        nombre: "Horno Pirolítico Samsung",
        descripcion: "Samsung NV7B5750TDK/U1, Multifunción, Pirolítico, Air Fry, 76l.",
        precio: 559.99,
        categoria: "horno",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7M2WtlYhKec9nLidcE_WXykxCKb6SdKTht05UTR3WRJmtCMm3m135l6OScwuyOzoi5gKO2EPLYUeIqUIzdwsbL_LotQQvNGqw6pVW-LVT6ESB7BwQiEk22Q"
    },
    {
        nombre: "Horno AEG TU5AB20WSK",
        descripcion: " AEG TU5AB20WSK, Multifunción, Limpieza por agua, 72 l, Display LED, 60 cm, Negro.",
        precio: 309.50,
        categoria: "horno",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKFz3Fh-tYDasGMdFK58eoGt-faHyEqisx7T9xJZBecnfKiafl1TrVwJkIrpFtzcIGzeJiAlVP3a3M6GdaH4L5_C3DzSA0fc57Yk1f-L2oXfaQRGZZtAKV"
    },
    {
        nombre: "Horno Whirlpool oakz97961spix",
        descripcion: "Horno - Whirlpool OAKZ9 7961 SP IX 73L, Multifunción, Pirolítico.",
        precio: 369.00,
        categoria: "horno",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7om8FjETyvrj6b39HmZc5_vlz8V-7oLJQkzAHLLLmgnqCAmJpgcXxUr9gzkHQQ5PxjlLKne5Axh4dbmhRDbZjDOPPB4MlZRJOOFKzSXJAVRUAe1ZXkx0T"
    },
    {
        nombre: "Horno Infiniton WF470 A Blanco",
        descripcion: "Infiniton WF470, Multifunción, 70 l, 59.5 cm, Radiación, Doble acristalamiento, Blanco.",
        precio: 208.99,
        categoria: "horno",
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77015418?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
    },
    {
        nombre: "Horno Balay 3hb2010b0",
        descripcion: "Balay - Horno multifunción, Aire 3D profesional, precalentamiento rápido, 5 funciones, negro.",
        precio: 239.99,
        categoria: "horno",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcKHD_j9YCmlKg-cUrEgLxc7VAPqPDsnd_RiUAq0TS5kggXhdS0u-vdumbP6Pkyamzwu9aV7ilgyVky6gWwgjQDjbU6qc-HCjZSZ7m5G8hBCLLNFo6RXhy"
    },

    {
        nombre: "Lavavajillas Beko DVN05320W",
        descripcion: "Beko DVN05320W Dishwasher, Libre instalación, blanco, Freestanding 13 Place Settings.",
        precio: 276.99,
        categoria: "lavavajillas",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0A78K6uHbU7_mk7VpgvWxZY4OpRLweRz8nWVvq60hj9veELeQ2gTnipOWmQ-uzEE-JaXKv8FMw2TibphsNw4JxBX98STCxwPgUqywQRozWQguL8QUGOKAow"
    },
    {
        nombre: "Lavavajillas Hisense Hs60240x Inox",
        descripcion: "Lavavajillas Hisense 13 servicios, 7 programas, 60 cm - HS622E10X",
        precio: 349.50,
        categoria: "lavavajillas",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp_nn8BiRGziZ1XNlgKCjil4KM6H2G1bOYxCuZ7Q1L5fe5ke2gpxUkB0uROwCfqjjD8l19YaxiphXYH9tI3c6ZirEdfLnX9ZUU16qkDNn-vJxkUrsU3ENpzA"
    },
    {
        nombre: "Lavavajillas DF030FL LG",
        descripcion: "LG DF030FL Inox antihuellas, capacidad: 13 servicios, clasificación energética.",
        precio: 378.00,
        categoria: "lavavajillas",
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT22q3oOQ51vBd-DStyM6DrhhFlQfICyWyaKvYsVsAijU99WOrrDvaVkHI_nvd_lCwWeM3qarecG7cUn5fOeQRY9SXsy8yxdw"
    },
    {
        nombre: "Lavavajillas Cecotec 4202",
        descripcion: "Lavavajillas 45 cm Cecotec 4202, 6 Programas, 11 Cubiertos, Eficiencia E - Blanco.",
        precio: 279.99,
        categoria: "lavavajillas",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJrXwpILdlIPVDt3MDycudYgwI6JPmapUs-4Sr643g6M5paJk3xRZfz7PcOal4-BNTtThMWZZwMcELmNc8ShVhX1XMxxvVDFc-mEio9_8pwz9QzFgbStSJ"
    },
    {
        nombre: "Lavavajillas AEG FFB74927ZM",
        descripcion: "Lavavajillas - AEG FFB74927ZM, 14 servicios, 8 programas, 60 cm, Sistema AirDry, Inox.",
        precio: 479.99,
        categoria: "lavavajillas",
        imagen: "https://www.aeg.com.es/services/eml/asset/dda7c70d-fb24-41a3-b515-b2374ad1a3aa/E4RM3Q/PSAADW210PA00008/WS_PN/PSAADW210PA00008.png"
    },
    {
        nombre: "Lavavajillas Jocel ",
        descripcion: "Lavavajillas Jocel JLLI023018, Servicio de 15 cubiertos, 6 Programas, Potencia resistencia 1850W",
        precio: 389.99,
        categoria: "lavavajillas",
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9BmfDo0TkalQZl2OmeUdzJAnaVVY2zDFg4tX5ZnEWLwe6U6RYi7L1oW8Q9wXS_iaimAvvRlJ8g8j_Lv2Zsv2HaPITQ3OT"
    }
];

export default electrodomesticos;