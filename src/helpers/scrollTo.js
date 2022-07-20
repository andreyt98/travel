// sections
export const hotelSection = document.getElementById("section-one");
export const tourSection = document.getElementById("section-two");
export const footerSection = document.getElementById("section-three");

export const scrollTo = (e, section) => {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
}
