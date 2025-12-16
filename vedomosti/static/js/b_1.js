// Событие по нажатию по кнопки ПРИМЕР

document.querySelector(".primer1_b1").onclick = primer_b1;

function primer_b1(){
    let zagolovok_b1=['Ковшовый погрузчик',
                        'НЭС',
                        '28.05.2025',
                        'Манометр, секундомер, рулетка, масса груза 500кг, объём ковша 3м ',];

    let op_1 = [100, 13, 14, 15,
                    46, 45, 47,
                    45, 46, 44,
                    2.5, 2.6, 2.4];

    let op_2 = [200, 14, 15, 15,
                    45, 47, 46,
                    49, 49, 50,
                    2.6, 2.7, 2.8];

    let op_3 = [300, 14, 16, 15,
                    48, 47, 46,
                    50, 49, 51,
                    2.8, 2.9, 2.7];
    
    let op_4 = [400, 15, 15, 16,
                    48, 48, 49,
                    51, 51, 52,
                    2.8, 2.8, 2.9]

    let op_5 = [500, 16, 16, 17,
                    49, 49, 50,
                    52, 53, 53,
                    2.9, 2.9, 3]

    let op_6 = [600, 17, 17, 17,
                    50, 49, 50,
                    53, 53, 53,
                    2.9, 3, 3]

    let op_7 = [700, 17, 18, 17,
                    50, 51, 50,
                    53, 54, 53,
                    2.9, 2.9, 3]

     let op_8 = [800, 19, 18, 17,
                    52, 51, 50,
                    54, 54, 53,
                    2.9, 2.9, 3]

     let op_9 = [900, 19, 18, 18,
                    52, 52, 50,
                    55, 54, 53,
                    2.9, 2.9, 3]

    let op_10 = [1000, 19, 18.5, 18,
                    52, 52.5, 50,
                    55, 54.5, 53,
                    3, 2.9, 3]


    document.querySelector('.z_1').value = zagolovok_b1[0];
    document.querySelector('.z_2').value = zagolovok_b1[1];
    document.querySelector('.z_3').value = zagolovok_b1[2];
    document.querySelector('.z_4').value = zagolovok_b1[3];

    document.getElementById('g1_massa').value = op_1[0];
    document.getElementById('g1_1').value = Number(op_1[1]);
    document.getElementById('g1_2').value = Number(op_1[2]);
    document.getElementById('g1_3').value = Number(op_1[3]);
    document.getElementById('g1_4').value = Number(op_1[4]);
    document.getElementById('g1_5').value = Number(op_1[5]);
    document.getElementById('g1_6').value = Number(op_1[6]);
    document.getElementById('g1_7').value = Number(op_1[7]);
    document.getElementById('g1_8').value = Number(op_1[8]);
    document.getElementById('g1_9').value = Number(op_1[9]);
    document.getElementById('g1_10').value = Number(op_1[10]);
    document.getElementById('g1_11').value = Number(op_1[11]);
    document.getElementById('g1_12').value = Number(op_1[12]);
    
    document.getElementById('g2_massa').value = op_2[0];
    document.getElementById('g2_1').value = Number(op_2[1]);
    document.getElementById('g2_2').value = Number(op_2[2]);
    document.getElementById('g2_3').value = Number(op_2[3]);
    document.getElementById('g2_4').value = Number(op_2[4]);
    document.getElementById('g2_5').value = Number(op_2[5]);
    document.getElementById('g2_6').value = Number(op_2[6]);
    document.getElementById('g2_7').value = Number(op_2[7]);
    document.getElementById('g2_8').value = Number(op_2[8]);
    document.getElementById('g2_9').value = Number(op_2[9]);
    document.getElementById('g2_10').value = Number(op_2[10]);
    document.getElementById('g2_11').value = Number(op_2[11]);
    document.getElementById('g2_12').value = Number(op_2[12]);

    document.getElementById('g3_massa').value = op_3[0];
    document.getElementById('g3_1').value = Number(op_3[1]);
    document.getElementById('g3_2').value = Number(op_3[2]);
    document.getElementById('g3_3').value = Number(op_3[3]);
    document.getElementById('g3_4').value = Number(op_3[4]);
    document.getElementById('g3_5').value = Number(op_3[5]);
    document.getElementById('g3_6').value = Number(op_3[6]);
    document.getElementById('g3_7').value = Number(op_3[7]);
    document.getElementById('g3_8').value = Number(op_3[8]);
    document.getElementById('g3_9').value = Number(op_3[9]);
    document.getElementById('g3_10').value = Number(op_3[10]);
    document.getElementById('g3_11').value = Number(op_3[11]);
    document.getElementById('g3_12').value = Number(op_3[12]);

    document.getElementById('g4_massa').value = op_4[0];
    document.getElementById('g4_1').value = Number(op_4[1]);
    document.getElementById('g4_2').value = Number(op_4[2]);
    document.getElementById('g4_3').value = Number(op_4[3]);
    document.getElementById('g4_4').value = Number(op_4[4]);
    document.getElementById('g4_5').value = Number(op_4[5]);
    document.getElementById('g4_6').value = Number(op_4[6]);
    document.getElementById('g4_7').value = Number(op_4[7]);
    document.getElementById('g4_8').value = Number(op_4[8]);
    document.getElementById('g4_9').value = Number(op_4[9]);
    document.getElementById('g4_10').value = Number(op_4[10]);
    document.getElementById('g4_11').value = Number(op_4[11]);
    document.getElementById('g4_12').value = Number(op_4[12]);

    document.getElementById('g5_massa').value = op_5[0];
    document.getElementById('g5_1').value = Number(op_5[1]);
    document.getElementById('g5_2').value = Number(op_5[2]);
    document.getElementById('g5_3').value = Number(op_5[3]);
    document.getElementById('g5_4').value = Number(op_5[4]);
    document.getElementById('g5_5').value = Number(op_5[5]);
    document.getElementById('g5_6').value = Number(op_5[6]);
    document.getElementById('g5_7').value = Number(op_5[7]);
    document.getElementById('g5_8').value = Number(op_5[8]);
    document.getElementById('g5_9').value = Number(op_5[9]);
    document.getElementById('g5_10').value = Number(op_5[10]);
    document.getElementById('g5_11').value = Number(op_5[11]);
    document.getElementById('g5_12').value = Number(op_5[12]);

    document.getElementById('g6_massa').value = op_6[0];
    document.getElementById('g6_1').value = Number(op_6[1]);
    document.getElementById('g6_2').value = Number(op_6[2]);
    document.getElementById('g6_3').value = Number(op_6[3]);
    document.getElementById('g6_4').value = Number(op_6[4]);
    document.getElementById('g6_5').value = Number(op_6[5]);
    document.getElementById('g6_6').value = Number(op_6[6]);
    document.getElementById('g6_7').value = Number(op_6[7]);
    document.getElementById('g6_8').value = Number(op_6[8]);
    document.getElementById('g6_9').value = Number(op_6[9]);
    document.getElementById('g6_10').value = Number(op_6[10]);
    document.getElementById('g6_11').value = Number(op_6[11]);
    document.getElementById('g6_12').value = Number(op_6[12]);

    document.getElementById('g7_massa').value = op_7[0];
    document.getElementById('g7_1').value = Number(op_7[1]);
    document.getElementById('g7_2').value = Number(op_7[2]);
    document.getElementById('g7_3').value = Number(op_7[3]);
    document.getElementById('g7_4').value = Number(op_7[4]);
    document.getElementById('g7_5').value = Number(op_7[5]);
    document.getElementById('g7_6').value = Number(op_7[6]);
    document.getElementById('g7_7').value = Number(op_7[7]);
    document.getElementById('g7_8').value = Number(op_7[8]);
    document.getElementById('g7_9').value = Number(op_7[9]);
    document.getElementById('g7_10').value = Number(op_7[10]);
    document.getElementById('g7_11').value = Number(op_7[11]);
    document.getElementById('g7_12').value = Number(op_7[12]);
    
    document.getElementById('g8_massa').value = op_8[0];
    document.getElementById('g8_1').value = Number(op_8[1]);
    document.getElementById('g8_2').value = Number(op_8[2]);
    document.getElementById('g8_3').value = Number(op_8[3]);
    document.getElementById('g8_4').value = Number(op_8[4]);
    document.getElementById('g8_5').value = Number(op_8[5]);
    document.getElementById('g8_6').value = Number(op_8[6]);
    document.getElementById('g8_7').value = Number(op_8[7]);
    document.getElementById('g8_8').value = Number(op_8[8]);
    document.getElementById('g8_9').value = Number(op_8[9]);
    document.getElementById('g8_10').value = Number(op_8[10]);
    document.getElementById('g8_11').value = Number(op_8[11]);
    document.getElementById('g8_12').value = Number(op_8[12]);

    document.getElementById('g9_massa').value = op_9[0];
    document.getElementById('g9_1').value = Number(op_9[1]);
    document.getElementById('g9_2').value = Number(op_9[2]);
    document.getElementById('g9_3').value = Number(op_9[3]);
    document.getElementById('g9_4').value = Number(op_9[4]);
    document.getElementById('g9_5').value = Number(op_9[5]);
    document.getElementById('g9_6').value = Number(op_9[6]);
    document.getElementById('g9_7').value = Number(op_9[7]);
    document.getElementById('g9_8').value = Number(op_9[8]);
    document.getElementById('g9_9').value = Number(op_9[9]);
    document.getElementById('g9_10').value = Number(op_9[10]);
    document.getElementById('g9_11').value = Number(op_9[11]);
    document.getElementById('g9_12').value = Number(op_9[12]);

    document.getElementById('g10_massa').value = op_10[0];
    document.getElementById('g10_1').value = Number(op_10[1]);
    document.getElementById('g10_2').value = Number(op_10[2]);
    document.getElementById('g10_3').value = Number(op_10[3]);
    document.getElementById('g10_4').value = Number(op_10[4]);
    document.getElementById('g10_5').value = Number(op_10[5]);
    document.getElementById('g10_6').value = Number(op_10[6]);
    document.getElementById('g10_7').value = Number(op_10[7]);
    document.getElementById('g10_8').value = Number(op_10[8]);
    document.getElementById('g10_9').value = Number(op_10[9]);
    document.getElementById('g10_10').value = Number(op_10[10]);
    document.getElementById('g10_11').value = Number(op_10[11]);
    document.getElementById('g10_12').value = Number(op_10[12]);
}

//------------ Событие по кнопки "Расчитать" ----------------------

document.querySelector(".raschet_b1").onclick = raschet_b1;

function raschet_b1(){
    let g1_1 = Number(document.getElementById('g1_1').value);
    let g1_2 = Number(document.getElementById('g1_2').value);
    let g1_3 = Number(document.getElementById('g1_3').value);
    let g1_sred1 = Number(g1_1 + g1_2 + g1_3) / 3;
    document.getElementById('g1_sred1').value = g1_sred1.toFixed(1);
    let g1_4 = Number(document.getElementById('g1_4').value);
    let g1_5 = Number(document.getElementById('g1_5').value);
    let g1_6 = Number(document.getElementById('g1_6').value);
    let g1_sred2 = Number(g1_4 + g1_5 + g1_6) / 3;
    document.getElementById('g1_sred2').value = g1_sred2.toFixed(1);
    let g1_7 = Number(document.getElementById('g1_7').value);
    let g1_8 = Number(document.getElementById('g1_8').value);
    let g1_9 = Number(document.getElementById('g1_9').value);
    let g1_sred3 = Number(g1_7 + g1_8 + g1_9) / 3;
    document.getElementById('g1_sred3').value = g1_sred3.toFixed(1);
    let g1_10 = Number(document.getElementById('g1_10').value);
    let g1_11 = Number(document.getElementById('g1_11').value);
    let g1_12 = Number(document.getElementById('g1_12').value);
    let g1_sred4 = Number(g1_10 + g1_11 + g1_12) / 3;
    document.getElementById('g1_sred4').value = g1_sred4.toFixed(1);

    let g2_1 = Number(document.getElementById('g2_1').value);
    let g2_2 = Number(document.getElementById('g2_2').value);
    let g2_3 = Number(document.getElementById('g2_3').value);
    let g2_sred1 = Number(g2_1 + g2_2 + g2_3) / 3;
    document.getElementById('g2_sred1').value = g2_sred1.toFixed(1);
    let g2_4 = Number(document.getElementById('g2_4').value);
    let g2_5 = Number(document.getElementById('g2_5').value);
    let g2_6 = Number(document.getElementById('g2_6').value);
    let g2_sred2 = Number(g2_4 + g2_5 + g2_6) / 3;
    document.getElementById('g2_sred2').value = g2_sred2.toFixed(1);
    let g2_7 = Number(document.getElementById('g2_7').value);
    let g2_8 = Number(document.getElementById('g2_8').value);
    let g2_9 = Number(document.getElementById('g2_9').value);
    let g2_sred3 = Number(g2_7 + g2_8 + g2_9) / 3;
    document.getElementById('g2_sred3').value = g2_sred3.toFixed(1);
    let g2_10 = Number(document.getElementById('g2_10').value);
    let g2_11 = Number(document.getElementById('g2_11').value);
    let g2_12 = Number(document.getElementById('g2_12').value);
    let g2_sred4 = Number(g2_10 + g2_11 + g2_12) / 3;
    document.getElementById('g2_sred4').value = g2_sred4.toFixed(1);

    let g3_1 = Number(document.getElementById('g3_1').value);
    let g3_2 = Number(document.getElementById('g3_2').value);
    let g3_3 = Number(document.getElementById('g3_3').value);
    let g3_sred1 = Number(g3_1 + g3_2 + g3_3) / 3;
    document.getElementById('g3_sred1').value = g3_sred1.toFixed(1);
    let g3_4 = Number(document.getElementById('g3_4').value);
    let g3_5 = Number(document.getElementById('g3_5').value);
    let g3_6 = Number(document.getElementById('g3_6').value);
    let g3_sred2 = Number(g3_4 + g3_5 + g3_6) / 3;
    document.getElementById('g3_sred2').value = g3_sred2.toFixed(1);
    let g3_7 = Number(document.getElementById('g3_7').value);
    let g3_8 = Number(document.getElementById('g3_8').value);
    let g3_9 = Number(document.getElementById('g3_9').value);
    let g3_sred3 = Number(g3_7 + g3_8 + g3_9) / 3;
    document.getElementById('g3_sred3').value = g3_sred3.toFixed(1);
    let g3_10 = Number(document.getElementById('g3_10').value);
    let g3_11 = Number(document.getElementById('g3_11').value);
    let g3_12 = Number(document.getElementById('g3_12').value);
    let g3_sred4 = Number(g3_10 + g3_11 + g3_12) / 3;
    document.getElementById('g3_sred4').value = g3_sred4.toFixed(1);

    let g4_1 = Number(document.getElementById('g4_1').value);
    let g4_2 = Number(document.getElementById('g4_2').value);
    let g4_3 = Number(document.getElementById('g4_3').value);
    let g4_sred1 = Number(g4_1 + g4_2 + g4_3) / 3;
    document.getElementById('g4_sred1').value = g4_sred1.toFixed(1);
    let g4_4 = Number(document.getElementById('g4_4').value);
    let g4_5 = Number(document.getElementById('g4_5').value);
    let g4_6 = Number(document.getElementById('g4_6').value);
    let g4_sred2 = Number(g4_4 + g4_5 + g4_6) / 3;
    document.getElementById('g4_sred2').value = g4_sred2.toFixed(1);
    let g4_7 = Number(document.getElementById('g4_7').value);
    let g4_8 = Number(document.getElementById('g4_8').value);
    let g4_9 = Number(document.getElementById('g4_9').value);
    let g4_sred3 = Number(g4_7 + g4_8 + g4_9) / 3;
    document.getElementById('g4_sred3').value = g4_sred3.toFixed(1);
    let g4_10 = Number(document.getElementById('g4_10').value);
    let g4_11 = Number(document.getElementById('g4_11').value);
    let g4_12 = Number(document.getElementById('g4_12').value);
    let g4_sred4 = Number(g4_10 + g4_11 + g4_12) / 3;
    document.getElementById('g4_sred4').value = g4_sred4.toFixed(1);

    let g5_1 = Number(document.getElementById('g5_1').value);
    let g5_2 = Number(document.getElementById('g5_2').value);
    let g5_3 = Number(document.getElementById('g5_3').value);
    let g5_sred1 = Number(g5_1 + g5_2 + g5_3) / 3;
    document.getElementById('g5_sred1').value = g5_sred1.toFixed(1);
    let g5_4 = Number(document.getElementById('g5_4').value);
    let g5_5 = Number(document.getElementById('g5_5').value);
    let g5_6 = Number(document.getElementById('g5_6').value);
    let g5_sred2 = Number(g5_4 + g5_5 + g5_6) / 3;
    document.getElementById('g5_sred2').value = g5_sred2.toFixed(1);
    let g5_7 = Number(document.getElementById('g5_7').value);
    let g5_8 = Number(document.getElementById('g5_8').value);
    let g5_9 = Number(document.getElementById('g5_9').value);
    let g5_sred3 = Number(g5_7 + g5_8 + g5_9) / 3;
    document.getElementById('g5_sred3').value = g5_sred3.toFixed(1);
    let g5_10 = Number(document.getElementById('g5_10').value);
    let g5_11 = Number(document.getElementById('g5_11').value);
    let g5_12 = Number(document.getElementById('g5_12').value);
    let g5_sred4 = Number(g5_10 + g5_11 + g5_12) / 3;
    document.getElementById('g5_sred4').value = g5_sred4.toFixed(1);

    let g6_1 = Number(document.getElementById('g6_1').value);
    let g6_2 = Number(document.getElementById('g6_2').value);
    let g6_3 = Number(document.getElementById('g6_3').value);
    let g6_sred1 = Number(g6_1 + g6_2 + g6_3) / 3;
    document.getElementById('g6_sred1').value = g6_sred1.toFixed(1);
    let g6_4 = Number(document.getElementById('g6_4').value);
    let g6_5 = Number(document.getElementById('g6_5').value);
    let g6_6 = Number(document.getElementById('g6_6').value);
    let g6_sred2 = Number(g6_4 + g6_5 + g6_6) / 3;
    document.getElementById('g6_sred2').value = g6_sred2.toFixed(1);
    let g6_7 = Number(document.getElementById('g6_7').value);
    let g6_8 = Number(document.getElementById('g6_8').value);
    let g6_9 = Number(document.getElementById('g6_9').value);
    let g6_sred3 = Number(g6_7 + g6_8 + g6_9) / 3;
    document.getElementById('g6_sred3').value = g6_sred3.toFixed(1);
    let g6_10 = Number(document.getElementById('g6_10').value);
    let g6_11 = Number(document.getElementById('g6_11').value);
    let g6_12 = Number(document.getElementById('g6_12').value);
    let g6_sred4 = Number(g6_10 + g6_11 + g6_12) / 3;
    document.getElementById('g6_sred4').value = g6_sred4.toFixed(1);

    let g7_1 = Number(document.getElementById('g7_1').value);
    let g7_2 = Number(document.getElementById('g7_2').value);
    let g7_3 = Number(document.getElementById('g7_3').value);
    let g7_sred1 = Number(g7_1 + g7_2 + g7_3) / 3;
    document.getElementById('g7_sred1').value = g7_sred1.toFixed(1);
    let g7_4 = Number(document.getElementById('g7_4').value);
    let g7_5 = Number(document.getElementById('g7_5').value);
    let g7_6 = Number(document.getElementById('g7_6').value);
    let g7_sred2 = Number(g7_4 + g7_5 + g7_6) / 3;
    document.getElementById('g7_sred2').value = g7_sred2.toFixed(1);
    let g7_7 = Number(document.getElementById('g7_7').value);
    let g7_8 = Number(document.getElementById('g7_8').value);
    let g7_9 = Number(document.getElementById('g7_9').value);
    let g7_sred3 = Number(g7_7 + g7_8 + g7_9) / 3;
    document.getElementById('g7_sred3').value = g7_sred3.toFixed(1);
    let g7_10 = Number(document.getElementById('g7_10').value);
    let g7_11 = Number(document.getElementById('g7_11').value);
    let g7_12 = Number(document.getElementById('g7_12').value);
    let g7_sred4 = Number(g7_10 + g7_11 + g7_12) / 3;
    document.getElementById('g7_sred4').value = g7_sred4.toFixed(1);

    let g8_1 = Number(document.getElementById('g8_1').value);
    let g8_2 = Number(document.getElementById('g8_2').value);
    let g8_3 = Number(document.getElementById('g8_3').value);
    let g8_sred1 = Number(g8_1 + g8_2 + g8_3) / 3;
    document.getElementById('g8_sred1').value = g8_sred1.toFixed(1);
    let g8_4 = Number(document.getElementById('g8_4').value);
    let g8_5 = Number(document.getElementById('g8_5').value);
    let g8_6 = Number(document.getElementById('g8_6').value);
    let g8_sred2 = Number(g8_4 + g8_5 + g8_6) / 3;
    document.getElementById('g8_sred2').value = g8_sred2.toFixed(1);
    let g8_7 = Number(document.getElementById('g8_7').value);
    let g8_8 = Number(document.getElementById('g8_8').value);
    let g8_9 = Number(document.getElementById('g8_9').value);
    let g8_sred3 = Number(g8_7 + g8_8 + g8_9) / 3;
    document.getElementById('g8_sred3').value = g8_sred3.toFixed(1);
    let g8_10 = Number(document.getElementById('g8_10').value);
    let g8_11 = Number(document.getElementById('g8_11').value);
    let g8_12 = Number(document.getElementById('g8_12').value);
    let g8_sred4 = Number(g8_10 + g8_11 + g8_12) / 3;
    document.getElementById('g8_sred4').value = g8_sred4.toFixed(1);

    let g9_1 = Number(document.getElementById('g9_1').value);
    let g9_2 = Number(document.getElementById('g9_2').value);
    let g9_3 = Number(document.getElementById('g9_3').value);
    let g9_sred1 = Number(g9_1 + g9_2 + g9_3) / 3;
    document.getElementById('g9_sred1').value = g9_sred1.toFixed(1);
    let g9_4 = Number(document.getElementById('g9_4').value);
    let g9_5 = Number(document.getElementById('g9_5').value);
    let g9_6 = Number(document.getElementById('g9_6').value);
    let g9_sred2 = Number(g9_4 + g9_5 + g9_6) / 3;
    document.getElementById('g9_sred2').value = g9_sred2.toFixed(1);
    let g9_7 = Number(document.getElementById('g9_7').value);
    let g9_8 = Number(document.getElementById('g9_8').value);
    let g9_9 = Number(document.getElementById('g9_9').value);
    let g9_sred3 = Number(g9_7 + g9_8 + g9_9) / 3;
    document.getElementById('g9_sred3').value = g9_sred3.toFixed(1);
    let g9_10 = Number(document.getElementById('g9_10').value);
    let g9_11 = Number(document.getElementById('g9_11').value);
    let g9_12 = Number(document.getElementById('g9_12').value);
    let g9_sred4 = Number(g9_10 + g9_11 + g9_12) / 3;
    document.getElementById('g9_sred4').value = g9_sred4.toFixed(1);

    let g10_1 = Number(document.getElementById('g10_1').value);
    let g10_2 = Number(document.getElementById('g10_2').value);
    let g10_3 = Number(document.getElementById('g10_3').value);
    let g10_sred1 = Number(g10_1 + g10_2 + g10_3) / 3;
    document.getElementById('g10_sred1').value = g10_sred1.toFixed(1);
    let g10_4 = Number(document.getElementById('g10_4').value);
    let g10_5 = Number(document.getElementById('g10_5').value);
    let g10_6 = Number(document.getElementById('g10_6').value);
    let g10_sred2 = Number(g10_4 + g10_5 + g10_6) / 3;
    document.getElementById('g10_sred2').value = g10_sred2.toFixed(1);
    let g10_7 = Number(document.getElementById('g10_7').value);
    let g10_8 = Number(document.getElementById('g10_8').value);
    let g10_9 = Number(document.getElementById('g10_9').value);
    let g10_sred3 = Number(g10_7 + g10_8 + g10_9) / 3;
    document.getElementById('g10_sred3').value = g10_sred3.toFixed(1);
    let g10_10 = Number(document.getElementById('g10_10').value);
    let g10_11 = Number(document.getElementById('g10_11').value);
    let g10_12 = Number(document.getElementById('g10_12').value);
    let g10_sred4 = Number(g10_10 + g10_11 + g10_12) / 3;
    document.getElementById('g10_sred4').value = g10_sred4.toFixed(1);

}


// ------------ Событие по кнопки "Очистить" ----------------------
document.querySelector(".reset").onclick = reset;

function reset(){
    document.querySelector('.z_1').value = '';
    document.querySelector('.z_2').value = '';
    document.querySelector('.z_3').value = '';
    document.querySelector('.z_4').value = '';

    document.getElementById('g1_massa').value = '';
    document.getElementById('g1_1').value = '';
    document.getElementById('g1_2').value = '';
    document.getElementById('g1_3').value = '';
    document.getElementById('g1_sred1').value = '';
    document.getElementById('g1_4').value = '';
    document.getElementById('g1_5').value = '';
    document.getElementById('g1_6').value = '';
    document.getElementById('g1_sred2').value = '';
    document.getElementById('g1_7').value = '';
    document.getElementById('g1_8').value = '';
    document.getElementById('g1_9').value = '';
    document.getElementById('g1_sred3').value = '';
    document.getElementById('g1_10').value = '';
    document.getElementById('g1_11').value = '';
    document.getElementById('g1_12').value = '';
    document.getElementById('g1_sred4').value = '';

    document.getElementById('g2_massa').value = '';
    document.getElementById('g2_1').value = '';
    document.getElementById('g2_2').value = '';
    document.getElementById('g2_3').value = '';
    document.getElementById('g2_sred1').value = '';
    document.getElementById('g2_4').value = '';
    document.getElementById('g2_5').value = '';
    document.getElementById('g2_6').value = '';
    document.getElementById('g2_sred2').value = '';
    document.getElementById('g2_7').value = '';
    document.getElementById('g2_8').value = '';
    document.getElementById('g2_9').value = '';
    document.getElementById('g2_sred3').value = '';
    document.getElementById('g2_10').value = '';
    document.getElementById('g2_11').value = '';
    document.getElementById('g2_12').value = '';
    document.getElementById('g2_sred4').value = '';

    document.getElementById('g3_massa').value = '';
    document.getElementById('g3_1').value = '';
    document.getElementById('g3_2').value = '';
    document.getElementById('g3_3').value = '';
    document.getElementById('g3_sred1').value = '';
    document.getElementById('g3_4').value = '';
    document.getElementById('g3_5').value = '';
    document.getElementById('g3_6').value = '';
    document.getElementById('g3_sred2').value = '';
    document.getElementById('g3_7').value = '';
    document.getElementById('g3_8').value = '';
    document.getElementById('g3_9').value = '';
    document.getElementById('g3_sred3').value = '';
    document.getElementById('g3_10').value = '';
    document.getElementById('g3_11').value = '';
    document.getElementById('g3_12').value = '';
    document.getElementById('g3_sred4').value = '';

    document.getElementById('g4_massa').value = '';
    document.getElementById('g4_1').value = '';
    document.getElementById('g4_2').value = '';
    document.getElementById('g4_3').value = '';
    document.getElementById('g4_sred1').value = '';
    document.getElementById('g4_4').value = '';
    document.getElementById('g4_5').value = '';
    document.getElementById('g4_6').value = '';
    document.getElementById('g4_sred2').value = '';
    document.getElementById('g4_7').value = '';
    document.getElementById('g4_8').value = '';
    document.getElementById('g4_9').value = '';
    document.getElementById('g4_sred3').value = '';
    document.getElementById('g4_10').value = '';
    document.getElementById('g4_11').value = '';
    document.getElementById('g4_12').value = '';
    document.getElementById('g4_sred4').value = '';

    document.getElementById('g5_massa').value = '';
    document.getElementById('g5_1').value = '';
    document.getElementById('g5_2').value = '';
    document.getElementById('g5_3').value = '';
    document.getElementById('g5_sred1').value = '';
    document.getElementById('g5_4').value = '';
    document.getElementById('g5_5').value = '';
    document.getElementById('g5_6').value = '';
    document.getElementById('g5_sred2').value = '';
    document.getElementById('g5_7').value = '';
    document.getElementById('g5_8').value = '';
    document.getElementById('g5_9').value = '';
    document.getElementById('g5_sred3').value = '';
    document.getElementById('g5_10').value = '';
    document.getElementById('g5_11').value = '';
    document.getElementById('g5_12').value = '';
    document.getElementById('g5_sred4').value = '';

    document.getElementById('g6_massa').value = '';
    document.getElementById('g6_1').value = '';
    document.getElementById('g6_2').value = '';
    document.getElementById('g6_3').value = '';
    document.getElementById('g6_sred1').value = '';
    document.getElementById('g6_4').value = '';
    document.getElementById('g6_5').value = '';
    document.getElementById('g6_6').value = '';
    document.getElementById('g6_sred2').value = '';
    document.getElementById('g6_7').value = '';
    document.getElementById('g6_8').value = '';
    document.getElementById('g6_9').value = '';
    document.getElementById('g6_sred3').value = '';
    document.getElementById('g6_10').value = '';
    document.getElementById('g6_11').value = '';
    document.getElementById('g6_12').value = '';
    document.getElementById('g6_sred4').value = '';

    document.getElementById('g7_massa').value = '';
    document.getElementById('g7_1').value = '';
    document.getElementById('g7_2').value = '';
    document.getElementById('g7_3').value = '';
    document.getElementById('g7_sred1').value = '';
    document.getElementById('g7_4').value = '';
    document.getElementById('g7_5').value = '';
    document.getElementById('g7_6').value = '';
    document.getElementById('g7_sred2').value = '';
    document.getElementById('g7_7').value = '';
    document.getElementById('g7_8').value = '';
    document.getElementById('g7_9').value = '';
    document.getElementById('g7_sred3').value = '';
    document.getElementById('g7_10').value = '';
    document.getElementById('g7_11').value = '';
    document.getElementById('g7_12').value = '';
    document.getElementById('g7_sred4').value = '';

    document.getElementById('g8_massa').value = '';
    document.getElementById('g8_1').value = '';
    document.getElementById('g8_2').value = '';
    document.getElementById('g8_3').value = '';
    document.getElementById('g8_sred1').value = '';
    document.getElementById('g8_4').value = '';
    document.getElementById('g8_5').value = '';
    document.getElementById('g8_6').value = '';
    document.getElementById('g8_sred2').value = '';
    document.getElementById('g8_7').value = '';
    document.getElementById('g8_8').value = '';
    document.getElementById('g8_9').value = '';
    document.getElementById('g8_sred3').value = '';
    document.getElementById('g8_10').value = '';
    document.getElementById('g8_11').value = '';
    document.getElementById('g8_12').value = '';
    document.getElementById('g8_sred4').value = '';

    document.getElementById('g9_massa').value = '';
    document.getElementById('g9_1').value = '';
    document.getElementById('g9_2').value = '';
    document.getElementById('g9_3').value = '';
    document.getElementById('g9_sred1').value = '';
    document.getElementById('g9_4').value = '';
    document.getElementById('g9_5').value = '';
    document.getElementById('g9_6').value = '';
    document.getElementById('g9_sred2').value = '';
    document.getElementById('g9_7').value = '';
    document.getElementById('g9_8').value = '';
    document.getElementById('g9_9').value = '';
    document.getElementById('g9_sred3').value = '';
    document.getElementById('g9_10').value = '';
    document.getElementById('g9_11').value = '';
    document.getElementById('g9_12').value = '';
    document.getElementById('g9_sred4').value = '';

    document.getElementById('g10_massa').value = '';
    document.getElementById('g10_1').value = '';
    document.getElementById('g10_2').value = '';
    document.getElementById('g10_3').value = '';
    document.getElementById('g10_sred1').value = '';
    document.getElementById('g10_4').value = '';
    document.getElementById('g10_5').value = '';
    document.getElementById('g10_6').value = '';
    document.getElementById('g10_sred2').value = '';
    document.getElementById('g10_7').value = '';
    document.getElementById('g10_8').value = '';
    document.getElementById('g10_9').value = '';
    document.getElementById('g10_sred3').value = '';
    document.getElementById('g10_10').value = '';
    document.getElementById('g10_11').value = '';
    document.getElementById('g10_12').value = '';
    document.getElementById('g10_sred4').value = '';
}
