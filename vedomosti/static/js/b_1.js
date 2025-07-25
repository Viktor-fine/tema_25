// Событие по нажатию по кнопки ПРИМЕР

document.querySelector(".primer1_b1").onclick = primer_b1;

function primer_b1(){
    let zagolovok_b1=['Ковшовый погрузчик',
                        'НЭС',
                        '28.05.2025',
                        'Манометр, секундомер, рулетка, масса груза 500кг, объём ковша 3м ',];

    let op_1 = [100, 14, 16, 15,
                    46, 45, 47,
                    45, 46, 44,
                    2.5, 2.6, 2.4];

    let op_2 = [200, 13, 14, 15,
                    45, 47, 46,
                    49, 49, 50,
                    2.6, 2.7, 2.8];

    let op_3 = [300, 14, 13, 15,
                    48, 47, 46,
                    50, 49, 51,
                    2.8, 2.9, 2.7];

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
}
