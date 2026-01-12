import IArticle from "@/types/IArticle";
import generateTags from "@/lib/generateTags";

const text = `
<article>
    <code>#блог</code>

    <p>
        Если мне лень, то зачем я вообще пишу?<br>
        Вот зачем:
    </p>

    <ol>
        <li>
            <strong>Остаюсь в поле зрения людей</strong><br>
            Не ради популярности, а чтобы не исчезать. Когда долго молчишь,
            кажется, что тебя как будто и не было.
        </li>
        <li>
            <strong>Формулирую мысли в понятный формат</strong><br>
            Пока мысль в голове — она расплывчатая. Текст заставляет упрощать,
            уточнять и признавать, что я на самом деле думаю.
        </li>
        <li>
            <strong>Проверяю себя на дистанции</strong><br>
            С моими планами не получится быть постоянно ленивым или слабым.
            Блог — это маленькое напоминание, что движение всё ещё есть,
            даже когда не хочется.
        </li>
    </ol>
</article>
`;

const whyWriteArticleIfLazy: IArticle = {
  date: "2025-12-24",
  slug: "why-write-article-if-lazy",
  title: "Зачем я пишу в блог, если мне лень",
  description: "Узнаем почему автор продолжает писать, если ему лень",
  text,
  tags: generateTags(text),
}

export default whyWriteArticleIfLazy;