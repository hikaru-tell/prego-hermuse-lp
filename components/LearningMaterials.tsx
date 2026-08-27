// Future zone: real course materials (worksheets, lecture screens, PDFs,
// Notion pages, reflection notes, feedback screens). No placeholder or
// generated imagery until real assets exist.
const MATERIALS: { src: string; alt: string }[] = [];

export default function LearningMaterials() {
  if (MATERIALS.length === 0) return null;

  return (
    <section className="learning-materials" aria-labelledby="learning-materials-title">
      <div className="wrap">{/* populated once real material images exist */}</div>
    </section>
  );
}
