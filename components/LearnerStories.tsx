// Future zone: real learner photos or anonymized session/desk shots only.
// No stock photography or generated people. Renders nothing until real
// assets exist.
const STORIES: { src: string; alt: string }[] = [];

export default function LearnerStories() {
  if (STORIES.length === 0) return null;

  return (
    <section className="learner-stories" aria-labelledby="learner-stories-title">
      <div className="wrap">{/* populated once real learner images exist */}</div>
    </section>
  );
}
