<template>
    <div class="mainSection">
        <div class="mainSectionTop">
            <div class="sectionText">
                <h2>
                    Hacker News created <br />
                    a new place for the <br />
                    latest IT information.
                </h2>
                <p>
                    Hacker News is the leading and go-to source for timely and
                    <br />
                    relevant breaking news from the world of cybersecurity,
                    <br />
                    as well as valuable insights into the latest threats and
                    solutions.
                </p>
                <RouterLink to="/news/1">
                    <span>View News</span>
                    <img src="@/assets/images/right.svg" alt="화살표 이미지" />
                </RouterLink>
            </div>
            <img
                class="sectionImage"
                src="@/assets/images/news.jpg"
                alt="뉴스 이미지"
            />
        </div>
        <div class="mainSectionMiddle">
            <img
                class="sectionImage"
                src="@/assets/images/section1.jpg"
                alt="섹션 이미지"
            />
            <div class="sectionText">
                <h2>
                    Share opinions with <br class="responsive" />different
                    people.
                </h2>
                <p>
                    For over a decade, HackerNews has established itself as a
                    <br />
                    leading voice in the cybersecurity industry, with a
                    dedicated <br />
                    audience of over 45 million annual readers who rely on us
                    for <br />
                    the latest news, insights, and solutions.
                </p>
                <RouterLink to="/ask/1">
                    <span>View News</span>
                    <img src="@/assets/images/right.svg" alt="화살표 이미지" />
                </RouterLink>
            </div>
        </div>
        <div class="mainSectionBottom">
            <div class="sectionText">
                <h2>
                    Find a variety of <br class="responsive" />
                    IT jobs here.
                </h2>
                <p>
                    As an independent news source, we provide unbiased and
                    <br />
                    comprehensive coverage of the industry, making us a trusted
                    <br />
                    resource for professionals and enthusiasts alike.
                </p>
                <RouterLink to="/jobs/1">
                    <span>View News</span>
                    <img src="@/assets/images/right.svg" alt="화살표 이미지" />
                </RouterLink>
            </div>
            <img
                class="sectionImage"
                src="@/assets/images/section2.jpg"
                alt="섹션 이미지"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainSection.scss';
</style>
