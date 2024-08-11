let savasci = prompt('Merhaba savaşçı! Büyülü ormana hoşgeldin. Ormana girmek istediğine emin misin? ( gir / girme ): ');

if (savasci === 'gir') {
    let senbilirsin = prompt('Demek öyle savaşçı... Ormanın derinliklerinden bir ses geliyor? ( kontrol et / yürümeye devam et )');

    if (senbilirsin === 'kontrol et') {
        let saldir = prompt('Olamaz! Karşına bir canavar çıktı. Sana doğru koşuyor ( kaç / kaçma )');

        if (saldir === 'kaç') {
            let kaciyorsun = alert('Canını zor kurtardın! Tebrikler ölmeden ormandan çıkabildin ama hiçbir ödül kazanamadın...');
        }

        else if (saldir === 'kaçma') {
            let kacmiyorsun = alert('Olamaz! Yaralandın nerdeyse ölüyordun ve canavarı öldürdün. Tebrikler kazandın!');
        }
    }

    else if (senbilirsin === 'yürümeye devam et') {
        let odane = prompt('İleride bir parlaklık var o da ne hazine olabilir mi? ( git bak / umursama )');

        if (odane === 'git bak') {
            let odul = prompt('Tebrikler! hazineyi buldun. Ama o da ne hazine koruyucuları karşında duruyor ne yapacaksın? ( saldır / elin boş dön ) ');

            if (odul === 'saldır') {
                let tebrikler = alert('Tebrik ederim savaşçı! Koruyucuyu öldürmeyi başardın. Ormandan çıkmakta özgürsün...');
            }
    
            else if (odul === 'elin boş dön') {
                let elinbos = alert('Sonuna kadar savaşmana rağmen pes ettin. Kaybettin...');
            }
        }

        else if (odane === 'umursama') {
            let enayi = alert('Büyük bir hazineyi kaçırdın. Kaybettin...');
        }
    }

}

else if (savasci === 'girme') {
    alert('Geldiğin köye dön. Sen savaşçı değilsin. Korkak!')
}