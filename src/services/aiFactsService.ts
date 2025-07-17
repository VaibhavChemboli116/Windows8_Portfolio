interface AIFactResponse {
  content: string;
  error?: string;
}

const BANNED_WORDS = [
  'sex', 'sexual', 'porn', 'nude', 'naked', 'breast', 'penis', 'vagina', 
  'orgasm', 'masturbat', 'erotic', 'adult', '18+', 'xxx', 'intercourse',
  'genitals', 'prostitut', 'rape', 'violence', 'kill', 'murder', 'death',
  'suicide', 'drug', 'cocaine', 'heroin', 'marijuana', 'alcohol', 'drunk',
  'dildo', 'vibrator', 'condom', 'sperm', 'ejaculat', 'climax', 'horny',
  'fetish', 'bdsm', 'kink', 'bondage', 'cum', 'cock', 'dick', 'pussy',
  'tits', 'ass', 'butt', 'anal', 'oral', 'blow', 'suck', 'fuck', 'shit',
  'damn', 'hell', 'bitch', 'slut', 'whore', 'gay', 'lesbian', 'homo',
  'virgin', 'puberty', 'menstruat', 'abortion', 'contracepti', 'viagra',
  'boob', 'smoking', 'tobacco', 'weed', 'meth', 'crack', 'addiction',
  'overdose', 'abuse', 'torture', 'assault', 'victim', 'criminal', 'crime' 
];

function containsBannedWord(text: string): boolean {
  const lower = text.toLowerCase();
  return BANNED_WORDS.some(word => lower.includes(word));
}

export const fetchAIFact = async (): Promise<AIFactResponse> => {
  const MAX_ATTEMPTS = 5;
  let attempt = 0;
  let lastFact = '';
  try {
    while (attempt < MAX_ATTEMPTS) {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
      const data = await response.json();
      const fact = data.text || data.fact || '';
      lastFact = fact;
      if (!containsBannedWord(fact)) {
        return { content: fact };
      }
      attempt++;
    }
    return {
      content: lastFact || 'Could not fetch a suitable fact.',
      error: 'All fetched facts contained banned words.'
    };
  } catch (error) {
    console.error('Error fetching fact:', error);
    return {
      content: 'Could not fetch a fact due to an error.',
      error: 'Failed to fetch new fact'
    };
  }
}; 