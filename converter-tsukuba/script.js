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
    const inputText = document.getElementById('inputText').value;

    //翻字
    const transliteration = inputText
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
    document.getElementById('transliteration').textContent = transliteration;

    //音訳
    const transcription = transliteration
        .replace(/\./g, '')
        .replace(/ʸ/g, '')
        .replace(/ʷ/g, '')
        .replace(/ˀ/g, '')
        .replace(/ʰ/g, '');


    //結果
    document.getElementById('transcription').textContent = transcription;

    //小脇方式に変換
    //前処理：母音はv000、子音はc00の形式ですべて置き換え。上付きはu0の形式。母音は1桁目がアクセント記号、2桁目が甲乙。子音は1桁目が調音方法の区分。0 = voiceless obstruent, 1 = voiced obstruent, 2 = emphatic obstruent, 3 = fricative, 4 = sonorant, 5 = guttural. 1桁目が0から2の2桁目は調音点が対応。
    //先にアクセント符号付きのものを処理。
    const kowaki1 = transliteration
        .replace(/á/g, 'v103')
        .replace(/é/g, 'v111')
        .replace(/í/g, 'v101')
        .replace(/ó/g, 'v112')
        .replace(/ú/g, 'v105')
        .replace(/ɛ́/g, 'v102')
        .replace(/ɔ́/g, 'v104')
        .replace(/à/g, 'v203')
        .replace(/è/g, 'v211')
        .replace(/ì/g, 'v201')
        .replace(/ò/g, 'v212')
        .replace(/ù/g, 'v205')
        .replace(/ɛ̀/g, 'v202')
        .replace(/ɔ̀/g, 'v204')
        .replace(/p̄/g, 'c05')
        .replace(/ṯ/g, 'c06')
        .replace(/ḵ/g, 'c07')
        .replace(/ḇ/g, 'c15')
        .replace(/ḏ/g, 'c16')
        .replace(/ḡ/g, 'c17')
        .replace(/ṭ/g, 'c22')
        .replace(/ṣ/g, 'c23')
        .replace(/ḳ/g, 'c24')
        .replace(/ś/g, 'c31')
        .replace(/š/g, 'c32')
        .replace(/Š/g, 'c33');

    //アクセント記号なし
    const kowaki2 = kowaki1
        .replace(/i/g, 'v001')
        .replace(/ɛ/g, 'v002')
        .replace(/a/g, 'v003')
        .replace(/ɔ/g, 'v004')
        .replace(/u/g, 'v005')
        .replace(/e/g, 'v011')
        .replace(/o/g, 'v012')
        .replace(/p/g, 'c01')
        .replace(/t/g, 'c02')
        .replace(/s/g, 'c03')
        .replace(/k/g, 'c04')
        .replace(/b/g, 'c11')
        .replace(/d/g, 'c12')
        .replace(/z/g, 'c13')
        .replace(/g/g, 'c14')
        .replace(/m/g, 'c41')
        .replace(/n/g, 'c42')
        .replace(/w/g, 'c43')
        .replace(/y/g, 'c44')
        .replace(/l/g, 'c45')
        .replace(/ʔ/g, 'c51')
        .replace(/h/g, 'c52')
        .replace(/ʕ/g, 'c53')
        .replace(/ħ/g, 'c54')
        .replace(/r/g, 'c55')
        .replace(/ᵃ/g, 'u1')
        .replace(/ᵋ/g, 'u2')
        .replace(/ᵓ/g, 'u3')
        .replace(/ʷ/g, 'u4')
        .replace(/ʸ/g, 'u5')
        .replace(/ˀ/g, 'u6')
        .replace(/ʰ/g, 'u7');

    //シュヴァを挿入する
    const kowaki3 = kowaki2
        .replace(/(?<=^c..|\sc..|-c..)\./g, 'ə.')
        .replace(/(?<=c..c..)\./g, 'ə.')
        .replace(/(?<=v.1.\.c..)\./g, 'ə.')
        .replace(/(?<=v.01\.u5\.c..)\./g, 'ə.')
        .replace(/(?<=v.02\.u5\.c..)\./g, 'ə.')
        .replace(/(?<=v.11\.u5\.c..)\./g, 'ə.')
        .replace(/(?<=v.12\.u4\.c..)\./g, 'ə.')
        .replace(/(?<=v.05\.u4\.c..)\./g, 'ə.')
        .replace(/(?<=\.c..\.c..)\./g, 'ə.');


    //カマツを判定する
    const kowaki4 = kowaki3
        .replace(/v004(?=\.c..\.)/g, 'v006')
        .replace(/(?<=\s|^|-|c41v001\.c04)c04v004\.c45(?=\s|-)/g, 'c04v006.c45')
        .replace(/(?<=\s|^|-|c11ə\.|c04ə\.|c45ə\.|c43ə\.)c07v004\.c45(?=\s|-)/g, 'c07v006.c45');

    //先読みのパタハとマッピークを判定する。先に先読みパタハの前にアクセントをつけておく。アレフとヘーの上付きも戻しておく
    const kowaki5 = kowaki4
        .replace(/v0(?=..\.u1)/g, 'v1')
        .replace(/v0(?=..\.u.\.u1)/g, 'v1')
        .replace(/\.u1/g, '.v003')
        .replace(/\.c52(?=\s|$|\:)/g, 'c56')
        .replace(/u6/g, 'c51')
        .replace(/u7/g, 'c52');

    //語中のマレー表記を処理する。î=v021, ê=v022, ệ=v023, ô=v024, û=v025.
    const kowaki6 = kowaki5
        .replace(/v001\.u5/g, 'v021')
        .replace(/v011\.u5/g, 'v022')
        .replace(/v002\.u5/g, 'v023')
        .replace(/v012\.u4/g, 'v024')
        .replace(/v005\.u4/g, 'v025')
        .replace(/v101\.u5/g, 'v121')
        .replace(/v111\.u5/g, 'v122')
        .replace(/v102\.u5/g, 'v123')
        .replace(/v112\.u4/g, 'v124')
        .replace(/v105\.u4/g, 'v125')
        .replace(/v201\.u5/g, 'v221')
        .replace(/v211\.u5/g, 'v222')
        .replace(/v202\.u5/g, 'v223')
        .replace(/v212\.u4/g, 'v224')
        .replace(/v205\.u4/g, 'v225');

    //母音を小脇方式に変換する。先に複合シュヴァを処理。メテグは無視
    const kowaki7 = kowaki6
        .replace(/u1/g, 'ă')
        .replace(/u2/g, 'ĕ')
        .replace(/u3/g, 'ŏ')
        .replace(/v001/g, 'i')
        .replace(/v002/g, 'e')
        .replace(/v003/g, 'a')
        .replace(/v004/g, 'ā')
        .replace(/v005/g, 'u')
        .replace(/v006/g, 'o')
        .replace(/v011/g, 'ē')
        .replace(/v012/g, 'ō')
        .replace(/v021/g, 'î')
        .replace(/v022/g, 'ê')
        .replace(/v023/g, 'ệ')
        .replace(/v024/g, 'ô')
        .replace(/v025/g, 'û')
        .replace(/v101/g, 'í')
        .replace(/v102/g, 'é')
        .replace(/v103/g, 'á')
        .replace(/v104/g, 'ā́')
        .replace(/v105/g, 'ú')
        .replace(/v106/g, 'ó')
        .replace(/v111/g, 'ḗ')
        .replace(/v112/g, 'ṓ')
        .replace(/v121/g, 'î́')
        .replace(/v122/g, 'ế')
        .replace(/v123/g, 'ệ́')
        .replace(/v124/g, 'ố')
        .replace(/v125/g, 'û́')
        .replace(/v201/g, 'i')
        .replace(/v202/g, 'e')
        .replace(/v203/g, 'a')
        .replace(/v204/g, 'ā')
        .replace(/v205/g, 'u')
        .replace(/v206/g, 'o')
        .replace(/v211/g, 'ē')
        .replace(/v212/g, 'ō')
        .replace(/v221/g, 'î')
        .replace(/v222/g, 'ê')
        .replace(/v223/g, 'ệ')
        .replace(/v224/g, 'ô')
        .replace(/v225/g, 'û');

    //子音を小脇方式に変換する。ついでにピリオド削除
    const kowaki8 = kowaki7
        .replace(/c01/g, 'p')
        .replace(/c02/g, 't')
        .replace(/c03/g, 's')
        .replace(/c04/g, 'k')
        .replace(/c05/g, 'p̄')
        .replace(/c06/g, 'ṯ')
        .replace(/c07/g, 'ḵ')
        .replace(/c11/g, 'b')
        .replace(/c12/g, 'd')
        .replace(/c13/g, 'z')
        .replace(/c14/g, 'g')
        .replace(/c15/g, 'ḇ')
        .replace(/c16/g, 'ḏ')
        .replace(/c17/g, 'ḡ')
        .replace(/c22/g, 'ṭ')
        .replace(/c23/g, 'ṣ')
        .replace(/c24/g, 'q')
        .replace(/c31/g, 'ś')
        .replace(/c32/g, 'š')
        .replace(/c33/g, 'Š')
        .replace(/c41/g, 'm')
        .replace(/c42/g, 'n')
        .replace(/c43/g, 'w')
        .replace(/c44/g, 'y')
        .replace(/c45/g, 'l')
        .replace(/c51/g, 'ʾ')
        .replace(/c52/g, 'h')
        .replace(/c53/g, 'ʿ')
        .replace(/c54/g, 'ḥ')
        .replace(/c55/g, 'r')
        .replace(/c56/g, 'ẖ')
        .replace(/\./g, '');



    //結果
    document.getElementById('kowaki').textContent = kowaki8;


    //小脇方式から発音記号を生成
    //yhwh、ダゲシュの処理
    const pronunciation1 = kowaki8
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
    document.getElementById('pronunciation').textContent = pronunciation5;



}


// 入力イベントでリアルタイム更新
document.getElementById('inputText').addEventListener('input', updateResults);