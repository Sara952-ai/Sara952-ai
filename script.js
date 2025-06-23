
const content = document.getElementById("content");

const data = {
  beauty: {
    title: "Beauty 💄",
    cards: [
      {
        img: "https://i.imgur.com/bQnO2cY.jpg",
        title: "Glowy Makeup Secrets ✨",
        text: "Hey sweeties! Θέλετε να λάμπετε σαν clean girl icons; Ιδού τα απόλυτα hacks που θα μεταμορφώσουν το πρόσωπό σου σε καμβά φωτός."
      },
      {
        img: "https://i.imgur.com/Ui0K5TX.jpg",
        title: "Top 5 Lip Gloss Trends 💋",
        text: "Τα gloss επέστρεψαν και είναι πιο juicy από ποτέ! Μάθε ποια gloss φοριούνται τώρα, τι χρώματα παίζουν και πώς να τα συνδυάσεις!"
      }
    ]
  },
  fashion: {
    title: "Fashion 👗",
    cards: [
      {
        img: "https://i.imgur.com/RfTCzAX.jpg",
        title: "Soft Girl Aesthetic 💕",
        text: "Απαλά χρώματα, φουσκωτά μανίκια και vintage vibes. Δες πώς να φτιάξεις το απόλυτο soft girl outfit για κάθε εποχή!"
      },
      {
        img: "https://i.imgur.com/Mq0yNE7.jpg",
        title: "Τι να Φορέσω στο Σχολείο 📚",
        text: "Συνδυασμοί που είναι και cute και άνετοι, ιδανικοί για το σχολικό πρόγραμμα και τη σχολική αυλή."
      }
    ]
  },
  selfcare: {
    title: "Selfcare 🧖‍♀️",
    cards: [
      {
        img: "https://i.imgur.com/j0uAYX2.jpg",
        title: "Night Routine για Χαλάρωση 🌙",
        text: "Hey loves! Ακολουθείς ρουτίνα πριν τον ύπνο; Αν όχι, ήρθε η ώρα να δεις πώς θα χαλαρώσεις με κεριά, skincare και journaling!"
      },
      {
        img: "https://i.imgur.com/f49R2Sy.jpg",
        title: "Αυτοφροντίδα με budget 💸",
        text: "Δεν χρειάζεται να ξοδέψεις πολλά για να φροντίσεις τον εαυτό σου. Σου δείχνουμε πώς με απλά πράγματα στο σπίτι!"
      }
    ]
  },
  about: {
    title: "Σχετικά με εμένα ✨",
    html: "<p>Είμαι ένα κορίτσι που αγαπά τη μόδα, την περιποίηση, και τις girly vibes! Το 'Curly Style' είναι ο χώρος μας για όλα αυτά που μας ενώνουν σαν παρέα! 💕</p>"
  }
};

function showCategory(cat) {
  const section = data[cat];
  if (!section) return;

  if (section.html) {
    content.innerHTML = `<h2>${section.title}</h2>${section.html}`;
  } else {
    let html = `<h2>${section.title}</h2><div class="cards-container">`;
    for (const card of section.cards) {
      html += `<div class="card">
        <img src="${card.img}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>`;
    }
    html += "</div>";
    content.innerHTML = html;
  }
}
