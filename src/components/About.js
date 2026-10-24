import { Link } from "react-router-dom";

const About = () => (
  <main className="content-page">
    <section className="page-hero about-hero">
      <p className="eyebrow">A little about us</p>
      <h1>Good food should feel <span>close to home.</span></h1>
      <p>
        Namaste brings your neighborhood's favorite meals together in one
        simple place. Find something you love, choose a local restaurant, and
        make your next meal a little more special.
      </p>
      <Link className="primary-link" to="/">Explore restaurants</Link>
    </section>

    <section className="story-section">
      <div>
        <p className="eyebrow">Our story</p>
        <h2>Made for the moments that happen around food.</h2>
      </div>
      <p>
        From a quick lunch between plans to a dinner shared with friends, food
        has a way of bringing people together. We are building a friendly
        ordering experience that helps you discover local kitchens and enjoy
        the dishes you crave, without making mealtime complicated.
      </p>
    </section>

    <section className="values-grid" aria-label="What matters to us">
      <article className="value-card">
        <span className="value-icon" aria-hidden="true">♡</span>
        <h3>Local favorites</h3>
        <p>Discover a mix of neighborhood spots and flavors worth coming back for.</p>
      </article>
      <article className="value-card">
        <span className="value-icon" aria-hidden="true">✦</span>
        <h3>Made for you</h3>
        <p>Browse menus and find the right meal for your mood and moment.</p>
      </article>
      <article className="value-card">
        <span className="value-icon" aria-hidden="true">⌁</span>
        <h3>Simple by design</h3>
        <p>A clear, easy way to explore restaurants and decide what sounds good.</p>
      </article>
    </section>

    <section className="page-cta">
      <div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Let’s find your next favorite.</h2>
      </div>
      <Link className="primary-link" to="/">Browse the menu</Link>
    </section>
  </main>
);

export default About;
