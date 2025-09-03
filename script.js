// ボタンと非表示にする要素を取得
const toggleButton = document.getElementById('toggleButton');
const toggleElement = document.getElementById('toggleElement');

// ボタンクリック時のイベントリスナーを設定
toggleButton.addEventListener('click', () => {
    // 要素の表示状態を切り替える
    if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
        toggleElement.style.display = 'block';
    } else {
        toggleElement.style.display = 'none';
    }
});

function updateResults() {
    // 入力値を取得

    //筑波方式
    const inputText1 = document.getElementById('inputText1').value;
    const result1 = inputText1
        .replace(/O/g, 'ɔ')
        .replace(/E/g, 'ɛ')
        .replace(/\^a/g, 'ᵃ')
        .replace(/\^ɛ/g, 'ᵋ')
        .replace(/\^ɔ/g, 'ᵓ')
        .replace(/\^w/g, 'ʷ')
        .replace(/\^y/g, 'ʸ')
        .replace(/3/g, 'ʔ')
        .replace(/c/g, 'ʕ')
        .replace(/#/g, '3')
        .replace(/H/g, 'ħ')
        .replace(/x/g, 'š')
        .replace(/X/g, 'Š')
        .replace(/j/g, 'ś')
        .replace(/sv/g, 'š')
        .replace(/s'/g, 'ś')
        .replace(/T/g, 'ṭ')
        .replace(/K/g, 'ḳ')
        .replace(/q/g, 'ḳ')
        .replace(/S/g, 'ṣ')
        .replace(/ṣv/g, 'Š')
        .replace(/p_/g, 'p̄')
        .replace(/t_/g, 'ṯ')
        .replace(/k_/g, 'ḵ')
        .replace(/b_/g, 'ḇ')
        .replace(/d_/g, 'ḏ')
        .replace(/g_/g, 'ḡ')
        .replace(/\^h/g, 'ʰ')
        .replace(/\^ʔ/g, 'ˀ')
        .replace(/a'/g, 'á')
        .replace(/e'/g, 'é')
        .replace(/i'/g, 'í')
        .replace(/o'/g, 'ó')
        .replace(/u'/g, 'ú')
        .replace(/ɛ'/g, 'ɛ́')
        .replace(/ɔ'/g, 'ɔ́')
        .replace(/a\\/g, 'à')
        .replace(/e\\/g, 'è')
        .replace(/i\\/g, 'ì')
        .replace(/o\\/g, 'ò')
        .replace(/u\\/g, 'ù')
        .replace(/ɛ\\/g, 'ɛ̀')
        .replace(/ɔ\\/g, 'ɔ̀');


    //結果
    document.getElementById('result1').textContent = result1;

    //小脇方式
    const inputText2 = document.getElementById('inputText2').value;
    const result2 = inputText2
        .replace(/oo/g, 'ō')
        .replace(/ee/g, 'ē')
        .replace(/aa/g, 'ā')
        .replace(/e\^/g, 'ê')
        .replace(/ê\./g, 'ệ')
        .replace(/o\^/g, 'ô')
        .replace(/i\^/g, 'î')
        .replace(/u\^/g, 'û')
        .replace(/@/g, 'ə')
        .replace(/əa/g, 'ă')
        .replace(/əe/g, 'ĕ')
        .replace(/əo/g, 'ŏ')
        .replace(/au/g, 'ă')
        .replace(/eu/g, 'ĕ')
        .replace(/ou/g, 'ŏ')
        .replace(/3/g, 'ʾ')
        .replace(/c/g, 'ʿ')
        .replace(/#/g, '3')
        .replace(/h\./g, 'ḥ')
        .replace(/sv/g, 'š')
        .replace(/s'/g, 'ś')
        .replace(/t\./g, 'ṭ')
        .replace(/s\./g, 'ṣ')
        .replace(/p_/g, 'p̄')
        .replace(/t_/g, 'ṯ')
        .replace(/k_/g, 'ḵ')
        .replace(/b_/g, 'ḇ')
        .replace(/d_/g, 'ḏ')
        .replace(/g_/g, 'ḡ')
        .replace(/h_/g, 'ẖ')
        .replace(/a'/g, 'á')
        .replace(/e'/g, 'é')
        .replace(/i'/g, 'í')
        .replace(/o'/g, 'ó')
        .replace(/u'/g, 'ú')
        .replace(/ō'/g, 'ṓ')
        .replace(/ē'/g, 'ḗ')
        .replace(/ā'/g, 'ā́')
        .replace(/ê'/g, 'ê')
        .replace(/ệ'/g, 'ệ́')
        .replace(/ô'/g, 'ố')
        .replace(/î'/g, 'î́')
        .replace(/û'/g, 'û́');

    //結果
    document.getElementById('result2').textContent = result2;


    // //発音記号を生成
    // const result3_1 = inputText2
    //     .replace(/yhwh/g, '3ad_oonay')
    //     .replace(/YHWH/g, '3ad_oonay')
    //     .replace(/oo/g, 'o')
    //     .replace(/ee/g, 'e')
    //     .replace(/aa/g, 'a')
    //     .replace(/e\^/g, 'e')
    //     .replace(/ê\./g, 'e')
    //     .replace(/o\^/g, 'o')
    //     .replace(/i\^/g, 'i')
    //     .replace(/u\^/g, 'u')
    //     .replace(/@/g, 'ə')
    //     .replace(/əa/g, 'a')
    //     .replace(/əe/g, 'e')
    //     .replace(/əo/g, 'o')
    //     .replace(/au/g, 'a')
    //     .replace(/eu/g, 'e')
    //     .replace(/ou/g, 'o')
    //     .replace(/3/g, 'G')
    //     .replace(/c/g, 'G')
    //     .replace(/#/g, '3')
    //     .replace(/h\./g, 'ꭓ')
    //     .replace(/sv/g, 'ʃ')
    //     .replace(/s'/g, 's')
    //     .replace(/t\./g, 't')
    //     .replace(/s\./g, 'ts')
    //     .replace(/p_/g, 'f')
    //     .replace(/t_/g, 't')
    //     .replace(/k_/g, 'ꭓ')
    //     .replace(/b_/g, 'v')
    //     .replace(/d_/g, 'd')
    //     .replace(/g_/g, 'ɡ')
    //     .replace(/h_/g, '')
    //     .replace(/a'/g, 'á')
    //     .replace(/e'/g, 'é')
    //     .replace(/i'/g, 'í')
    //     .replace(/o'/g, 'ó')
    //     .replace(/u'/g, 'ú')
    //     .replace(/ō'/g, 'ó')
    //     .replace(/ē'/g, 'é')
    //     .replace(/ā'/g, 'á')
    //     .replace(/ê'/g, 'é')
    //     .replace(/ệ'/g, 'é')
    //     .replace(/ô'/g, 'ó')
    //     .replace(/î'/g, 'í')
    //     .replace(/û'/g, 'ú')
    //     .replace(/w/g, 'v')
    //     .replace(/r/g, 'ʁ')
    //     .replace(/y/g, 'j')
    //     .replace(/-/g, ' ');

    // //ダゲシュの処理
    // const result3_2 = result3_1
    //     .replace(/bb/g, 'b')
    //     .replace(/ɡɡ/g, 'ɡ')
    //     .replace(/dd/g, 'd')
    //     .replace(/vv/g, 'v')
    //     .replace(/zz/g, 'z')
    //     .replace(/tt/g, 't')
    //     .replace(/jj/g, 'j')
    //     .replace(/kk/g, 'k')
    //     .replace(/ll/g, 'l')
    //     .replace(/mm/g, 'm')
    //     .replace(/nn/g, 'n')
    //     .replace(/ss/g, 's')
    //     .replace(/pp/g, 'p')
    //     .replace(/tsts/g, 'ts')
    //     .replace(/ʃʃ/g, 'ʃ');


    // //シュヴァとhの処理
    // const result3_3 = result3_2
    //     .replace(/\syə/g, ' ye')
    //     .replace(/\svə/g, ' ve')
    //     .replace(/\smə/g, ' me')
    //     .replace(/\snə/g, ' ne')
    //     .replace(/\slə/g, ' le')
    //     .replace(/\srə/g, ' re')
    //     .replace(/^yə/g, 'ye')
    //     .replace(/^və/g, 've')
    //     .replace(/^mə/g, 'me')
    //     .replace(/^nə/g, 'ne')
    //     .replace(/^lə/g, 'le')
    //     .replace(/^rə/g, 're')
    //     .replace(/ə(?=G|h)/g, 'e')
    //     .replace(/h\s/g, ' ')
    //     .replace(/h$/g, '')
    //     .replace(/G/g, '')
    //     .replace(/ə/g, '');

    // //結果
    // document.getElementById('result3').textContent = result3_3





    //小脇方式から発音記号を生成
    //yhwh、ダゲシュの処理
    const pronunciation1 = result2
        .replace(/yhwh/g, 'ʾăḏōnay')
        .replace(/YHWH/g, 'ʾăḏōnay')
        .replace(/bb/g, 'b')
        .replace(/gg/g, 'g')
        .replace(/dd/g, 'd')
        .replace(/ww/g, 'w')
        .replace(/zz/g, 'z')
        .replace(/tt/g, 't')
        .replace(/yy/g, 'y')
        .replace(/kk/g, 'k')
        .replace(/ll/g, 'l')
        .replace(/mm/g, 'm')
        .replace(/nn/g, 'n')
        .replace(/ss/g, 's')
        .replace(/pp/g, 'p')
        .replace(/ṣṣ/g, 'ṣ')
        .replace(/šš/g, 'š')
        .replace(/nn/g, 'n')
        .replace(/ss/g, 's')
        .replace(/śś/g, 'ś')
        .replace(/ṭṭ/g, 'ṭ')
        .replace(/qq/g, 'q');



    //記号付き母音の変換
    const pronunciation2 = pronunciation1
        .replace(/ē/g, 'e')
        .replace(/ā/g, 'a')
        .replace(/ō/g, 'o')
        .replace(/ē/g, 'e')
        .replace(/î/g, 'i')
        .replace(/ê/g, 'e')
        .replace(/ệ/g, 'e')
        .replace(/ô/g, 'o')
        .replace(/û/g, 'u')
        .replace(/ă/g, 'a')
        .replace(/ĕ/g, 'e')
        .replace(/ŏ/g, 'o');

    //記号付き子音の変換
    const pronunciation3 = pronunciation2
        .replace(/ḇ/g, 'v')
        .replace(/ḡ/g, 'ɡ')
        .replace(/ḏ/g, 'd')
        .replace(/ḵ/g, 'ꭓ')
        .replace(/p̄/g, 'f')
        .replace(/ṯ/g, 't')
        .replace(/ṭ/g, 't')
        .replace(/ṣ/g, 'ts')
        .replace(/ḥ/g, 'ꭓ')
        .replace(/š/g, 'ʃ')
        .replace(/ś/g, 's')
        .replace(/ṯ/g, 't');

    //記号なし子音の変換。アレフとアインはGとおく。
    const pronunciation4 = pronunciation3
        .replace(/g/g, 'ɡ')
        .replace(/q/g, 'k')
        .replace(/w/g, 'v')
        .replace(/y/g, 'j')
        .replace(/r/g, 'ʁ')
        .replace(/ʾ/g, 'G')
        .replace(/ʿ/g, 'G')
        .replace(/ô/g, 'o')
        .replace(/û/g, 'u');

    //シュヴァの判定と語末h・マピークの処理
    const pronunciation5 = pronunciation4
        .replace(/\sjə/g, ' je')
        .replace(/\svə/g, ' ve')
        .replace(/\smə/g, ' me')
        .replace(/\snə/g, ' ne')
        .replace(/\slə/g, ' le')
        .replace(/\sʁə/g, ' ʁe')
        .replace(/^jə/g, 'je')
        .replace(/^və/g, 've')
        .replace(/^mə/g, 'me')
        .replace(/^nə/g, 'ne')
        .replace(/^lə/g, 'le')
        .replace(/^ʁə/g, 'ʁe')
        .replace(/-jə/g, '-je')
        .replace(/-və/g, '-ve')
        .replace(/-mə/g, '-me')
        .replace(/-nə/g, '-ne')
        .replace(/-lə/g, '-le')
        .replace(/-ʁə/g, '-ʁe')
        .replace(/ə(?=G|h)/g, 'e')
        .replace(/h\s/g, ' ')
        .replace(/h$/g, '')
        .replace(/h\:/g, ':')
        .replace(/h-/g, '-')
        .replace(/G/g, '')
        .replace(/ə/g, '');

//結果
    document.getElementById('result3').textContent = pronunciation5;






}


// 入力イベントでリアルタイム更新
document.getElementById('inputText1').addEventListener('input', updateResults);
document.getElementById('inputText2').addEventListener('input', updateResults);