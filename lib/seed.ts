import type { Flashcard, Question, Topic, Unit } from './types';

export const UNITS: Unit[] = [
  { id: 1, name: 'Thermochemistry & Free Energy', examWeight: 0.4 / 3 },
  { id: 2, name: 'IMF, Phase, Solutions', examWeight: 0.4 / 3 },
  { id: 3, name: 'Kinetics & Equilibrium I', examWeight: 0.4 / 3 },
  { id: 4, name: 'Equilibrium II + Acid/Base', examWeight: 0.6 },
];

export const TOPICS: Topic[] = [
  // Unit 1
  { id: 'u1-2nd-law', unitId: 1, name: '2nd law & entropy of universe',
    description: 'ΔS_univ = ΔS_sys + ΔS_surr ≥ 0 for any real process. ΔS_surr = −ΔH_sys/T.' },
  { id: 'u1-sign-delta-S', unitId: 1, name: 'Sign of ΔS for a system',
    description: 'Use rules of volume, temperature, moles of gas, phase change, and molecular complexity.' },
  { id: 'u1-spontaneity-cases', unitId: 1, name: 'Spontaneity from ΔH and ΔS',
    description: 'Four sign cases for ΔH/ΔS and their temperature dependence.' },
  { id: 'u1-delta-G-eqn', unitId: 1, name: 'ΔG = ΔH − T·ΔS',
    description: 'Compute ΔG from ΔH and ΔS at a specified temperature. Watch units (J vs kJ).' },
  { id: 'u1-delta-G-from-f', unitId: 1, name: 'ΔG°rxn from ΔG°f',
    description: 'ΔG°rxn = Σν·ΔG°f(products) − Σν·ΔG°f(reactants). Elements in standard state = 0.' },
  { id: 'u1-delta-G-K-link', unitId: 1, name: 'ΔG° = −RT ln K (bridge to Unit 4)',
    description: 'Sign of ΔG° controls whether K > 1 or K < 1. Use R = 8.314 J/(mol·K) and T in K.' },

  // Unit 2
  { id: 'u2-imf-types', unitId: 2, name: 'IMF types from structure',
    description: 'Dispersion (all), dipole-dipole (polar), H-bonding (H-F/O/N), ion-dipole (ion + polar).' },
  { id: 'u2-imf-strength', unitId: 2, name: 'IMF ranking & miscibility',
    description: '"Like dissolves like". Strength: ion-dipole > H-bond > dipole-dipole > dispersion (roughly).' },
  { id: 'u2-physical-properties', unitId: 2, name: 'Physical properties from IMF',
    description: 'Stronger IMF → higher BP, lower vapor pressure, higher viscosity, lower escape KE.' },
  { id: 'u2-heating-curves', unitId: 2, name: 'Heating/cooling curves & q',
    description: 'Slope = q = C·m·ΔT within a phase; plateau = q = n·ΔH_phase at a transition.' },
  { id: 'u2-phase-diagrams', unitId: 2, name: 'Phase diagrams',
    description: 'Triple point, critical point, normal BP/FP (at 1 atm), reading state from P,T.' },
  { id: 'u2-colligative', unitId: 2, name: 'Colligative properties',
    description: 'ΔP = X_solute·P°, ΔT_b = i·K_b·m, ΔT_f = i·K_f·m, Π = i·MRT.' },
  { id: 'u2-concentration', unitId: 2, name: 'Concentration units & i',
    description: 'Molarity (mol/L), molality (mol/kg solvent), mole fraction, van\'t Hoff factor i.' },

  // Unit 3
  { id: 'u3-rate-expression', unitId: 3, name: 'Rate expression r = (1/a)·Δ[A]/Δt',
    description: 'Sign convention: reactants negative, products positive. Stoichiometric coefficient in denominator.' },
  { id: 'u3-rate-law-data', unitId: 3, name: 'Rate law from initial-rate data',
    description: 'Compare trials where one concentration changes to find each order; sum = overall order.' },
  { id: 'u3-integrated', unitId: 3, name: 'Integrated rate laws',
    description: '0th: [A] = [A]₀ − kt. 1st: ln[A] = ln[A]₀ − kt. 2nd: 1/[A] = 1/[A]₀ + kt.' },
  { id: 'u3-half-life', unitId: 3, name: 'Half-life',
    description: '0th: t½ = [A]₀/(2k). 1st: t½ = 0.693/k (concentration-independent). 2nd: t½ = 1/(k·[A]₀).' },
  { id: 'u3-coord-diagram', unitId: 3, name: 'Reaction coordinate diagrams',
    description: 'Identify reactants, products, TS, intermediate. E_{a,fwd} = TS − reactant; E_{a,rev} = TS − product; ΔH = product − reactant.' },
  { id: 'u3-mechanisms', unitId: 3, name: 'Mechanisms & RDS',
    description: 'Intermediate appears then disappears; catalyst opposite. Rate law follows the rate-determining step.' },
  { id: 'u3-arrhenius', unitId: 3, name: 'Arrhenius equation',
    description: 'k = A·e^(−E_a/RT). ln k = ln A − E_a/RT. Higher T or lower E_a → larger k.' },
  { id: 'u3-K-expr', unitId: 3, name: 'K expressions (K_c, K_p)',
    description: 'K = [products]^ν / [reactants]^ν. Pure solids/liquids excluded. K_p = K_c·(RT)^Δn.' },
  { id: 'u3-Q-vs-K', unitId: 3, name: 'Q vs K direction of shift',
    description: 'Q < K → forward shift. Q > K → reverse shift. Q = K → equilibrium.' },

  // Unit 4
  { id: 'u4-le-chatelier', unitId: 4, name: 'Le Chatelier\'s principle',
    description: 'System shifts to counteract stress: concentration, pressure/volume, temperature, catalyst (no shift), inert gas.' },
  { id: 'u4-G-K', unitId: 4, name: 'ΔG° and K relationship',
    description: 'ΔG° = −RT ln K. ΔG° < 0 → K > 1. ΔG° > 0 → K < 1. ΔG° = 0 → K = 1.' },
  { id: 'u4-conjugate-pairs', unitId: 4, name: 'Conjugate acid-base pairs',
    description: 'Pair differs by one H⁺. Strong acid → very weak conjugate base (and vice versa). K_a·K_b = K_w for a conjugate pair.' },
  { id: 'u4-pH-pOH-Kw', unitId: 4, name: 'pH, pOH, K_w interconversion',
    description: 'pH = −log[H₃O⁺]. pH + pOH = 14 at 25 °C. K_w = [H₃O⁺][OH⁻] = 1.0×10⁻¹⁴ at 25 °C.' },
  { id: 'u4-acid-strength-rank', unitId: 4, name: 'Ranking acid/base strength',
    description: 'Larger K_a or smaller pK_a = stronger acid. Stronger acid → weaker conjugate base. For binary acids: H-X bond strength dominates down a group, electronegativity across a period.' },
  { id: 'u4-strong-pH', unitId: 4, name: 'Strong acid/base pH',
    description: 'Strong acid: [H₃O⁺] = C_acid (1:1). Strong base: [OH⁻] = C_base · (#OH). Ignore water unless C ≤ 10⁻⁶ M.' },
  { id: 'u4-weak-pH', unitId: 4, name: 'Weak acid/base pH (ICE)',
    description: 'Set up ICE with x = [H₃O⁺] or [OH⁻]. K_a = x²/(C−x) ≈ x²/C if 5% rule holds. % ionization = x/C·100%.' },
  { id: 'u4-Ka-Kb-from-pH', unitId: 4, name: 'K_a or K_b from initial C and pH',
    description: 'From pH compute x = [H₃O⁺]; K_a = x²/(C−x). Or from % ionization: x = (%/100)·C, K_a = x²/(C−x).' },
  { id: 'u4-salt-pH', unitId: 4, name: 'Salt solutions: acidic, basic, neutral',
    description: 'Cation from strong base (Na⁺, K⁺): neutral. Cation from weak base (NH₄⁺): acidic. Anion from strong acid (Cl⁻, NO₃⁻): neutral. Anion from weak acid (F⁻, CH₃COO⁻): basic. Both weak: compare K_a vs K_b.' },
  { id: 'u4-bronsted-K', unitId: 4, name: 'K for Brønsted reaction from two K_a',
    description: 'For HA + B⁻ ⇌ A⁻ + HB: K = K_a(HA)/K_a(HB). Equilibrium favors the side with the weaker acid (smaller K_a).' },
  { id: 'u4-buffer-composition', unitId: 4, name: 'Buffer composition',
    description: 'Weak acid + its conjugate base, OR weak base + its conjugate acid, in comparable amounts (within ~10×).' },
  { id: 'u4-henderson', unitId: 4, name: 'Henderson-Hasselbalch',
    description: 'pH = pK_a + log([A⁻]/[HA]). Use moles or concentrations (same volume cancels).' },
  { id: 'u4-buffer-after-addition', unitId: 4, name: 'Buffer pH after adding strong acid/base',
    description: 'Stoichiometric step first: strong acid consumes A⁻ (forms HA); strong base consumes HA (forms A⁻). Then apply H-H with new moles.' },
  { id: 'u4-buffer-capacity', unitId: 4, name: 'Buffer capacity & selection',
    description: 'Capacity scales with absolute moles of buffer components. Best pair: pK_a within ±1 of target pH (e.g., H₂PO₄⁻/HPO₄²⁻ for pH 7.4, pK_a₂ ≈ 7.2).' },
];

const u4Topics = TOPICS.filter((t) => t.unitId === 4).map((t) => t.id);
export const isUnit4Topic = (topicId: string): boolean => u4Topics.includes(topicId);

// =====================================================
// Flashcards
// =====================================================
const cards: Flashcard[] = [];

const c = (topicId: string, n: number, front: string, back: string) => {
  cards.push({ id: `${topicId}-c${n}`, topicId, front, back });
};

// ---- Unit 1 ----
c('u1-2nd-law', 1, '2nd law of thermodynamics in one sentence', 'For any spontaneous (real) process, ΔS_universe > 0; at equilibrium ΔS_universe = 0.');
c('u1-2nd-law', 2, 'Formula for ΔS_universe', 'ΔS_univ = ΔS_sys + ΔS_surr.');
c('u1-2nd-law', 3, 'ΔS_surroundings in terms of system enthalpy', 'ΔS_surr = −ΔH_sys / T (at constant T,P).');
c('u1-2nd-law', 4, 'If ΔH_sys < 0, what is sign of ΔS_surr?', 'Positive (heat flows into surroundings, disordering them).');
c('u1-2nd-law', 5, 'Spontaneous process: which sign for ΔS_univ?', 'ΔS_univ > 0 (strictly positive).');

c('u1-sign-delta-S', 1, 'ΔS sign: gas expands into larger volume', 'Positive (more microstates).');
c('u1-sign-delta-S', 2, 'ΔS sign: temperature increases', 'Positive (more accessible energy levels).');
c('u1-sign-delta-S', 3, 'ΔS sign: 2 mol gas → 1 mol gas', 'Negative (fewer moles of gas → fewer microstates).');
c('u1-sign-delta-S', 4, 'ΔS sign: liquid → gas', 'Positive (gas is more disordered than liquid).');
c('u1-sign-delta-S', 5, 'ΔS sign: dissolving NaCl in water', 'Generally positive (lattice broken up; more disorder).');
c('u1-sign-delta-S', 6, 'Which has higher S: CH₄(g) or C₂H₆(g)?', 'C₂H₆: more atoms = more vibrational/rotational microstates.');

c('u1-spontaneity-cases', 1, 'ΔH < 0, ΔS > 0: spontaneous when?', 'Always spontaneous (ΔG < 0 at all T).');
c('u1-spontaneity-cases', 2, 'ΔH > 0, ΔS < 0: spontaneous when?', 'Never spontaneous (ΔG > 0 at all T).');
c('u1-spontaneity-cases', 3, 'ΔH < 0, ΔS < 0: spontaneous when?', 'At low T (T·|ΔS| < |ΔH|).');
c('u1-spontaneity-cases', 4, 'ΔH > 0, ΔS > 0: spontaneous when?', 'At high T (T·ΔS > ΔH).');
c('u1-spontaneity-cases', 5, 'Crossover temperature where ΔG = 0?', 'T = ΔH / ΔS (with consistent units).');

c('u1-delta-G-eqn', 1, 'Gibbs equation', 'ΔG = ΔH − T·ΔS. T in Kelvin.');
c('u1-delta-G-eqn', 2, 'Unit pitfall in ΔG = ΔH − TΔS', 'ΔH usually kJ/mol; ΔS usually J/(mol·K). Convert ΔS to kJ/(mol·K) before subtracting.');
c('u1-delta-G-eqn', 3, 'ΔG of −50 kJ/mol at 298 K means…', 'Reaction is spontaneous under standard conditions at 298 K.');
c('u1-delta-G-eqn', 4, 'If ΔH = +30 kJ/mol and ΔS = +100 J/(mol·K), spontaneous at 298 K?', 'ΔG = 30 − 0.298·100·(1/1000... wait) → 30 − 29.8 = +0.2 kJ/mol. Nonspontaneous, but barely; spontaneous above ~300 K.');
c('u1-delta-G-eqn', 5, 'Effect of higher T on ΔG when ΔS > 0', 'ΔG becomes more negative (more favorable).');

c('u1-delta-G-from-f', 1, 'Formula for ΔG°rxn from ΔG°f', 'ΔG°rxn = Σν·ΔG°f(products) − Σν·ΔG°f(reactants).');
c('u1-delta-G-from-f', 2, 'ΔG°f of element in standard state?', 'Zero by definition.');
c('u1-delta-G-from-f', 3, 'For 2A + B → 3C, expression?', 'ΔG°rxn = 3·ΔG°f(C) − [2·ΔG°f(A) + ΔG°f(B)].');
c('u1-delta-G-from-f', 4, 'Units of ΔG°f from a thermodynamic table', 'kJ/mol (most common).');
c('u1-delta-G-from-f', 5, 'Why multiply by stoichiometric coefficients?', 'ΔG°f is per mole; reaction uses ν moles of each species.');

c('u1-delta-G-K-link', 1, 'Link between ΔG° and K', 'ΔG° = −RT·ln K.');
c('u1-delta-G-K-link', 2, 'R value to use with ΔG° in J/mol', 'R = 8.314 J/(mol·K).');
c('u1-delta-G-K-link', 3, 'ΔG° < 0 implies K …', 'K > 1 (products favored at equilibrium).');
c('u1-delta-G-K-link', 4, 'ΔG° > 0 implies K …', 'K < 1 (reactants favored).');
c('u1-delta-G-K-link', 5, 'ΔG° = 0 implies K =', '1.');
c('u1-delta-G-K-link', 6, 'Find K if ΔG° = −10.0 kJ/mol at 298 K', 'ln K = −ΔG°/(RT) = 10000/(8.314·298) ≈ 4.04 → K ≈ e^4.04 ≈ 57.');

// ---- Unit 2 ----
c('u2-imf-types', 1, 'Which IMF is present in ALL molecules?', 'London dispersion (induced dipole-induced dipole).');
c('u2-imf-types', 2, 'Requirement for H-bonding', 'H bonded to F, O, or N — plus a lone pair on F/O/N of another molecule.');
c('u2-imf-types', 3, 'IMFs in liquid HCl', 'Dispersion + dipole-dipole (no H-bond since H is on Cl, not F/O/N).');
c('u2-imf-types', 4, 'IMFs in liquid H₂O', 'Dispersion + dipole-dipole + H-bonding.');
c('u2-imf-types', 5, 'IMF between Na⁺ and H₂O', 'Ion-dipole.');
c('u2-imf-types', 6, 'IMFs in CO₂(l)', 'Dispersion only — CO₂ is nonpolar (linear, symmetric).');

c('u2-imf-strength', 1, 'Typical IMF strength ranking', 'Ion-dipole > H-bond > dipole-dipole > dispersion (per molecule pair; dispersion can win in large molecules).');
c('u2-imf-strength', 2, '"Like dissolves like" means…', 'Polar/H-bonding solutes dissolve in polar/H-bonding solvents; nonpolar in nonpolar.');
c('u2-imf-strength', 3, 'Why does I₂ (s) dissolve in CCl₄ but not in water?', 'Both I₂ and CCl₄ are nonpolar (dispersion only); water is H-bonded polar.');
c('u2-imf-strength', 4, 'Dispersion increases with…', 'Molar mass / polarizability / size of the electron cloud.');
c('u2-imf-strength', 5, 'Why is n-pentane BP > neopentane BP?', 'n-Pentane is linear → more surface contact → stronger dispersion than spherical neopentane.');

c('u2-physical-properties', 1, 'Effect of stronger IMF on BP', 'Higher boiling point.');
c('u2-physical-properties', 2, 'Effect of stronger IMF on vapor pressure', 'Lower vapor pressure (harder to escape).');
c('u2-physical-properties', 3, 'Effect of stronger IMF on viscosity', 'Higher viscosity.');
c('u2-physical-properties', 4, 'Effect of stronger IMF on surface tension', 'Higher surface tension.');
c('u2-physical-properties', 5, 'Why does water have anomalously high BP for its size?', 'Extensive H-bonding network.');
c('u2-physical-properties', 6, 'Effect of higher T on vapor pressure', 'Higher (more molecules have enough KE to escape).');

c('u2-heating-curves', 1, 'Slope (rising line) on heating curve means…', 'Temperature changes; use q = C·m·ΔT (or n·C_m·ΔT).');
c('u2-heating-curves', 2, 'Plateau on heating curve means…', 'Phase change at constant T; use q = n·ΔH_phase (ΔH_fus or ΔH_vap).');
c('u2-heating-curves', 3, 'Which is usually larger: ΔH_vap or ΔH_fus?', 'ΔH_vap (need to break ALL IMFs, not just rearrange).');
c('u2-heating-curves', 4, 'Steeper slope on heating curve means…', 'Lower specific heat capacity (less heat for same ΔT).');
c('u2-heating-curves', 5, 'Why is the gas-phase slope often steepest?', 'Gas C_p is small compared to liquid C_p, so same q gives larger ΔT.');

c('u2-phase-diagrams', 1, 'Triple point on a phase diagram?', 'Single (P,T) where solid, liquid, gas coexist in equilibrium.');
c('u2-phase-diagrams', 2, 'Critical point?', 'Above this T and P, liquid and gas become indistinguishable (supercritical fluid).');
c('u2-phase-diagrams', 3, 'Normal boiling point?', 'Temperature where liquid-gas line crosses P = 1 atm.');
c('u2-phase-diagrams', 4, 'Why is water\'s solid-liquid line negatively sloped?', 'Ice is less dense than liquid water; increasing P favors the denser (liquid) phase.');
c('u2-phase-diagrams', 5, 'Sublimation on a phase diagram?', 'Crossing the solid-gas line (below the triple point).');

c('u2-colligative', 1, 'Vapor pressure lowering formula', 'ΔP = X_solute · P°_solvent (P_solution = X_solvent · P°_solvent).');
c('u2-colligative', 2, 'Boiling point elevation formula', 'ΔT_b = i · K_b · m. ΔT_b is positive; new BP = BP° + ΔT_b.');
c('u2-colligative', 3, 'Freezing point depression formula', 'ΔT_f = i · K_f · m. ΔT_f is the magnitude; new FP = FP° − ΔT_f.');
c('u2-colligative', 4, 'Osmotic pressure formula', 'Π = i · M · R · T (M in mol/L, T in K, R = 0.0821 L·atm/(mol·K)).');
c('u2-colligative', 5, 'What does m (molality) mean?', 'Moles of solute per kilogram of solvent (not solution).');
c('u2-colligative', 6, 'Why use molality, not molarity, for ΔT_f and ΔT_b?', 'Molality doesn\'t change with T (mass doesn\'t expand the way volume does).');

c('u2-concentration', 1, 'Molarity (M)', 'mol solute / L solution.');
c('u2-concentration', 2, 'Molality (m)', 'mol solute / kg solvent.');
c('u2-concentration', 3, 'Mole fraction X_A', 'n_A / n_total.');
c('u2-concentration', 4, 'van\'t Hoff factor i for NaCl (ideal)', 'i = 2 (fully dissociates into Na⁺ + Cl⁻).');
c('u2-concentration', 5, 'van\'t Hoff factor i for glucose', 'i = 1 (nonelectrolyte; doesn\'t dissociate).');
c('u2-concentration', 6, 'i for CaCl₂ (ideal)', 'i = 3 (Ca²⁺ + 2 Cl⁻).');

// ---- Unit 3 ----
c('u3-rate-expression', 1, 'Rate expression in terms of any species', 'r = (1/ν) · d[species]/dt; negative sign for reactants.');
c('u3-rate-expression', 2, 'For 2A + B → 3C, rate in terms of [C]', 'r = (1/3) · d[C]/dt.');
c('u3-rate-expression', 3, 'For 2A + B → 3C, relate −d[A]/dt to d[C]/dt', '−(1/2)·d[A]/dt = (1/3)·d[C]/dt, so d[C]/dt = −(3/2)·d[A]/dt.');
c('u3-rate-expression', 4, 'Units of rate', 'M/s (mol·L⁻¹·s⁻¹) typically.');
c('u3-rate-expression', 5, 'Why divide by stoichiometric coefficient?', 'So the rate is unique for the reaction regardless of which species you watch.');

c('u3-rate-law-data', 1, 'Definition of rate law', 'r = k·[A]^m·[B]^n; m, n are orders (often integer or half-integer), determined experimentally.');
c('u3-rate-law-data', 2, 'How to find order in A from a table', 'Compare two trials where [B] is constant and [A] doubles. If rate doubles → order 1. Quadruples → order 2. Unchanged → order 0.');
c('u3-rate-law-data', 3, 'Overall order definition', 'Sum of individual orders: m + n + ...');
c('u3-rate-law-data', 4, 'Units of k for 1st order overall', 's⁻¹.');
c('u3-rate-law-data', 5, 'Units of k for 2nd order overall', 'M⁻¹·s⁻¹.');
c('u3-rate-law-data', 6, 'Units of k for 0th order overall', 'M·s⁻¹.');

c('u3-integrated', 1, '0th order integrated rate law', '[A] = [A]₀ − k·t. Plot [A] vs t → straight line, slope −k.');
c('u3-integrated', 2, '1st order integrated rate law', 'ln[A] = ln[A]₀ − k·t. Plot ln[A] vs t → straight line, slope −k.');
c('u3-integrated', 3, '2nd order integrated rate law', '1/[A] = 1/[A]₀ + k·t. Plot 1/[A] vs t → straight line, slope +k.');
c('u3-integrated', 4, 'Which plot is linear for 1st order?', 'ln[A] vs t.');
c('u3-integrated', 5, 'Sign of k for any rate law', 'Positive (rate constants are always positive).');

c('u3-half-life', 1, '0th order half-life', 't½ = [A]₀ / (2k). Depends on initial concentration.');
c('u3-half-life', 2, '1st order half-life', 't½ = 0.693 / k. INDEPENDENT of [A]₀.');
c('u3-half-life', 3, '2nd order half-life', 't½ = 1 / (k·[A]₀). Doubles each successive half-life.');
c('u3-half-life', 4, 'Which order has constant t½ regardless of [A]₀?', '1st order only.');
c('u3-half-life', 5, 'If a reaction\'s t½ doubles each half-life, what order?', '2nd order.');

c('u3-coord-diagram', 1, 'Transition state on a coordinate diagram', 'Highest energy point on the reaction path between reactants and products (one TS per elementary step).');
c('u3-coord-diagram', 2, 'Intermediate vs transition state', 'Intermediate sits at a local MINIMUM (valley) between two TS; TS is a maximum (peak).');
c('u3-coord-diagram', 3, 'E_a (forward) =', 'Energy of TS − Energy of reactants.');
c('u3-coord-diagram', 4, 'E_a (reverse) =', 'Energy of TS − Energy of products.');
c('u3-coord-diagram', 5, 'ΔH from coordinate diagram', 'Energy of products − Energy of reactants. Negative ΔH = exothermic.');
c('u3-coord-diagram', 6, 'Catalyst effect on diagram', 'Lowers E_{a,fwd} AND E_{a,rev} (same TS energy lowered); ΔH unchanged.');

c('u3-mechanisms', 1, 'Which step controls the overall rate law?', 'The rate-determining (slowest) step.');
c('u3-mechanisms', 2, 'Intermediate vs catalyst — how to tell apart', 'Intermediate: produced then consumed (appears in middle). Catalyst: consumed then regenerated (appears at start and end).');
c('u3-mechanisms', 3, 'Should rate law contain an intermediate concentration?', 'No — substitute it using a fast-equilibrium step before the RDS.');
c('u3-mechanisms', 4, 'Mechanism: Step 1 (fast eq) A + B ⇌ C; Step 2 (slow) C + D → P. Rate law?', 'Slow step gives r = k₂[C][D]; sub [C] = (k₁/k₋₁)[A][B] → r = k_obs·[A][B][D].');
c('u3-mechanisms', 5, 'Sum of elementary steps must equal…', 'The overall balanced equation (after canceling intermediates).');

c('u3-arrhenius', 1, 'Arrhenius equation', 'k = A·exp(−E_a/RT).');
c('u3-arrhenius', 2, 'Linear form of Arrhenius', 'ln k = ln A − E_a/(RT). Plot ln k vs 1/T → slope = −E_a/R.');
c('u3-arrhenius', 3, 'Two-point Arrhenius', 'ln(k₂/k₁) = −(E_a/R)·(1/T₂ − 1/T₁).');
c('u3-arrhenius', 4, 'Effect of increasing T on k', 'k increases (exponential dependence).');
c('u3-arrhenius', 5, 'Effect of decreasing E_a on k', 'k increases (lower barrier → more successful collisions).');
c('u3-arrhenius', 6, 'What is A?', 'Pre-exponential / frequency factor — related to collision frequency and orientation.');

c('u3-K-expr', 1, 'K expression for aA + bB ⇌ cC + dD', 'K_c = [C]^c·[D]^d / ([A]^a·[B]^b).');
c('u3-K-expr', 2, 'Exclusions from K expression', 'Pure solids and pure liquids (their "activity" is 1).');
c('u3-K-expr', 3, 'K_p vs K_c', 'K_p = K_c·(RT)^Δn where Δn = (mol gas products) − (mol gas reactants), R = 0.0821 L·atm/(mol·K).');
c('u3-K-expr', 4, 'K depends on what?', 'Temperature only.');
c('u3-K-expr', 5, 'K for reverse reaction', '1/K (reciprocal).');
c('u3-K-expr', 6, 'K when reaction is multiplied by n', 'K^n.');

c('u3-Q-vs-K', 1, 'Definition of Q', 'Same expression as K but using current (non-equilibrium) concentrations.');
c('u3-Q-vs-K', 2, 'Q < K means…', 'Too few products → net forward reaction.');
c('u3-Q-vs-K', 3, 'Q > K means…', 'Too many products → net reverse reaction.');
c('u3-Q-vs-K', 4, 'Q = K means…', 'At equilibrium; no net shift.');
c('u3-Q-vs-K', 5, 'After perturbation, system shifts to make Q…', 'Equal to K.');

// ---- Unit 4 ----
c('u4-le-chatelier', 1, 'Le Chatelier in one sentence', 'A system at equilibrium responds to a stress by shifting in the direction that partially relieves the stress.');
c('u4-le-chatelier', 2, 'Add reactant: shift direction?', 'Forward (toward products).');
c('u4-le-chatelier', 3, 'Remove product: shift direction?', 'Forward (replace the lost product).');
c('u4-le-chatelier', 4, 'Increase pressure by decreasing volume: shift direction?', 'Toward the side with FEWER moles of gas.');
c('u4-le-chatelier', 5, 'Add inert gas at constant volume: shift?', 'No shift (partial pressures of reactants/products unchanged).');
c('u4-le-chatelier', 6, 'Add inert gas at constant pressure: shift?', 'Volume must increase → behaves like a dilution → shifts toward side with MORE moles of gas.');
c('u4-le-chatelier', 7, 'Increase T for exothermic reaction (ΔH < 0): shift?', 'Reverse (toward reactants) — heat is a "product"; K decreases.');
c('u4-le-chatelier', 8, 'Increase T for endothermic reaction (ΔH > 0): shift?', 'Forward (toward products); K increases.');
c('u4-le-chatelier', 9, 'Effect of catalyst on equilibrium position', 'None — reaches equilibrium faster but does not change K or position.');

c('u4-G-K', 1, 'Master equation linking ΔG° and K', 'ΔG° = −RT·ln K.');
c('u4-G-K', 2, 'Sign of ΔG° if K > 1', 'Negative (ln K > 0 → −RT·ln K < 0).');
c('u4-G-K', 3, 'Sign of ΔG° if K < 1', 'Positive.');
c('u4-G-K', 4, 'ΔG vs ΔG° — which depends on Q?', 'ΔG = ΔG° + RT·ln Q. ΔG° is at standard conditions; ΔG is at current Q.');
c('u4-G-K', 5, 'At equilibrium, ΔG = ?', '0 (and Q = K).');
c('u4-G-K', 6, 'Compute K at 298 K if ΔG° = +5.0 kJ/mol', 'ln K = −5000/(8.314·298) ≈ −2.02 → K ≈ e^−2.02 ≈ 0.133.');
c('u4-G-K', 7, 'If T increases for ΔH > 0 reaction, K…', 'Increases (consistent with ΔG° = ΔH° − TΔS° becoming more negative when ΔS° > 0).');
c('u4-G-K', 8, 'Why is K = 1 special?', 'ln 1 = 0 → ΔG° = 0; reactants and products are equally favored at standard conditions.');

c('u4-conjugate-pairs', 1, 'Conjugate base of HCN', 'CN⁻.');
c('u4-conjugate-pairs', 2, 'Conjugate acid of NH₃', 'NH₄⁺.');
c('u4-conjugate-pairs', 3, 'Conjugate base of H₂PO₄⁻', 'HPO₄²⁻ (lose one H⁺).');
c('u4-conjugate-pairs', 4, 'Conjugate acid of H₂PO₄⁻', 'H₃PO₄ (gain one H⁺) — amphoteric species.');
c('u4-conjugate-pairs', 5, 'Relation between K_a of acid and K_b of its conjugate base', 'K_a · K_b = K_w = 1.0×10⁻¹⁴ at 25 °C.');
c('u4-conjugate-pairs', 6, 'pK_a + pK_b = ?', '14 (at 25 °C) for a conjugate pair.');
c('u4-conjugate-pairs', 7, 'Stronger acid → conjugate base is…', 'Weaker.');
c('u4-conjugate-pairs', 8, 'Brønsted-Lowry acid definition', 'Proton (H⁺) donor.');

c('u4-pH-pOH-Kw', 1, 'Definition of pH', 'pH = −log₁₀[H₃O⁺].');
c('u4-pH-pOH-Kw', 2, 'Definition of pOH', 'pOH = −log₁₀[OH⁻].');
c('u4-pH-pOH-Kw', 3, 'pH + pOH = ?', '14 (at 25 °C).');
c('u4-pH-pOH-Kw', 4, 'K_w expression', 'K_w = [H₃O⁺][OH⁻] = 1.0×10⁻¹⁴ at 25 °C.');
c('u4-pH-pOH-Kw', 5, '[H₃O⁺] if pH = 4.50', '10⁻⁴·⁵⁰ ≈ 3.16×10⁻⁵ M.');
c('u4-pH-pOH-Kw', 6, '[OH⁻] if pH = 11.20', 'pOH = 2.80 → [OH⁻] = 10⁻²·⁸⁰ ≈ 1.58×10⁻³ M.');
c('u4-pH-pOH-Kw', 7, 'pH of neutral water at 25 °C', '7.00.');
c('u4-pH-pOH-Kw', 8, 'pH if [H₃O⁺] = 2.0×10⁻³ M', 'pH = −log(2.0×10⁻³) = 2.70.');

c('u4-acid-strength-rank', 1, 'Larger K_a means…', 'Stronger acid.');
c('u4-acid-strength-rank', 2, 'Smaller pK_a means…', 'Stronger acid (pK_a = −log K_a).');
c('u4-acid-strength-rank', 3, 'Rank: HF (K_a 7.2e−4), HCN (4.9e−10), CH₃COOH (1.8e−5). Strongest?', 'HF > CH₃COOH > HCN.');
c('u4-acid-strength-rank', 4, 'Binary acid trend down a group (HF, HCl, HBr, HI)', 'Acidity INCREASES down (bond gets weaker; H-I weakest, strongest acid).');
c('u4-acid-strength-rank', 5, 'Binary acid trend across a period (NH₃, H₂O, HF)', 'Acidity INCREASES with electronegativity of the atom bound to H (HF strongest).');
c('u4-acid-strength-rank', 6, 'Oxoacid trend: HClO < HClO₂ < HClO₃ < HClO₄', 'More oxygens on the central atom → stronger acid (better resonance stabilization of conjugate base).');
c('u4-acid-strength-rank', 7, 'Strongest acid → weakest conjugate base. Why?', 'If HA dissociates nearly fully, A⁻ has very little tendency to grab H⁺ back.');

c('u4-strong-pH', 1, 'Strong acids you should memorize', 'HCl, HBr, HI, HNO₃, H₂SO₄ (first H), HClO₄.');
c('u4-strong-pH', 2, 'Strong bases you should memorize', 'Group 1 hydroxides (NaOH, KOH, LiOH, RbOH, CsOH); Sr(OH)₂, Ba(OH)₂, Ca(OH)₂ (mostly).');
c('u4-strong-pH', 3, 'pH of 0.010 M HCl', '[H₃O⁺] = 0.010 M; pH = 2.00.');
c('u4-strong-pH', 4, 'pH of 0.010 M NaOH', '[OH⁻] = 0.010; pOH = 2.00; pH = 12.00.');
c('u4-strong-pH', 5, 'pH of 0.010 M Ba(OH)₂', '[OH⁻] = 0.020 M (2 OH per formula); pOH = 1.70; pH = 12.30.');
c('u4-strong-pH', 6, 'When can you NOT ignore water for strong acid pH?', 'When C_acid ≲ 10⁻⁶ M (acid contribution comparable to water).');
c('u4-strong-pH', 7, 'pH of 1.0×10⁻⁸ M HCl', 'Cannot ignore water; must solve [H₃O⁺]² − 10⁻⁸·[H₃O⁺] − 10⁻¹⁴ = 0. Result ≈ pH 6.96 (slightly acidic of 7).');

c('u4-weak-pH', 1, 'Setup for weak acid HA, initial C', 'ICE: I = C, 0, 0; C = −x, +x, +x; E = C−x, x, x. K_a = x²/(C−x).');
c('u4-weak-pH', 2, 'When can you approximate (C − x) ≈ C?', 'When x ≤ 5% of C, equivalently when K_a·C >> x² fails... typically C/K_a > 400.');
c('u4-weak-pH', 3, 'pH of 0.10 M acetic acid, K_a = 1.8×10⁻⁵', 'x² = (1.8×10⁻⁵)(0.10) → x = 1.34×10⁻³; pH = −log(1.34×10⁻³) ≈ 2.87.');
c('u4-weak-pH', 4, '% ionization formula', '% ionization = (x / C_initial) × 100%, where x = [H₃O⁺] from the weak acid.');
c('u4-weak-pH', 5, 'For a weak base B, K_b expression?', 'K_b = [BH⁺][OH⁻] / [B] = x²/(C−x).');
c('u4-weak-pH', 6, 'pH of 0.20 M NH₃, K_b = 1.8×10⁻⁵', 'x² = (1.8e−5)(0.20) → x = 1.9×10⁻³; pOH = 2.72; pH = 11.28.');
c('u4-weak-pH', 7, 'Higher initial concentration of a weak acid: % ionization?', 'DECREASES (Le Chatelier on the dissociation equilibrium).');
c('u4-weak-pH', 8, 'Why does pH not change linearly with concentration for weak acids?', '[H₃O⁺] ∝ √(K_a·C), so doubling C only multiplies [H₃O⁺] by √2.');

c('u4-Ka-Kb-from-pH', 1, 'Find K_a from pH 3.40 of 0.10 M HA', 'x = 10⁻³·⁴⁰ = 4.0×10⁻⁴; K_a ≈ x²/(C−x) ≈ (4.0×10⁻⁴)²/0.10 = 1.6×10⁻⁶.');
c('u4-Ka-Kb-from-pH', 2, 'Find K_a from 2.0% ionization of 0.10 M HA', 'x = 0.020·0.10 = 2.0×10⁻³; K_a = (2.0×10⁻³)²/(0.098) ≈ 4.1×10⁻⁵.');
c('u4-Ka-Kb-from-pH', 3, 'Find K_b from pH 10.50 of 0.050 M weak base B', 'pOH = 3.50; [OH⁻] = x = 3.16×10⁻⁴; K_b = x²/(C−x) ≈ (3.16×10⁻⁴)²/0.050 ≈ 2.0×10⁻⁶.');
c('u4-Ka-Kb-from-pH', 4, 'If 5% rule fails (x > 5% of C), what to do?', 'Solve the quadratic K_a·(C−x) = x² without approximation.');
c('u4-Ka-Kb-from-pH', 5, 'Why use x² ≈ K_a·C only as a shortcut?', 'It avoids the quadratic but is only valid when x << C.');

c('u4-salt-pH', 1, 'NaCl in water: acidic, basic, or neutral?', 'Neutral (Na⁺ from strong base, Cl⁻ from strong acid).');
c('u4-salt-pH', 2, 'NH₄Cl in water: acidic, basic, or neutral?', 'Acidic (NH₄⁺ is conjugate acid of weak base; Cl⁻ inert).');
c('u4-salt-pH', 3, 'NaF in water: acidic, basic, or neutral?', 'Basic (F⁻ is conjugate base of weak acid HF; Na⁺ inert).');
c('u4-salt-pH', 4, 'NH₄F in water: acidic, basic, or neutral?', 'Compare K_a(NH₄⁺) ≈ 5.6×10⁻¹⁰ vs K_b(F⁻) ≈ 1.4×10⁻¹¹; K_a > K_b so SLIGHTLY ACIDIC.');
c('u4-salt-pH', 5, 'Anion of a strong acid (Cl⁻, NO₃⁻, ClO₄⁻) in water:', 'Neutral (negligible base strength).');
c('u4-salt-pH', 6, 'Cation of group 1 or heavy group 2 metal in water:', 'Neutral (spectator).');
c('u4-salt-pH', 7, 'Al³⁺(aq), Fe³⁺(aq) in water:', 'Acidic — small, highly charged metals polarize bound water and release H⁺.');
c('u4-salt-pH', 8, 'CH₃COONa pH: strategy?', 'Treat as K_b for CH₃COO⁻ where K_b = K_w/K_a(CH₃COOH).');

c('u4-bronsted-K', 1, 'K formula for HA + B⁻ ⇌ A⁻ + HB', 'K = K_a(HA) / K_a(HB).');
c('u4-bronsted-K', 2, 'Direction of Brønsted reaction at equilibrium', 'Favors side with WEAKER acid (smaller K_a).');
c('u4-bronsted-K', 3, 'HF (K_a 7.2e−4) + CN⁻ ⇌ F⁻ + HCN (K_a 4.9e−10): which side favored?', 'Right; HCN is far weaker acid than HF. K ≈ 7.2e−4 / 4.9e−10 ≈ 1.5×10⁶.');
c('u4-bronsted-K', 4, 'CH₃COOH + Cl⁻ ⇌ CH₃COO⁻ + HCl: direction?', 'Left (HCl is the stronger acid; the equilibrium lies to the left, K << 1).');
c('u4-bronsted-K', 5, 'Strategy when only K_b is given for the base', 'Convert K_b of B⁻ to K_a(HB) via K_a·K_b = K_w, then use K = K_a(HA)/K_a(HB).');

c('u4-buffer-composition', 1, 'Two ways to make a buffer', '(1) Weak acid + its conjugate base salt. (2) Weak base + its conjugate acid salt.');
c('u4-buffer-composition', 2, 'Can you mix strong acid + strong base to make a buffer?', 'No — they react completely; no equilibrium left to resist pH change.');
c('u4-buffer-composition', 3, 'Half-neutralization point of weak acid + strong base titration', 'pH = pK_a (equal moles of HA and A⁻ → log term = 0).');
c('u4-buffer-composition', 4, 'Approx. usable buffer range', 'pK_a ± 1 (i.e., [A⁻]/[HA] between 0.1 and 10).');
c('u4-buffer-composition', 5, 'Is HCl + NaCl a buffer?', 'No — HCl is strong, so the "conjugate pair" doesn\'t maintain equilibrium.');
c('u4-buffer-composition', 6, 'How to make NH₃/NH₄⁺ buffer?', 'Mix NH₃(aq) with NH₄Cl(s) in comparable amounts.');

c('u4-henderson', 1, 'Henderson-Hasselbalch equation', 'pH = pK_a + log([A⁻]/[HA]).');
c('u4-henderson', 2, 'Sister form for weak base buffer', 'pOH = pK_b + log([BH⁺]/[B]).');
c('u4-henderson', 3, 'pH of buffer: 0.10 M acetic acid + 0.10 M acetate, pK_a = 4.74', 'pH = 4.74 + log(1) = 4.74.');
c('u4-henderson', 4, 'pH of 0.20 M HF + 0.10 M F⁻, pK_a(HF) = 3.14', 'pH = 3.14 + log(0.10/0.20) = 3.14 − 0.30 = 2.84.');
c('u4-henderson', 5, 'pH of 0.05 M NH₃ + 0.10 M NH₄⁺, pK_a(NH₄⁺) = 9.25', 'pH = 9.25 + log(0.05/0.10) = 9.25 − 0.30 = 8.95.');
c('u4-henderson', 6, 'When can you use moles directly instead of concentrations?', 'Always — both terms in the ratio share the same total volume, which cancels.');
c('u4-henderson', 7, 'If [A⁻] = 10·[HA], pH = ?', 'pH = pK_a + log(10) = pK_a + 1.');

c('u4-buffer-after-addition', 1, 'Adding strong acid to a buffer: which species decreases?', 'A⁻ (conjugate base) is consumed: A⁻ + H⁺ → HA. Moles of HA increase by same amount.');
c('u4-buffer-after-addition', 2, 'Adding strong base to a buffer: which species decreases?', 'HA (weak acid) is consumed: HA + OH⁻ → A⁻ + H₂O. Moles of A⁻ increase.');
c('u4-buffer-after-addition', 3, 'Procedure for pH after strong acid/base addition', '(1) Stoichiometric step: limit by moles. (2) Plug new moles into Henderson-Hasselbalch.');
c('u4-buffer-after-addition', 4, 'Buffer: 0.10 mol HA + 0.10 mol A⁻; add 0.02 mol strong acid. New ratio?', 'HA → 0.12, A⁻ → 0.08; ratio A⁻/HA = 0.08/0.12 = 0.667; log = −0.176.');
c('u4-buffer-after-addition', 5, 'Buffer: 0.10 mol HA + 0.10 mol A⁻; add 0.02 mol strong base. New ratio?', 'HA → 0.08, A⁻ → 0.12; ratio = 1.5; log = +0.176.');
c('u4-buffer-after-addition', 6, 'If strong base added exceeds moles of HA, what happens?', 'Buffer is destroyed; excess OH⁻ governs the pH (strong base calculation).');

c('u4-buffer-capacity', 1, 'Buffer capacity definition (qualitative)', 'The amount of strong acid or base a buffer can absorb while keeping pH within ±1 of pK_a.');
c('u4-buffer-capacity', 2, 'Capacity scales with what?', 'Absolute amounts (moles) of HA and A⁻ — more total buffer = more capacity. Ratio close to 1 maximizes capacity.');
c('u4-buffer-capacity', 3, 'Best conjugate pair for pH 7.4 blood buffer?', 'H₂PO₄⁻ / HPO₄²⁻ (pK_a₂ ≈ 7.20).');
c('u4-buffer-capacity', 4, 'Best pair for pH 5.0?', 'Acetic acid / acetate (pK_a 4.74).');
c('u4-buffer-capacity', 5, 'Best pair for pH 9.0?', 'NH₃ / NH₄⁺ (pK_a 9.25) or HCO₃⁻ / CO₃²⁻ (pK_a ≈ 10.33 — also OK but further off).');
c('u4-buffer-capacity', 6, 'Why pK_a ± 1 for valid buffer?', 'Outside this range, one component is < 10% of the other and the buffer can\'t resist both acid and base addition.');

export const FLASHCARDS: Flashcard[] = cards;

// =====================================================
// Practice questions
// =====================================================
const questions: Question[] = [];

const mcq = (topicId: string, n: number, prompt: string, choices: string[], answer: string, explanation: string) => {
  questions.push({ id: `${topicId}-q${n}`, topicId, kind: 'mcq', prompt, choices, answer, explanation });
};
const short = (topicId: string, n: number, prompt: string, answer: string, explanation: string) => {
  questions.push({ id: `${topicId}-q${n}`, topicId, kind: 'short', prompt, answer, explanation });
};

// Unit 1
mcq('u1-2nd-law', 1, 'For a spontaneous process at constant T and P, which is true?',
  ['ΔS_sys > 0', 'ΔS_surr > 0', 'ΔS_univ > 0', 'ΔH < 0'],
  'ΔS_univ > 0',
  'Only ΔS_universe is required to be positive. The sign of ΔS_system or ΔS_surroundings individually depends on the process.');
mcq('u1-2nd-law', 2, 'A reaction has ΔH = −80 kJ/mol at 298 K. What is ΔS_surr?',
  ['+0.268 kJ/(mol·K)', '−0.268 kJ/(mol·K)', '+80 kJ/(mol·K)', '0'],
  '+0.268 kJ/(mol·K)',
  'ΔS_surr = −ΔH/T = −(−80)/298 = +0.268 kJ/(mol·K) = +268 J/(mol·K). Exothermic disorders the surroundings.');
short('u1-2nd-law', 3, 'For a reaction with ΔH = +50 kJ/mol, ΔS_sys = +200 J/(mol·K) at 300 K, is ΔS_univ positive?',
  'yes',
  'ΔS_surr = −50000/300 = −167 J/(mol·K). ΔS_univ = 200 − 167 = +33 J/(mol·K) > 0, so yes — spontaneous.');

mcq('u1-sign-delta-S', 1, 'Which has the largest positive ΔS_sys?',
  ['2 H₂(g) + O₂(g) → 2 H₂O(l)', 'N₂(g) + 3 H₂(g) → 2 NH₃(g)', 'CaCO₃(s) → CaO(s) + CO₂(g)', '2 NO₂(g) → N₂O₄(g)'],
  'CaCO₃(s) → CaO(s) + CO₂(g)',
  'Producing a gas from a solid increases moles of gas from 0 to 1 → large positive ΔS. Others either decrease moles of gas or condense.');
short('u1-sign-delta-S', 2, 'What is the sign of ΔS for: I₂(s) → I₂(g)?',
  'positive',
  'Sublimation: solid → gas, much higher disorder.');

mcq('u1-spontaneity-cases', 1, 'A reaction with ΔH = +20 kJ/mol and ΔS = +50 J/(mol·K) is spontaneous when T is:',
  ['Below 400 K', 'Above 400 K', 'Spontaneous at all T', 'Never spontaneous'],
  'Above 400 K',
  'Crossover: T = ΔH/ΔS = 20000/50 = 400 K. For ΔH>0 and ΔS>0, spontaneous when T > 400 K.');
short('u1-spontaneity-cases', 2, 'For ΔH < 0, ΔS < 0: at what temperatures is the reaction spontaneous?',
  'low',
  'When T is small enough that T|ΔS| < |ΔH|. As T rises, T·ΔS pulls ΔG positive.');

mcq('u1-delta-G-eqn', 1, 'ΔH = −40 kJ/mol, ΔS = −120 J/(mol·K). ΔG at 298 K?',
  ['−4.24 kJ/mol', '+4.24 kJ/mol', '−75.8 kJ/mol', '+75.8 kJ/mol'],
  '−4.24 kJ/mol',
  'ΔG = −40 − (298)(−0.120) = −40 + 35.76 = −4.24 kJ/mol. Watch unit conversion on ΔS.');
short('u1-delta-G-eqn', 2, 'At what temperature does ΔG = 0 if ΔH = 30 kJ/mol and ΔS = 100 J/(mol·K)?',
  '300',
  'T = ΔH/ΔS = 30000 J / 100 J/(K) = 300 K.');

mcq('u1-delta-G-from-f', 1, 'ΔG°rxn for 2A → B if ΔG°f(A) = −30 kJ/mol and ΔG°f(B) = −50 kJ/mol?',
  ['−20 kJ/mol', '+10 kJ/mol', '−110 kJ/mol', '+20 kJ/mol'],
  '+10 kJ/mol',
  'ΔG°rxn = ΔG°f(B) − 2·ΔG°f(A) = −50 − 2(−30) = −50 + 60 = +10 kJ/mol.');
short('u1-delta-G-from-f', 2, 'What is ΔG°f of O₂(g)?',
  '0',
  'Element in its standard state has ΔG°f = 0 by definition.');

mcq('u1-delta-G-K-link', 1, 'At 298 K, K = 1×10⁻³ for a reaction. ΔG°?',
  ['−17.1 kJ/mol', '+17.1 kJ/mol', '−6.91 kJ/mol', '+6.91 kJ/mol'],
  '+17.1 kJ/mol',
  'ΔG° = −RT·ln K = −(8.314)(298)·ln(0.001) = −(2479)(−6.908) = +17120 J/mol ≈ +17.1 kJ/mol.');
short('u1-delta-G-K-link', 2, 'If ΔG° = 0 at 298 K, what is K?',
  '1',
  'ln K = 0 → K = 1.');

// Unit 2
mcq('u2-imf-types', 1, 'Which IMFs are present in CH₃OH(l)?',
  ['Dispersion only', 'Dispersion + dipole-dipole', 'Dispersion + dipole-dipole + H-bonding', 'Ion-dipole'],
  'Dispersion + dipole-dipole + H-bonding',
  'Methanol has an O-H, so it can H-bond. It is polar (dipole-dipole) and like all molecules has dispersion.');
mcq('u2-imf-types', 2, 'Which molecule cannot H-bond with itself?',
  ['NH₃', 'H₂O', 'CH₃F', 'HF'],
  'CH₃F',
  'H-bond donor requires H on F/O/N. In CH₃F, H is on C, not F. (F can accept but not donate.)');
short('u2-imf-types', 3, 'List the strongest IMF in liquid CO₂.',
  'dispersion',
  'CO₂ is linear and nonpolar; only dispersion forces present.');

mcq('u2-imf-strength', 1, 'Why is the BP of H₂O (100°C) much higher than H₂S (−60°C) despite H₂S being heavier?',
  ['H₂O has more electrons', 'H₂O has H-bonding; H₂S does not', 'H₂S is nonpolar', 'H₂O has ion-dipole forces'],
  'H₂O has H-bonding; H₂S does not',
  'S is not electronegative enough for H-bonding. Strong H-bond network in water dominates over the larger dispersion in H₂S.');
short('u2-imf-strength', 2, 'Is hexane (C₆H₁₄) miscible with water? (yes/no)',
  'no',
  'Hexane is nonpolar; water is polar/H-bonded. Like dissolves like → immiscible.');

mcq('u2-physical-properties', 1, 'Substance A has stronger IMFs than substance B. Compared to B, A has:',
  ['Higher vapor pressure', 'Lower BP', 'Higher viscosity', 'Lower surface tension'],
  'Higher viscosity',
  'Stronger IMFs → higher BP, lower vapor pressure, higher viscosity, higher surface tension.');
short('u2-physical-properties', 2, 'Which has higher BP: pentane or 2,2-dimethylpropane?',
  'pentane',
  'Pentane is linear → more surface area for dispersion contact than the spherical neopentane.');

mcq('u2-heating-curves', 1, 'On a heating curve, a horizontal plateau indicates:',
  ['Specific heat is changing', 'Phase change at constant T', 'Sample is gaseous', 'Heat being lost'],
  'Phase change at constant T',
  'All added heat goes into breaking IMFs (q = n·ΔH_phase), so T stays constant.');
short('u2-heating-curves', 2, 'How much heat to melt 36 g ice at 0 °C? (ΔH_fus = 6.01 kJ/mol)',
  '12.0 kJ',
  '36 g / 18 g/mol = 2.00 mol; q = 2.00 × 6.01 = 12.02 kJ. ≈ 12.0 kJ.');

mcq('u2-phase-diagrams', 1, 'At the triple point of water:',
  ['Only ice and water coexist', 'Only water and vapor coexist', 'Ice, water, and vapor all coexist', 'No phases coexist'],
  'Ice, water, and vapor all coexist',
  'The triple point is the unique (T,P) where all three phases are in equilibrium.');
short('u2-phase-diagrams', 2, 'Above the critical point, what phase exists?',
  'supercritical fluid',
  'Liquid and gas are indistinguishable; the substance is a supercritical fluid.');

mcq('u2-colligative', 1, 'ΔT_b for 1.00 m NaCl in water? (K_b = 0.512 °C·kg/mol)',
  ['0.512 °C', '1.024 °C', '0.256 °C', '2.05 °C'],
  '1.024 °C',
  'i ≈ 2 for NaCl; ΔT_b = (2)(0.512)(1.00) = 1.024 °C.');
mcq('u2-colligative', 2, 'Which solution has the lowest freezing point?',
  ['0.10 m glucose', '0.10 m NaCl', '0.10 m CaCl₂', '0.10 m sucrose'],
  '0.10 m CaCl₂',
  'i = 3 for CaCl₂, the largest of the four → largest ΔT_f → lowest freezing point.');
short('u2-colligative', 3, 'For 0.50 m KCl (i = 2), what is ΔT_f? (K_f = 1.86 °C·kg/mol)',
  '1.86',
  'ΔT_f = (2)(1.86)(0.50) = 1.86 °C.');

mcq('u2-concentration', 1, 'A 0.50 m aqueous solution means:',
  ['0.50 mol solute per L solution', '0.50 mol solute per L solvent', '0.50 mol solute per kg solvent', '0.50 mol solute per kg solution'],
  '0.50 mol solute per kg solvent',
  'Molality (m) is moles per kilogram of solvent.');
short('u2-concentration', 2, 'van\'t Hoff factor for Na₂SO₄ (ideal)?',
  '3',
  '2 Na⁺ + SO₄²⁻ = 3 ions per formula unit.');

// Unit 3
mcq('u3-rate-expression', 1, 'For 2 A + B → 3 C, the rate is:',
  ['−d[A]/dt = d[C]/dt', 'rate = −(1/2)d[A]/dt = −d[B]/dt = (1/3)d[C]/dt', 'rate = d[A]/dt + d[B]/dt', 'rate = (1/3)d[A]/dt'],
  'rate = −(1/2)d[A]/dt = −d[B]/dt = (1/3)d[C]/dt',
  'Each species\'s rate divided by its stoichiometric coefficient gives the unique reaction rate, with reactants negative.');
short('u3-rate-expression', 2, 'If d[C]/dt = +0.030 M/s for 2A + B → 3C, what is d[B]/dt?',
  '-0.010',
  'rate = (1/3)d[C]/dt = +0.010 M/s = −d[B]/dt, so d[B]/dt = −0.010 M/s.');

mcq('u3-rate-law-data', 1, 'Doubling [A] doubles the rate; doubling [B] quadruples the rate. Rate law?',
  ['r = k[A][B]', 'r = k[A][B]²', 'r = k[A]²[B]', 'r = k[A]²[B]²'],
  'r = k[A][B]²',
  '2x rate from 2x [A] → 1st order in A. 4x rate from 2x [B] → 2nd order in B.');
short('u3-rate-law-data', 2, 'Units of k for rate law r = k[A]²?',
  'M^-1 s^-1',
  'For 2nd order, k has units M⁻¹·s⁻¹ (L·mol⁻¹·s⁻¹).');

mcq('u3-integrated', 1, 'A plot of 1/[A] vs t is linear with slope 0.020 M⁻¹·s⁻¹. The reaction order and k are:',
  ['1st order, k = 0.020 s⁻¹', '2nd order, k = 0.020 M⁻¹·s⁻¹', '0th order, k = 0.020 M·s⁻¹', '2nd order, k = −0.020 M⁻¹·s⁻¹'],
  '2nd order, k = 0.020 M⁻¹·s⁻¹',
  '1/[A] vs t linear → 2nd order; slope = +k.');
short('u3-integrated', 2, 'For 1st order, [A] decreases from 0.40 to 0.10 M in 40 s. What is k?',
  '0.0347',
  'ln(0.10/0.40) = −k·40 → −1.386 = −40k → k = 0.0347 s⁻¹.');

mcq('u3-half-life', 1, 'A 1st-order reaction has t½ = 30 s. After 90 s, what fraction of A remains?',
  ['1/2', '1/4', '1/8', '1/16'],
  '1/8',
  '90 s = 3 half-lives → (1/2)³ = 1/8 remains.');
short('u3-half-life', 2, 'For a reaction with t½ that doubles each successive half-life, what order is it?',
  '2',
  '2nd order: t½ = 1/(k[A]₀). As [A]₀ decreases, t½ grows.');

mcq('u3-coord-diagram', 1, 'A reaction has E_{a,fwd} = 80 kJ/mol and ΔH = −30 kJ/mol. E_{a,rev}?',
  ['50 kJ/mol', '110 kJ/mol', '−110 kJ/mol', '30 kJ/mol'],
  '110 kJ/mol',
  'E_{a,rev} = E_{a,fwd} − ΔH = 80 − (−30) = 110 kJ/mol.');
short('u3-coord-diagram', 2, 'Does a catalyst change ΔH? (yes/no)',
  'no',
  'Catalyst lowers BOTH E_{a,fwd} and E_{a,rev} by the same amount, leaving ΔH = product − reactant unchanged.');

mcq('u3-mechanisms', 1, 'In a mechanism, a species that is produced in one step and consumed in a later step is a(n):',
  ['Catalyst', 'Reactant', 'Intermediate', 'Transition state'],
  'Intermediate',
  'Intermediates appear and disappear within the mechanism but not in the overall equation.');
short('u3-mechanisms', 2, 'If the slow step is bimolecular A + B → AB, what is the rate law?',
  'r = k[A][B]',
  'For elementary steps, the rate law follows molecularity directly.');

mcq('u3-arrhenius', 1, 'If T increases from 300 K to 310 K for a reaction with E_a = 50 kJ/mol, k changes by approximately:',
  ['× 1.0 (no change)', '× 1.9', '× 0.5', '× 10'],
  '× 1.9',
  'ln(k₂/k₁) = −(50000/8.314)(1/310 − 1/300) ≈ 0.647 → k₂/k₁ ≈ 1.9. Rule of thumb: ~2× per 10 K.');
short('u3-arrhenius', 2, 'In ln k vs 1/T plot, slope = ?',
  '-E_a/R',
  'From ln k = ln A − E_a/(RT), slope is −E_a/R.');

mcq('u3-K-expr', 1, 'For 2 NO(g) + O₂(g) ⇌ 2 NO₂(g), K_c =',
  ['[NO₂]²/([NO]²[O₂])', '[NO][O₂]/[NO₂]', '[NO₂]/([NO][O₂])', '[NO]²[O₂]/[NO₂]²'],
  '[NO₂]²/([NO]²[O₂])',
  'Products over reactants, each raised to its stoichiometric coefficient.');
short('u3-K-expr', 2, 'If K_c = 4.0 for A ⇌ B, what is K_c for 2A ⇌ 2B?',
  '16',
  'When multiplied by n, K becomes K^n = 4.0² = 16.');

mcq('u3-Q-vs-K', 1, 'K = 10 for a reaction. Current Q = 1.0. Which direction does the reaction shift?',
  ['Forward', 'Reverse', 'No shift', 'Cannot determine'],
  'Forward',
  'Q < K means too few products → forward reaction to build them up until Q = K.');
short('u3-Q-vs-K', 2, 'If Q > K, which direction does the reaction shift?',
  'reverse',
  'Too many products → reverse to consume them.');

// Unit 4 — heavier coverage
mcq('u4-le-chatelier', 1, 'For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH = −92 kJ. Increasing T causes:',
  ['Shift toward NH₃, K increases', 'Shift toward N₂ and H₂, K decreases', 'No shift', 'Shift toward NH₃, K decreases'],
  'Shift toward N₂ and H₂, K decreases',
  'Exothermic forward reaction → heat is a "product"; adding heat shifts reverse, K decreases.');
mcq('u4-le-chatelier', 2, 'For the same reaction, decreasing volume (increasing pressure) causes:',
  ['Shift toward NH₃', 'Shift toward N₂ and H₂', 'No shift', 'Insufficient information'],
  'Shift toward NH₃',
  'Right has 2 mol gas; left has 4 mol gas. Decreasing V shifts to fewer moles of gas (right).');
mcq('u4-le-chatelier', 3, 'Adding Ar(g) at constant volume to a gas-phase equilibrium:',
  ['Shifts toward products', 'Shifts toward reactants', 'No shift', 'Depends on ΔH'],
  'No shift',
  'At constant V, partial pressures of reactants and products are unchanged; Q remains = K.');
short('u4-le-chatelier', 4, 'For an endothermic reaction, increasing T shifts the equilibrium in which direction?',
  'forward',
  'Heat is a "reactant"; adding heat drives forward; K increases.');

mcq('u4-G-K', 1, 'A reaction has ΔG° = +12.0 kJ/mol at 298 K. K is approximately:',
  ['0.0079', '128', '4.84', '1.0'],
  '0.0079',
  'ln K = −12000/(8.314·298) ≈ −4.84 → K ≈ e^−4.84 ≈ 0.0079. K < 1 since ΔG° > 0.');
mcq('u4-G-K', 2, 'If K > 1 for a reaction, then ΔG° is:',
  ['Positive', 'Negative', 'Zero', 'Cannot determine'],
  'Negative',
  'K > 1 → ln K > 0 → ΔG° = −RT·ln K < 0.');
short('u4-G-K', 3, 'At what condition is ΔG (not ΔG°) equal to zero?',
  'equilibrium',
  'ΔG = 0 defines equilibrium (Q = K). ΔG° is for standard conditions, not equilibrium.');

mcq('u4-conjugate-pairs', 1, 'The conjugate acid of H₂PO₄⁻ is:',
  ['HPO₄²⁻', 'PO₄³⁻', 'H₃PO₄', 'H₃O⁺'],
  'H₃PO₄',
  'Conjugate acid = parent + H⁺. H₂PO₄⁻ + H⁺ → H₃PO₄.');
mcq('u4-conjugate-pairs', 2, 'For HClO₂ (K_a = 1.1×10⁻²), K_b of ClO₂⁻ at 25 °C is:',
  ['1.1×10⁻²', '9.1×10⁻¹³', '1.0×10⁻¹⁴', '1.1×10⁻¹²'],
  '9.1×10⁻¹³',
  'K_b = K_w/K_a = 1.0×10⁻¹⁴ / 1.1×10⁻² = 9.1×10⁻¹³.');
short('u4-conjugate-pairs', 3, 'The conjugate base of HSO₄⁻ is:',
  'SO4^2-',
  'Lose one H⁺: HSO₄⁻ → SO₄²⁻.');

mcq('u4-pH-pOH-Kw', 1, 'A solution has [OH⁻] = 2.5×10⁻⁴ M at 25 °C. pH is:',
  ['3.60', '10.40', '4.00', '11.00'],
  '10.40',
  'pOH = −log(2.5×10⁻⁴) = 3.60; pH = 14.00 − 3.60 = 10.40.');
short('u4-pH-pOH-Kw', 2, 'What is [H₃O⁺] in a solution with pH = 8.30?',
  '5.0e-9',
  '[H₃O⁺] = 10⁻⁸·³⁰ ≈ 5.0×10⁻⁹ M.');
short('u4-pH-pOH-Kw', 3, 'pH of pure water at 25 °C?',
  '7',
  '[H₃O⁺] = [OH⁻] = √K_w = 10⁻⁷; pH = 7.00.');

mcq('u4-acid-strength-rank', 1, 'Which is the strongest acid?',
  ['HF (K_a 7.2×10⁻⁴)', 'HCN (K_a 4.9×10⁻¹⁰)', 'CH₃COOH (K_a 1.8×10⁻⁵)', 'HNO₂ (K_a 4.5×10⁻⁴)'],
  'HF (K_a 7.2×10⁻⁴)',
  'Largest K_a = strongest acid.');
mcq('u4-acid-strength-rank', 2, 'Rank acid strength: HClO, HClO₂, HClO₃, HClO₄.',
  ['HClO < HClO₂ < HClO₃ < HClO₄', 'HClO₄ < HClO₃ < HClO₂ < HClO', 'All equal', 'HClO > HClO₂ > HClO₃ > HClO₄'],
  'HClO < HClO₂ < HClO₃ < HClO₄',
  'More oxygens on central atom = more resonance stabilization of conjugate base = stronger acid.');
short('u4-acid-strength-rank', 3, 'Stronger acid → conjugate base is (stronger/weaker)?',
  'weaker',
  'Strong HA dissociates fully; A⁻ has little tendency to accept H⁺ back.');

mcq('u4-strong-pH', 1, 'pH of 0.0050 M HBr?',
  ['2.30', '2.00', '2.70', '11.70'],
  '2.30',
  'HBr is a strong acid: [H₃O⁺] = 0.0050; pH = −log(0.0050) = 2.30.');
mcq('u4-strong-pH', 2, 'pH of 0.0010 M Ca(OH)₂?',
  ['3.00', '2.70', '11.30', '11.00'],
  '11.30',
  '[OH⁻] = 2(0.0010) = 0.0020; pOH = 2.70; pH = 11.30.');
short('u4-strong-pH', 3, 'pH of 0.020 M NaOH?',
  '12.30',
  '[OH⁻] = 0.020; pOH = 1.70; pH = 12.30.');

mcq('u4-weak-pH', 1, 'pH of 0.10 M HF (K_a = 7.2×10⁻⁴)?',
  ['2.07', '1.07', '3.14', '6.93'],
  '2.07',
  'x² = (7.2×10⁻⁴)(0.10) → x = 8.49×10⁻³; pH = −log(8.49×10⁻³) ≈ 2.07.');
mcq('u4-weak-pH', 2, 'pH of 0.25 M NH₃ (K_b = 1.8×10⁻⁵)?',
  ['11.33', '2.67', '5.27', '8.73'],
  '11.33',
  'x² = (1.8×10⁻⁵)(0.25) → x = 2.12×10⁻³; pOH = 2.67; pH = 11.33.');
short('u4-weak-pH', 3, 'For a weak acid HA, increasing initial concentration causes % ionization to (increase/decrease)?',
  'decrease',
  '% ionization decreases as C increases (Le Chatelier on dissociation).');

mcq('u4-Ka-Kb-from-pH', 1, '0.100 M HA solution has pH 2.85. K_a?',
  ['2.0×10⁻⁵', '7.1×10⁻⁵', '5.0×10⁻³', '1.4×10⁻³'],
  '2.0×10⁻⁵',
  'x = 10⁻²·⁸⁵ = 1.41×10⁻³; K_a ≈ x²/(0.100 − x) ≈ (1.41×10⁻³)²/0.0986 ≈ 2.0×10⁻⁵.');
short('u4-Ka-Kb-from-pH', 2, '0.20 M weak acid is 1.5% ionized. K_a?',
  '4.6e-5',
  'x = 0.015·0.20 = 3.0×10⁻³; K_a = (3.0×10⁻³)²/(0.20 − 3.0×10⁻³) ≈ 4.6×10⁻⁵.');

mcq('u4-salt-pH', 1, 'Which salt produces a basic solution?',
  ['NH₄NO₃', 'NaCl', 'KF', 'AlCl₃'],
  'KF',
  'K⁺ is inert (strong base); F⁻ is conjugate base of weak acid HF → basic. NH₄NO₃ acidic; NaCl neutral; AlCl₃ acidic.');
mcq('u4-salt-pH', 2, 'NH₄ClO₄ in water is:',
  ['Basic', 'Acidic', 'Neutral', 'Cannot determine'],
  'Acidic',
  'NH₄⁺ is conjugate acid of weak base (K_a > 0); ClO₄⁻ inert (strong acid). Net acidic.');
short('u4-salt-pH', 3, 'NaNO₃ in water is acidic, basic, or neutral?',
  'neutral',
  'Na⁺ inert; NO₃⁻ inert (conjugate base of strong acid HNO₃).');

mcq('u4-bronsted-K', 1, 'K for HF + CN⁻ ⇌ F⁻ + HCN, given K_a(HF) = 7.2×10⁻⁴, K_a(HCN) = 4.9×10⁻¹⁰?',
  ['1.5×10⁶', '3.5×10⁻¹³', '6.8×10⁻⁷', '1.5×10⁻⁶'],
  '1.5×10⁶',
  'K = K_a(HF)/K_a(HCN) = (7.2×10⁻⁴)/(4.9×10⁻¹⁰) ≈ 1.5×10⁶. Right-favored (HCN is the weaker acid).');
short('u4-bronsted-K', 2, 'For HA + B⁻ ⇌ A⁻ + HB, equilibrium favors the side with the (stronger/weaker) acid.',
  'weaker',
  'Equilibrium favors the weaker acid side (smaller K_a).');

mcq('u4-buffer-composition', 1, 'Which of these is a buffer?',
  ['HCl + NaCl', 'HF + NaF', 'NaOH + NaCl', 'HCl + NaOH (equal moles)'],
  'HF + NaF',
  'Buffer = weak acid + its conjugate base. HF/F⁻ qualifies; HCl is strong.');
mcq('u4-buffer-composition', 2, 'A buffer is most effective when the pH equals approximately:',
  ['7.0', 'pK_a', 'pK_b', '14 − pK_a'],
  'pK_a',
  'At pH = pK_a, [A⁻] = [HA], maximizing capacity to absorb either acid or base.');
short('u4-buffer-composition', 3, 'What is the approximate useful pH range of a buffer relative to pK_a?',
  'pK_a ± 1',
  'Outside this range, the [A⁻]/[HA] ratio is > 10 or < 0.1, and the buffer is too lopsided.');

mcq('u4-henderson', 1, 'pH of buffer with 0.20 M HOAc (pK_a 4.74) and 0.50 M OAc⁻?',
  ['4.74', '5.14', '4.34', '5.00'],
  '5.14',
  'pH = 4.74 + log(0.50/0.20) = 4.74 + 0.40 = 5.14.');
mcq('u4-henderson', 2, 'pH of buffer 0.40 M NH₃ + 0.20 M NH₄⁺, pK_a(NH₄⁺) = 9.25?',
  ['8.95', '9.25', '9.55', '4.75'],
  '9.55',
  'pH = pK_a + log([base]/[acid]) = 9.25 + log(0.40/0.20) = 9.25 + 0.30 = 9.55.');
short('u4-henderson', 3, 'If pH = pK_a + 1, what is [A⁻]/[HA]?',
  '10',
  'log(10) = 1, so the ratio is 10.');

mcq('u4-buffer-after-addition', 1, 'A 1.0 L buffer contains 0.10 mol HA + 0.10 mol A⁻; pK_a = 5.00. Add 0.020 mol NaOH. New pH?',
  ['5.00', '5.18', '4.82', '5.30'],
  '5.18',
  'NaOH consumes HA: HA → 0.080, A⁻ → 0.120. pH = 5.00 + log(0.120/0.080) = 5.00 + 0.176 = 5.18.');
mcq('u4-buffer-after-addition', 2, 'Same buffer (0.10/0.10, pK_a 5.00), add 0.020 mol HCl. New pH?',
  ['5.00', '4.82', '5.18', '4.00'],
  '4.82',
  'HCl consumes A⁻: A⁻ → 0.080, HA → 0.120. pH = 5.00 + log(0.080/0.120) = 5.00 − 0.176 = 4.82.');
short('u4-buffer-after-addition', 3, 'Order of operations for "add strong acid to buffer" problems?',
  'stoichiometry then Henderson-Hasselbalch',
  'First the strong acid reacts completely with A⁻ (or strong base with HA), updating moles. Then apply H-H with the new moles.');

mcq('u4-buffer-capacity', 1, 'Best conjugate pair for a buffer at pH 7.4?',
  ['CH₃COOH/CH₃COO⁻ (pK_a 4.74)', 'H₂PO₄⁻/HPO₄²⁻ (pK_a 7.20)', 'NH₄⁺/NH₃ (pK_a 9.25)', 'HF/F⁻ (pK_a 3.14)'],
  'H₂PO₄⁻/HPO₄²⁻ (pK_a 7.20)',
  'pK_a within ±1 of 7.4. (This is the blood buffer system.)');
mcq('u4-buffer-capacity', 2, 'Which buffer has the highest capacity?',
  ['0.01 M HA / 0.01 M A⁻', '0.1 M HA / 0.1 M A⁻', '1.0 M HA / 1.0 M A⁻', 'all equal'],
  '1.0 M HA / 1.0 M A⁻',
  'Capacity scales with absolute moles, not the ratio.');
short('u4-buffer-capacity', 3, 'Best buffer pair near pH 5.0?',
  'acetic acid / acetate',
  'pK_a(CH₃COOH) ≈ 4.74, within ±1 of 5.0.');

export const QUESTIONS: Question[] = questions;

// =====================================================
// Lookups
// =====================================================
export const UNITS_BY_ID: Record<number, Unit> = Object.fromEntries(
  UNITS.map((u) => [u.id, u]),
);
export const TOPICS_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t]),
);

export const cardsByTopic = (topicId: string): Flashcard[] =>
  FLASHCARDS.filter((c) => c.topicId === topicId);

export const questionsByTopic = (topicId: string): Question[] =>
  QUESTIONS.filter((q) => q.topicId === topicId);

export const topicsByUnit = (unitId: number): Topic[] =>
  TOPICS.filter((t) => t.unitId === unitId);
