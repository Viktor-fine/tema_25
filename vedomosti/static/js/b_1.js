// Событие по нажатию по кнопки ПРИМЕР

document.querySelector(".primer1_b1").onclick = primer_b1;

function primer_b1(){
    let zagolovok_b1=['Ковшовый погрузчик',
                        'НЭС',
                        '28.05.2025',
                        'Манометр, секундомер, рулетка, масса груза 500кг, объём ковша 3м ',
                     ];
    let op_1 = [100, NaN, 90, 4, 1, 1, 2, NaN, 1];
    let op_2 = [100, NaN, 90, 3, 2, 2, 2, NaN, 2];
    let op_3 = [100, NaN, 92, 2, 1, 1, 1, NaN, 2];
    let op_4 = [100, NaN, 91, 2, 3, 1, 1, NaN, 3];


    document.querySelector('.z_1').value = zagolovok_b1[0];
    document.querySelector('.z_2').value = zagolovok_b1[1];
    document.querySelector('.z_3').value = zagolovok_b1[2];
    document.querySelector('.z_4').value = zagolovok_b1[3];
    }

document.querySelector(".reset").onclick = reset;

function reset(){
    document.querySelector('.z_1').value = '';
    document.querySelector('.z_2').value = '';
    document.querySelector('.z_3').value = '';
    document.querySelector('.z_4').value = '';
}
//     // 1-й опыт
//     document.querySelector('.a_1').value = op_1[0];
//     // document.querySelector('.vsego_2').value = op_1[1];
//     document.querySelector('.a_3').value = op_1[2];
//     document.querySelector('.a_4').value = op_1[3];
//     document.querySelector('.a_5').value = op_1[4];
//     document.querySelector('.a_6').value = op_1[5];
//     document.querySelector('.a_7').value = op_1[6];
//     // document.querySelector('.vsego_8').value = op_1[7];
//     document.querySelector('.a_9').value = op_1[8];

//     // 2-й опыт
//     document.querySelector('.b_1').value = op_2[0];
//     document.querySelector('.b_3').value = op_2[2];
//     document.querySelector('.b_4').value = op_2[3];
//     document.querySelector('.b_5').value = op_2[4];
//     document.querySelector('.b_6').value = op_2[5];
//     document.querySelector('.b_7').value = op_2[6];
//     document.querySelector('.b_9').value = op_2[8];
    
//     // 3-й Опыт
//     document.querySelector('.c_1').value = op_3[0];
//     document.querySelector('.c_3').value = op_3[2];
//     document.querySelector('.c_4').value = op_3[3];
//     document.querySelector('.c_5').value = op_3[4];
//     document.querySelector('.c_6').value = op_3[5];
//     document.querySelector('.c_7').value = op_3[6];
//     document.querySelector('.c_9').value = op_3[8];

//     // 4-й Опыт
//     document.querySelector('.d_1').value = op_4[0];
//     document.querySelector('.d_3').value = op_4[2];
//     document.querySelector('.d_4').value = op_4[3];
//     document.querySelector('.d_5').value = op_4[4];
//     document.querySelector('.d_6').value = op_4[5];
//     document.querySelector('.d_7').value = op_4[6];
//     document.querySelector('.d_9').value = op_4[8];

// }

// document.querySelector(".raschet_b1").onclick = raschet;


// function raschet(){
//     let a1 = +document.querySelector('.a_3').value;
//     let a2 = +document.querySelector('.a_4').value;
//     let a3 = +document.querySelector('.a_5').value;
//     let a4 = +document.querySelector('.a_6').value;
//     let a5 = +document.querySelector('.a_7').value;

//     let b1 = +document.querySelector('.b_3').value;
//     let b2 = +document.querySelector('.b_4').value;
//     let b3 = +document.querySelector('.b_5').value;
//     let b4 = +document.querySelector('.b_6').value;
//     let b5 = +document.querySelector('.b_7').value;

//     let c1 = +document.querySelector('.c_3').value;
//     let c2 = +document.querySelector('.c_4').value;
//     let c3 = +document.querySelector('.c_5').value;
//     let c4 = +document.querySelector('.c_6').value;
//     let c5 = +document.querySelector('.c_7').value;

//     let d1 = +document.querySelector('.d_3').value;
//     let d2 = +document.querySelector('.d_4').value;
//     let d3 = +document.querySelector('.d_5').value;
//     let d4 = +document.querySelector('.d_6').value;
//     let d5 = +document.querySelector('.d_7').value;


//     // 1-й опыт
//     let asum = a1 + a2 + a3 + a4 +a5;
//     document.querySelector('.a_2').value = asum;

//     let summa_rostkov_a = a1 + (a2*2) + (a3*3) + (a4*4) + (a5*5);
//     document.querySelector('.a_8').value = summa_rostkov_a;

//     // 2-й опыт
//     let bsum = b1 + b2 + b3 + b4 +b5;
//     document.querySelector('.b_2').value = bsum;

//     let summa_rostkov_b = b1 + (b2*2) + (b3*3) + (b4*4) + (b5*5);
//     document.querySelector('.b_8').value = summa_rostkov_b;

//     // 3-й опыт
//     let csum = c1 + c2 + c3 + c4 +c5;
//     document.querySelector('.c_2').value = csum;

//     let summa_rostkov_c = c1 + (c2*2) + (c3*3) + (c4*4) + (c5*5);
//     document.querySelector('.c_8').value = summa_rostkov_c;

//     // 4-й опыт
//     let dsum = d1 + d2 + d3 + d4 +d5;
//     document.querySelector('.d_2').value = dsum;

//     let summa_rostkov_d = d1 + (d2*2) + (d3*3) + (d4*4) + (d5*5);
//     document.querySelector('.d_8').value = summa_rostkov_d;

//     // Расчёт для суммы на 9 колонок
//     let sum_a_1 = +document.querySelector('.a_1').value;
//     let sum_b_1 = +document.querySelector('.b_1').value;
//     let sum_c_1 = +document.querySelector('.c_1').value;
//     let sum_d_1 = +document.querySelector('.d_1').value;
//     let summa1 = sum_a_1 + sum_b_1 + sum_c_1 + sum_d_1;
//     let summa2 = asum + bsum + csum + dsum;
    
//     document.querySelector('.summa_1').value = summa1; // 1-я колонка
//     document.querySelector('.summa_2').value = summa2; // 2-я колонка

//     let sum_a_3 = +document.querySelector('.a_3').value;
//     let sum_b_3 = +document.querySelector('.b_3').value;
//     let sum_c_3 = +document.querySelector('.c_3').value;
//     let sum_d_3 = +document.querySelector('.d_3').value;
//     let summa3 = sum_a_3 + sum_b_3 + sum_c_3 + sum_d_3;

//     document.querySelector('.summa_3').value = summa3; // 3-я колонка

//     let sum_a_4 = +document.querySelector('.a_4').value;
//     let sum_b_4 = +document.querySelector('.b_4').value;
//     let sum_c_4 = +document.querySelector('.c_4').value;
//     let sum_d_4 = +document.querySelector('.d_4').value;
//     let summa4 = sum_a_4 + sum_b_4 + sum_c_4 + sum_d_4;

//     document.querySelector('.summa_4').value = summa4; // 4-я колонка

//     let sum_a_5 = +document.querySelector('.a_5').value;
//     let sum_b_5 = +document.querySelector('.b_5').value;
//     let sum_c_5 = +document.querySelector('.c_5').value;
//     let sum_d_5 = +document.querySelector('.d_5').value;
//     let summa5 = sum_a_5 + sum_b_5 + sum_c_5 + sum_d_5;

//     document.querySelector('.summa_5').value = summa5; // 5-я колонка

//     let sum_a_6 = +document.querySelector('.a_6').value;
//     let sum_b_6 = +document.querySelector('.b_6').value;
//     let sum_c_6 = +document.querySelector('.c_6').value;
//     let sum_d_6 = +document.querySelector('.d_6').value;
//     let summa6 = sum_a_6 + sum_b_6 + sum_c_6 + sum_d_6;

//     document.querySelector('.summa_6').value = summa6; // 6-я колонка

//     let sum_a_7 = +document.querySelector('.a_7').value;
//     let sum_b_7 = +document.querySelector('.b_7').value;
//     let sum_c_7 = +document.querySelector('.c_7').value;
//     let sum_d_7 = +document.querySelector('.d_7').value;
//     let summa7 = sum_a_7 + sum_b_7 + sum_c_7 + sum_d_7;

//     document.querySelector('.summa_7').value = summa7; // 7-я колонка

//     let summa8 = summa_rostkov_a + summa_rostkov_b + summa_rostkov_c + summa_rostkov_d;
//     document.querySelector('.summa_8').value = summa8; // 8-я колонка
                        
//     let sum_a_9 = +document.querySelector('.a_9').value;
//     let sum_b_9 = +document.querySelector('.b_9').value;
//     let sum_c_9 = +document.querySelector('.c_9').value;
//     let sum_d_9 = +document.querySelector('.d_9').value;
//     let summa9 = sum_a_9 + sum_b_9 + sum_c_9 + sum_d_9;

//     document.querySelector('.summa_9').value = summa9; // 9-я колонка

//     let srednee1 = (sum_a_1+sum_b_1+sum_c_1+sum_d_1)/4
//     document.querySelector('.sred_znach_1').value = srednee1.toFixed(); // 1-е среднее значение

//     let srednee2 = (asum + bsum + csum + dsum)/4
//     document.querySelector('.sred_znach_2').value = srednee2.toFixed(); // 2-е среднее значение

//     let srednee3 = (sum_a_3 + sum_b_3 + sum_c_3 + sum_d_3)/4;
//     document.querySelector('.sred_znach_3').value = srednee3.toFixed(); // 3-е среднее значение

//     let srednee4 = (sum_a_4 + sum_b_4 + sum_c_4 + sum_d_4)/4;
//     document.querySelector('.sred_znach_4').value = srednee4.toFixed(); // 4-е среднее значение

//     let srednee5 = (sum_a_5 + sum_b_5 + sum_c_5 + sum_d_5)/4;
//     document.querySelector('.sred_znach_5').value = srednee5.toFixed(); // 5-е среднее значение

//     let srednee6 = (sum_a_6 + sum_b_6 + sum_c_6 + sum_d_6)/4;
//     document.querySelector('.sred_znach_6').value = srednee6.toFixed(); // 6-е среднее значение

//     let srednee7 = (sum_a_7 + sum_b_7 + sum_c_7 + sum_d_7)/4;
//     document.querySelector('.sred_znach_7').value = srednee7.toFixed(); // 7-е среднее значение

//     let srednee8 = (summa_rostkov_a + summa_rostkov_b + summa_rostkov_c + summa_rostkov_d)/4
//     document.querySelector('.sred_znach_8').value = srednee8.toFixed(); // 8-е среднее значение

//     let srednee9 = (sum_a_9 + sum_b_9 + sum_c_9 + sum_d_9)/4;
//     document.querySelector('.sred_znach_9').value = srednee9.toFixed(); // 9-е среднее значение


//     let rostkovost1 = (srednee2 * 100)/srednee8;
//     document.querySelector('.rost_2').value = rostkovost1.toFixed(1); // Ростковость % 2-е значение

//     let rostkovost2 = (srednee3 * 100)/srednee8;
//     document.querySelector('.rost_3').value = rostkovost2.toFixed(1); // Ростковость % 3-е значение

//     let rostkovost3 = (srednee4 * 100)/srednee8;
//     document.querySelector('.rost_4').value = rostkovost3.toFixed(1); // Ростковость % 4-е значение

//     let rostkovost4 = (srednee5 * 100)/srednee8;
//     document.querySelector('.rost_5').value = rostkovost4.toFixed(1); // Ростковость % 5-е значение

//     let rostkovost5 = (srednee6 * 100)/srednee8;
//     document.querySelector('.rost_6').value = rostkovost5.toFixed(1); // Ростковость % 6-е значение

//     let rostkovost6 = (srednee7 * 100)/srednee8;
//     document.querySelector('.rost_7').value = rostkovost6.toFixed(1); // Ростковость % 7-е значение

//     document.querySelector('.rost_8').value = '-'; // Ростковость % без значения
//     document.querySelector('.rost_9').value = '-'; // Ростковость % без значения


//     let bez_semyan = (srednee9 * 100) / srednee1;
//     document.querySelector('.dolya_9').value = bez_semyan.toFixed(1); // Доля драже без семян

// }