const DEFAULT = 8; // Do not modify it.
const slides = (count) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push(`<div class="sliderm__slide">${i}</div>`);
  }
  return items.join('');
};

export default function html(columns = DEFAULT) {
  return `
    <div class="sliderm">
      <div class="sliderm__slider">
          <div class="sliderm__slides">
              ${slides(columns)}
          </div>
      </div>
    </div>
  `;
}
