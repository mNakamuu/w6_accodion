(() => {

    class Accordion {

        // 初期化
        constructor(obj){

            const $elm =document.querySelector(obj.hookName);
            const $trigger =$elm.getElementsByTagName(obj.tagName);


            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen){
                // キャレットを追加
                $trigger[index].innerHTML += '<span class="caret"></span>';
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

        // クリックしたら実行される処理
        clickHandler(e){
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            // キャレットの向きを変更
            const $caret = $target.querySelector('.caret');

            if($content.style.display === 'block'){
                $content.style.display = 'none';
                $caret.style.transform = 'rotate(0deg)';
            }else {
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