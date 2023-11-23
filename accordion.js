(() => {
    class Accordion {
        // 初期化
        constructor(obj){
            const $elm =document.querySelector(obj.hookName);
            const $trigger =$elm.getElementsByTagName(obj.tagName);

            this.triggers = Array.from($trigger);
            this.contents = this.triggers.map(trigger => trigger.nextElementSibling);

            const triggerLen = this.triggers.length;
            let index = 0;
            while (index < triggerLen){
                // キャレットを追加
                this.triggers[index].innerHTML += '<span class="caret"></span>';
                this.triggers[index].addEventListener('click', (e) => this.clickHandler(e, index));
                index++;
            }
        }

        // クリックしたら実行される処理
        clickHandler(e, index){
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            // キャレットの向きを変更
            const $caret = $target.querySelector('.caret');
            if($content.style.display === 'block'){
                $content.style.display = 'none';
                $caret.style.transform = 'rotate(0deg)';
            }else {
                // 他のアコーディオンを閉じる
                this.contents.forEach((content, i) => {
                    if (i !== index) {
                        content.style.display = 'none';
                        this.triggers[i].querySelector('.caret').style.transform = 'rotate(0deg)';
                    }
                });

                $content.style.display = 'block';
                $caret.style.transform = 'rotate(180deg)';
            }
        }
    }

    const fuckinAccordion = new Accordion({
        hookName: '#js-faq',
        tagName:'p'
    });

    const dummyAccordion  = new Accordion({
        hookName: '#js-accordion',
        tagName:'a'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName:'dt'
    });

})();