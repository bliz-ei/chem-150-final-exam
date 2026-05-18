import React from 'react';
import Link from 'next/link';
import { Fmt } from '@/lib/chemFmt';

const formatChildren = (children: React.ReactNode): React.ReactNode =>
  React.Children.map(children, (child, i) =>
    typeof child === 'string' ? <Fmt key={i}>{child}</Fmt> : child,
  );

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-zinc-300 leading-relaxed my-3">{formatChildren(children)}</p>
);

const Eq = ({ children }: { children: string }) => (
  <div className="my-3 mx-auto px-4 py-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-center text-zinc-100 inline-block">
    <Fmt>{children}</Fmt>
  </div>
);

const EqBlock = ({ children }: { children: string }) => (
  <div className="my-3 px-4 py-2 rounded bg-zinc-900 border border-zinc-800 font-mono text-center text-zinc-100">
    <Fmt>{children}</Fmt>
  </div>
);

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-2xl font-semibold text-zinc-100 mt-14 mb-3 scroll-mt-20 border-b border-zinc-800 pb-2">
    {children}
  </h2>
);

const H3 = ({ id, children }: { id: string; children: string }) => (
  <h3 id={id} className="text-lg font-medium text-zinc-100 mt-8 mb-2 scroll-mt-20">
    <Fmt>{children}</Fmt>
  </h3>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="my-1">{formatChildren(children)}</li>
);

const Ex = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/40">
    <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">{title}</div>
    {children}
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 p-3 rounded-lg border-l-2 border-zinc-500 bg-zinc-900/40 text-sm text-zinc-300">
    {children}
  </div>
);

export default function GuidePage() {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-6">
        <div className="text-xs text-zinc-500">Chem 150 · Final exam study guide</div>
        <h1 className="text-3xl font-semibold text-zinc-100 mt-1">
          Everything you need to know
        </h1>
        <p className="text-zinc-400 text-sm mt-2">
          Start-from-zero walkthrough of the four units. Read this end-to-end, then use the flashcards
          and practice questions to drill the patterns. Unit 4 is 60% of the exam, so the longest
          section is intentional.
        </p>
      </header>

      <nav className="my-6 p-4 rounded-lg border border-zinc-800 bg-zinc-950">
        <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Contents</div>
        <ol className="space-y-1 text-sm list-decimal list-inside marker:text-zinc-500">
          <li><a href="#u1" className="text-zinc-300 hover:text-zinc-100 underline-offset-2 hover:underline">Unit 1 — Thermochemistry & Free Energy (~13%)</a></li>
          <li><a href="#u2" className="text-zinc-300 hover:text-zinc-100 underline-offset-2 hover:underline">Unit 2 — Intermolecular Forces, Phase, Solutions (~13%)</a></li>
          <li><a href="#u3" className="text-zinc-300 hover:text-zinc-100 underline-offset-2 hover:underline">Unit 3 — Kinetics & Equilibrium I (~13%)</a></li>
          <li><a href="#u4" className="text-zinc-300 hover:text-zinc-100 underline-offset-2 hover:underline">Unit 4 — Acid/Base & Equilibrium II (~60%)</a></li>
          <li><a href="#strategy" className="text-zinc-300 hover:text-zinc-100 underline-offset-2 hover:underline">Exam-day strategy</a></li>
        </ol>
      </nav>

      <Note>
        Throughout this guide, formulas like <Fmt>{`K_a`}</Fmt>, <Fmt>{`ΔT_b`}</Fmt>, and <Fmt>{`E_{a,fwd}`}</Fmt>{' '}
        render with real subscripts and superscripts. Standard constants used: R = 8.314 J/(mol·K) for
        ΔG and Arrhenius, R = 0.0821 L·atm/(mol·K) for gas-law and osmotic-pressure problems,
        K<sub>w</sub> = 1.0×10<sup>−14</sup> at 25 °C.
      </Note>

      {/* =========================================== */}
      {/* UNIT 1                                       */}
      {/* =========================================== */}
      <H2 id="u1">Unit 1 — Thermochemistry & Free Energy</H2>
      <P>
        Thermodynamics asks two questions about a chemical reaction: how much heat does it release or
        absorb (enthalpy, ΔH), and does it proceed spontaneously in the forward direction (free energy,
        ΔG). The bridge between them is entropy (ΔS), a measure of how spread-out the energy and
        matter become.
      </P>

      <H3 id="u1-entropy">Entropy and the second law</H3>
      <P>
        Entropy S is, intuitively, a count of microstates: the more ways a system can arrange itself and
        still look the same macroscopically, the higher its entropy. The second law of thermodynamics
        says that for any real (spontaneous) process, the entropy of the universe increases:
      </P>
      <EqBlock>ΔS_univ = ΔS_sys + ΔS_surr ≥ 0</EqBlock>
      <P>
        The system's surroundings change in entropy because of heat flow. If the system releases heat
        (exothermic, ΔH_sys &lt; 0), the surroundings warm up and become more disordered. Quantitatively,
        at constant temperature and pressure:
      </P>
      <EqBlock>ΔS_surr = − ΔH_sys / T</EqBlock>
      <P>
        So an exothermic reaction (negative ΔH) automatically gives a positive ΔS_surr — a thermodynamic
        "push" toward spontaneity from the surroundings, regardless of what the system itself does.
      </P>

      <H3 id="u1-sign-S">Predicting the sign of ΔS for a system</H3>
      <P>You don't need a table to predict whether ΔS_sys is positive or negative. Apply these rules
        in order of priority:</P>
      <ol className="list-decimal list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Phase change: gas &gt;&gt; liquid &gt; solid. Anything that produces gas from liquid or solid is strongly +ΔS. Condensation/freezing is −ΔS.</LI>
        <LI>Moles of gas: count Δn_gas = (mol gas products) − (mol gas reactants). Positive Δn_gas → +ΔS_sys. Negative → −ΔS_sys.</LI>
        <LI>Volume: gas expanding into larger volume → +ΔS. Compression → −ΔS.</LI>
        <LI>Temperature: heating a substance → +ΔS (more energy levels accessible).</LI>
        <LI>Molecular complexity: larger or floppier molecules have more vibrational/rotational microstates, so higher S. For example, C₂H₆ has higher S than CH₄.</LI>
        <LI>Dissolution: usually +ΔS, because the ordered solid lattice breaks up. (Ion-hydration can complicate this, but for AP-style questions, dissolving is +ΔS.)</LI>
      </ol>

      <Ex title="Worked example">
        <P>For the reaction CaCO₃(s) → CaO(s) + CO₂(g), what is the sign of ΔS_sys?</P>
        <P>
          Producing 1 mole of gas from a solid increases the moles of gas from 0 to 1. By rule 2 this is
          a large positive ΔS_sys. (Note that rule 1 — phase — also points the same way.)
        </P>
      </Ex>

      <H3 id="u1-gibbs">Gibbs free energy</H3>
      <P>
        The Gibbs free energy combines enthalpy and entropy into a single quantity whose sign tells you
        whether a reaction is spontaneous at the temperature you care about:
      </P>
      <EqBlock>ΔG = ΔH − T·ΔS</EqBlock>
      <P>
        Negative ΔG means spontaneous (forward reaction proceeds). Positive ΔG means non-spontaneous (the
        reverse direction is spontaneous). Zero means at equilibrium. T is always in Kelvin.
      </P>
      <Note>
        <strong>Unit pitfall.</strong> ΔH is usually reported in kJ/mol but ΔS in J/(mol·K).
        Before subtracting, convert one of them. The easiest habit: convert ΔS to kJ/(mol·K)
        by dividing by 1000.
      </Note>

      <H3 id="u1-four-cases">The four spontaneity cases</H3>
      <P>The signs of ΔH and ΔS combine into four possibilities:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>ΔH &lt; 0, ΔS &gt; 0:</strong> ΔG is always negative. Spontaneous at every temperature.</LI>
        <LI><strong>ΔH &gt; 0, ΔS &lt; 0:</strong> ΔG is always positive. Never spontaneous.</LI>
        <LI><strong>ΔH &lt; 0, ΔS &lt; 0:</strong> ΔG is negative only when T is small enough. Spontaneous at low T.</LI>
        <LI><strong>ΔH &gt; 0, ΔS &gt; 0:</strong> ΔG is negative only when T is large enough. Spontaneous at high T.</LI>
      </ul>
      <P>
        In the last two cases, the crossover temperature at which ΔG = 0 is
      </P>
      <EqBlock>T_crossover = ΔH / ΔS</EqBlock>

      <Ex title="Worked example">
        <P>
          For the reaction 2 NO₂(g) → N₂O₄(g), ΔH° = −58 kJ/mol and ΔS° = −176 J/(mol·K). At what
          temperatures is the forward reaction spontaneous?
        </P>
        <P>
          Both negative → "spontaneous at low T" case. Crossover: T = ΔH/ΔS = (−58000 J/mol) / (−176
          J/(mol·K)) = 330 K. Forward reaction is spontaneous below 330 K.
        </P>
      </Ex>

      <H3 id="u1-from-f">Calculating ΔG°_rxn from formation values</H3>
      <P>
        Tables of standard free energies of formation, ΔG°_f, let you compute ΔG°_rxn without measuring
        anything. Use the standard "products − reactants" structure:
      </P>
      <EqBlock>ΔG°_rxn = Σ ν · ΔG°_f(products) − Σ ν · ΔG°_f(reactants)</EqBlock>
      <P>
        ν is the stoichiometric coefficient (multiply each ΔG°_f by it). Critically, the free energy of
        formation of an element in its standard state is zero — O₂(g), N₂(g), C(graphite), and so on
        all contribute 0 to the sum. The same structure applies to ΔH°_rxn from ΔH°_f and ΔS°_rxn from
        S° values.
      </P>

      <H3 id="u1-G-K">The bridge: ΔG° and K</H3>
      <P>
        The standard free-energy change of a reaction is directly tied to its equilibrium constant K:
      </P>
      <EqBlock>ΔG° = − R · T · ln K</EqBlock>
      <P>
        Use R = 8.314 J/(mol·K) and T in Kelvin (so ΔG° comes out in J/mol). The signs work
        intuitively:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>ΔG° &lt; 0 ⇒ ln K &gt; 0 ⇒ K &gt; 1 (products favored at equilibrium).</LI>
        <LI>ΔG° &gt; 0 ⇒ ln K &lt; 0 ⇒ K &lt; 1 (reactants favored).</LI>
        <LI>ΔG° = 0 ⇒ K = 1.</LI>
      </ul>
      <P>
        This is also why temperature changes the equilibrium constant: K depends on T because ΔG°
        does, via the ΔH° − TΔS° decomposition. We'll return to this in Unit 4.
      </P>
      <Ex title="Worked example">
        <P>If ΔG° = −10.0 kJ/mol at 298 K, what is K?</P>
        <P>
          ln K = −ΔG°/(RT) = −(−10000)/(8.314 · 298) = 10000/2477.6 ≈ 4.04. So K ≈ e^4.04 ≈ 57.
          Products are favored, but not overwhelmingly.
        </P>
      </Ex>

      {/* =========================================== */}
      {/* UNIT 2                                       */}
      {/* =========================================== */}
      <H2 id="u2">Unit 2 — Intermolecular Forces, Phase, Solutions</H2>
      <P>
        Unit 2 is about what holds molecules together (intermolecular forces, IMFs) and what physical
        consequences that has for liquids, solids, gases, and solutions.
      </P>

      <H3 id="u2-imf-types">The four types of IMF</H3>
      <P>From weakest (per pair) to strongest, in rough order:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>London dispersion forces (LDF):</strong> instantaneous induced dipoles. Present in every molecule, including nonpolar ones. Strength scales with polarizability — bigger electron clouds and more surface contact give stronger LDF. Linear pentane has a higher boiling point than spherical neopentane for this reason.</LI>
        <LI><strong>Dipole-dipole:</strong> attraction between permanent dipoles. Requires a polar molecule. Present in HCl(l), acetone, etc.</LI>
        <LI><strong>Hydrogen bonding:</strong> a special, strong dipole-dipole that arises when H is covalently bonded to F, O, or N. The H is a strong δ+ partial charge that interacts with a lone pair on F/O/N of another molecule. Water, alcohols, ammonia, HF — all hydrogen-bond. Crucially, CH₃F does NOT hydrogen-bond, because H is on C, not on F.</LI>
        <LI><strong>Ion-dipole:</strong> between an ion and a polar molecule. Dominates when ions dissolve in polar solvents — for example, Na⁺ in water.</LI>
      </ul>
      <P>
        For a given molecule, identify all IMFs that apply: every molecule has LDF; add dipole-dipole
        if polar; add H-bonding if it has H bound to F/O/N. CO₂ is linear and nonpolar (the two C=O
        dipoles cancel), so it has only LDF despite containing oxygen.
      </P>

      <H3 id="u2-strength">Ranking IMF strength & miscibility</H3>
      <P>
        For molecules of similar size, the ranking is roughly ion-dipole &gt; H-bond &gt; dipole-dipole
        &gt; LDF. But size matters: a very large nonpolar molecule (with strong LDF from many electrons)
        can have a higher boiling point than a small H-bonded one. Always check size before declaring a
        winner from "type" alone.
      </P>
      <P>
        Miscibility follows the rule "like dissolves like." Polar/H-bonding solutes dissolve in
        polar/H-bonding solvents (water dissolves NaCl and ethanol, but not hexane). Nonpolar solutes
        dissolve in nonpolar solvents (I₂ dissolves in CCl₄, not water).
      </P>

      <H3 id="u2-properties">Physical properties from IMFs</H3>
      <P>Stronger IMFs make a liquid harder to vaporize, slower to flow, and stickier:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Boiling point: ↑ with stronger IMF.</LI>
        <LI>Vapor pressure: ↓ with stronger IMF (fewer molecules can escape into the gas phase).</LI>
        <LI>Viscosity: ↑ with stronger IMF (resistance to flow).</LI>
        <LI>Surface tension: ↑ with stronger IMF.</LI>
        <LI>Heat of vaporization (ΔH_vap): ↑ with stronger IMF.</LI>
      </ul>
      <P>
        Temperature also matters. Higher T → higher kinetic energy → higher vapor pressure, lower
        viscosity. Water's anomalously high boiling point (100 °C for such a small molecule) is the
        signature of its hydrogen-bond network.
      </P>

      <H3 id="u2-heating-curves">Heating and cooling curves</H3>
      <P>
        Plot temperature versus heat added. You see sloped segments (warming within a single phase) and
        flat plateaus (phase transitions at constant T while IMFs are broken or reformed).
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Sloped segment:</strong> q = m · C · ΔT, where C is the specific heat capacity of that phase. Equivalently q = n · C_m · ΔT with molar heat capacity. The slope of the curve is inversely proportional to C: smaller C → steeper slope (less heat needed per °C).</LI>
        <LI><strong>Plateau:</strong> q = n · ΔH_phase. For melting, use ΔH_fus; for vaporizing, use ΔH_vap. T is constant during the plateau because all added heat goes into rearranging IMFs, not raising kinetic energy.</LI>
      </ul>
      <P>
        Almost always, ΔH_vap &gt; ΔH_fus, because vaporizing breaks essentially all IMFs (liquid → free
        gas particles), while melting only loosens them (rigid lattice → fluid liquid). For water,
        ΔH_fus = 6.01 kJ/mol but ΔH_vap = 40.7 kJ/mol — a factor of ~7.
      </P>
      <Ex title="Worked example">
        <P>How much heat to melt 36 g of ice at 0 °C?</P>
        <P>
          36 g / (18.0 g/mol) = 2.00 mol. q = n · ΔH_fus = (2.00 mol) · (6.01 kJ/mol) = 12.0 kJ.
        </P>
      </Ex>

      <H3 id="u2-phase-diagram">Phase diagrams</H3>
      <P>
        A phase diagram plots pressure (y) vs temperature (x), with curves dividing the plane into
        solid, liquid, and gas regions. Key features:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Triple point:</strong> the unique (T, P) at which all three phases coexist in equilibrium.</LI>
        <LI><strong>Critical point:</strong> the end of the liquid-gas curve. Above it, the substance is a supercritical fluid — there's no longer a meaningful distinction between liquid and gas.</LI>
        <LI><strong>Normal boiling point:</strong> the temperature where the liquid-gas curve crosses P = 1 atm.</LI>
        <LI><strong>Normal freezing point:</strong> same idea for the solid-liquid curve at 1 atm.</LI>
      </ul>
      <P>
        Water is unusual: its solid-liquid curve has a negative slope, because ice is less dense than
        liquid water. Increasing pressure shifts toward the denser (liquid) phase, so very high
        pressure can melt ice. Most substances have positive solid-liquid slope.
      </P>

      <H3 id="u2-conc">Concentration units</H3>
      <P>Solutions problems use several flavors of "concentration"; pay attention to which one a
        formula needs:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Molarity (M):</strong> mol solute per liter of <em>solution</em>.</LI>
        <LI><strong>Molality (m):</strong> mol solute per kilogram of <em>solvent</em> (not solution). Used for colligative properties because mass doesn't depend on T.</LI>
        <LI><strong>Mole fraction (X_A):</strong> n_A / n_total, dimensionless, sums to 1.</LI>
      </ul>

      <H3 id="u2-vH">The van't Hoff factor i</H3>
      <P>
        For colligative properties (which depend on the number of solute particles, not their
        identity), the van't Hoff factor i counts how many particles each formula unit produces when
        dissolved:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Nonelectrolyte (glucose, sucrose, urea): i = 1.</LI>
        <LI>NaCl: i = 2 (Na⁺ + Cl⁻).</LI>
        <LI>CaCl₂: i = 3 (Ca²⁺ + 2 Cl⁻).</LI>
        <LI>Na₂SO₄: i = 3 (2 Na⁺ + SO₄²⁻).</LI>
      </ul>
      <P>
        Real solutions sometimes give i slightly less than the ideal value due to ion pairing.
        Stick with the ideal value unless told otherwise.
      </P>

      <H3 id="u2-colligative">Colligative properties</H3>
      <P>Four formulas to memorize:</P>
      <EqBlock>ΔP_vap = X_solute · P°_solvent   (vapor pressure lowering)</EqBlock>
      <EqBlock>ΔT_b = i · K_b · m   (boiling point elevation)</EqBlock>
      <EqBlock>ΔT_f = i · K_f · m   (freezing point depression)</EqBlock>
      <EqBlock>Π = i · M · R · T   (osmotic pressure, M in mol/L)</EqBlock>
      <P>
        For ΔT_b: new BP = BP° + ΔT_b (positive shift). For ΔT_f: new FP = FP° − ΔT_f (the magnitude
        ΔT_f is what the formula gives; the actual freezing point drops). For osmotic pressure use R =
        0.0821 L·atm/(mol·K).
      </P>
      <Ex title="Worked example">
        <P>What is the freezing point of a 0.50 m aqueous solution of NaCl? (K_f = 1.86 °C·kg/mol)</P>
        <P>
          i = 2 for NaCl. ΔT_f = i · K_f · m = (2)(1.86)(0.50) = 1.86 °C. New FP = 0.00 − 1.86 =
          −1.86 °C.
        </P>
      </Ex>

      {/* =========================================== */}
      {/* UNIT 3                                       */}
      {/* =========================================== */}
      <H2 id="u3">Unit 3 — Kinetics & Equilibrium I</H2>
      <P>
        Kinetics asks how fast a reaction goes (and what controls that speed). Equilibrium I asks where
        a reaction ends up (its K expression and the position relative to Q). Unit 4 will extend these
        ideas to acid-base chemistry.
      </P>

      <H3 id="u3-rate">Reaction rate</H3>
      <P>
        For a generic reaction a A + b B → c C + d D, the rate is defined symmetrically so that one
        number applies regardless of which species you watch:
      </P>
      <EqBlock>rate = − (1/a) · d[A]/dt = − (1/b) · d[B]/dt = (1/c) · d[C]/dt = (1/d) · d[D]/dt</EqBlock>
      <P>
        Reactants get a negative sign because their concentrations decrease. The coefficient appears
        in the denominator to give a single, unique reaction rate. Typical units: M/s.
      </P>

      <H3 id="u3-rate-law">Rate laws and reaction orders</H3>
      <P>
        The rate law expresses rate as a function of concentrations:
      </P>
      <EqBlock>rate = k · [A]^m · [B]^n</EqBlock>
      <P>
        m and n are the orders with respect to A and B (often 0, 1, or 2). They are <em>determined
        experimentally</em>, not from stoichiometry. The overall order is m + n. k is the rate constant
        — its units depend on the overall order so that "rate" comes out as M/s:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>0th order overall: k in M/s (= M · s^-1).</LI>
        <LI>1st order overall: k in s^-1.</LI>
        <LI>2nd order overall: k in M^-1 · s^-1.</LI>
      </ul>
      <P>
        Determining orders from a table of initial-rate data: pick two trials where one concentration
        changes and the other is held constant. If doubling [A] doubles the rate → 1st order in A. If
        doubling [A] quadruples the rate → 2nd order. If doubling [A] leaves the rate unchanged → 0th
        order.
      </P>

      <H3 id="u3-integrated">Integrated rate laws</H3>
      <P>
        Integrated rate laws describe [A] vs t for a single reactant. Each order has a characteristic
        linear plot — recognizing which plot is linear is a common exam pattern:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>0th order:</strong> [A] = [A]_0 − k·t. Plot [A] vs t → linear with slope −k.</LI>
        <LI><strong>1st order:</strong> ln[A] = ln[A]_0 − k·t. Plot ln[A] vs t → linear with slope −k.</LI>
        <LI><strong>2nd order:</strong> 1/[A] = 1/[A]_0 + k·t. Plot 1/[A] vs t → linear with slope +k.</LI>
      </ul>

      <H3 id="u3-halflife">Half-lives</H3>
      <P>The half-life t_½ is the time for [A] to drop to half its initial value. The form depends
        sharply on order:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>0th order:</strong> t_½ = [A]_0 / (2k). Depends on initial concentration.</LI>
        <LI><strong>1st order:</strong> t_½ = 0.693 / k. <em>Independent</em> of [A]_0. This is the signature of first-order kinetics.</LI>
        <LI><strong>2nd order:</strong> t_½ = 1 / (k · [A]_0). Each successive half-life is twice as long as the previous.</LI>
      </ul>

      <H3 id="u3-coord">Reaction coordinate diagrams</H3>
      <P>
        A reaction coordinate diagram plots potential energy vs reaction progress. Key features:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Transition state (TS):</strong> the highest energy point along a single elementary step. Cannot be isolated.</LI>
        <LI><strong>Intermediate:</strong> a local minimum (valley) between two transition states. Real, isolable species — but consumed in a later step.</LI>
        <LI><strong>Activation energy forward, E_{'{a,fwd}'}:</strong> energy of TS minus energy of reactants.</LI>
        <LI><strong>Activation energy reverse, E_{'{a,rev}'}:</strong> energy of TS minus energy of products.</LI>
        <LI><strong>ΔH:</strong> energy of products minus energy of reactants. Negative ΔH means exothermic (products lower than reactants).</LI>
      </ul>
      <P>
        A catalyst lowers BOTH E_{'{a,fwd}'} and E_{'{a,rev}'} (it provides a new path with a lower TS),
        but does not change ΔH. So the equilibrium constant K is unaffected; only the rate to reach
        equilibrium is faster.
      </P>
      <Ex title="Worked example">
        <P>A reaction has E_{'{a,fwd}'} = 80 kJ/mol and ΔH = −30 kJ/mol. What is E_{'{a,rev}'}?</P>
        <P>
          From geometry: E_{'{a,rev}'} = E_{'{a,fwd}'} − ΔH = 80 − (−30) = 110 kJ/mol. The exothermic
          forward reaction has a larger reverse barrier.
        </P>
      </Ex>

      <H3 id="u3-mechanism">Mechanisms and the rate-determining step</H3>
      <P>
        Most reactions occur in multiple elementary steps. The sum of elementary steps (after canceling
        intermediates) must equal the overall balanced equation. The slowest step is the
        rate-determining step (RDS), and its rate law dictates the overall observed rate law.
      </P>
      <P>
        A subtlety: if the RDS contains an intermediate, you must substitute it out using a
        fast-equilibrium step that comes earlier. Example mechanism with a fast pre-equilibrium:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>{`Step 1 (fast, equilibrium): A + B ⇌ C. So [C] = (k_1/k_{−1}) · [A][B].`}</LI>
        <LI>Step 2 (slow): C + D → P. Rate of slow step = k_2 · [C] · [D].</LI>
        <LI>{`Substitute: observed rate = k_2 · (k_1/k_{−1}) · [A][B][D] = k_obs · [A][B][D].`}</LI>
      </ul>
      <P>How to tell an intermediate from a catalyst by inspection:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Intermediate:</strong> produced first, then consumed later. Doesn't appear in the overall equation.</LI>
        <LI><strong>Catalyst:</strong> consumed first, then regenerated later. Also doesn't appear in the overall equation.</LI>
      </ul>

      <H3 id="u3-arrhenius">The Arrhenius equation</H3>
      <P>
        Rate constants increase with temperature because more collisions have enough energy to surmount
        the activation barrier:
      </P>
      <EqBlock>k = A · exp(− E_a / (R · T))</EqBlock>
      <P>Linearized:</P>
      <EqBlock>ln k = ln A − E_a / (R · T)</EqBlock>
      <P>
        A plot of ln k versus 1/T is linear with slope −E_a/R. A is the pre-exponential factor (related
        to collision frequency and orientation). For comparing two temperatures at fixed E_a, use the
        two-point form:
      </P>
      <EqBlock>ln(k_2 / k_1) = − (E_a / R) · (1/T₂ − 1/T₁)</EqBlock>
      <P>
        Rule of thumb: for typical organic activation energies (~50 kJ/mol), rate roughly doubles for
        every 10 K increase near room temperature. Use R = 8.314 J/(mol·K) and convert E_a to J/mol
        before plugging in.
      </P>

      <H3 id="u3-K-expr">Equilibrium expressions Kc and Kp</H3>
      <P>
        At equilibrium for a A + b B ⇌ c C + d D, the equilibrium constant Kc is:
      </P>
      <EqBlock>K_c = [C]^c · [D]^d / ([A]^a · [B]^b)</EqBlock>
      <P>
        Pure solids and pure liquids are excluded — their "activity" is 1, so they never appear in K.
        For gas-phase reactions you can use partial pressures instead:
      </P>
      <EqBlock>K_p = K_c · (R · T)^Δn</EqBlock>
      <P>
        with Δn = (mol gas products) − (mol gas reactants) and R = 0.0821 L·atm/(mol·K). K depends
        only on temperature, not on initial concentrations.
      </P>
      <P>Useful manipulations:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Reversed reaction: K_reverse = 1/K.</LI>
        <LI>Reaction multiplied by n: K_new = K^n.</LI>
        <LI>Reactions added: K_total = K₁ · K₂ · …</LI>
      </ul>

      <H3 id="u3-Q-K">Q vs K and ICE tables</H3>
      <P>
        The reaction quotient Q uses the same expression as K but with current (non-equilibrium)
        concentrations. Comparing Q to K tells you which direction the reaction must shift to reach
        equilibrium:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Q &lt; K: too few products → net forward shift.</LI>
        <LI>Q &gt; K: too many products → net reverse shift.</LI>
        <LI>Q = K: at equilibrium; no net shift.</LI>
      </ul>
      <P>
        When given initial concentrations and asked for the equilibrium composition, build an ICE
        table (Initial / Change / Equilibrium). Define x as the extent of reaction in the direction
        Q-vs-K indicates, write each species' equilibrium concentration in terms of x, plug into the K
        expression, and solve for x. This is the same skeleton you'll use in Unit 4 for weak-acid pH.
      </P>

      {/* =========================================== */}
      {/* UNIT 4                                       */}
      {/* =========================================== */}
      <H2 id="u4">Unit 4 — Acid/Base & Equilibrium II</H2>
      <P>
        Unit 4 is the biggest chunk of the exam (60%). It applies the equilibrium tools from Unit 3 to
        acid-base systems, and adds two large new topics: Le Chatelier in detail, and buffers.
      </P>

      <H3 id="u4-lechat">Le Chatelier's principle</H3>
      <P>
        A system at equilibrium responds to a stress by shifting in the direction that partially
        relieves the stress. The kinds of stresses you should handle:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Add a reactant:</strong> shifts forward (consume the added reactant).</LI>
        <LI><strong>Remove a product:</strong> shifts forward (replace it).</LI>
        <LI><strong>Add a product / remove a reactant:</strong> shifts reverse.</LI>
        <LI><strong>Decrease volume (increase pressure):</strong> shifts toward the side with FEWER moles of gas. Compare Δn_gas of products vs reactants. Liquids/solids don't count.</LI>
        <LI><strong>Increase volume (decrease pressure):</strong> shifts toward MORE moles of gas.</LI>
        <LI><strong>Add inert gas at constant volume:</strong> no shift. Partial pressures of reactants and products don't change, so Q is unchanged.</LI>
        <LI><strong>Add inert gas at constant pressure:</strong> total volume must rise; this acts like a dilution. Shift toward more moles of gas.</LI>
        <LI><strong>Increase temperature, exothermic forward (ΔH &lt; 0):</strong> heat is a "product"; adding heat shifts REVERSE. K decreases.</LI>
        <LI><strong>Increase temperature, endothermic forward (ΔH &gt; 0):</strong> heat is a "reactant"; adding heat shifts FORWARD. K increases.</LI>
        <LI><strong>Catalyst:</strong> no shift, no change in K. Reaches equilibrium faster.</LI>
      </ul>

      <H3 id="u4-G-K">Linking ΔG° and K, with current Q</H3>
      <P>
        From Unit 1 we have ΔG° = −R · T · ln K for standard conditions. At any current state with Q
        ≠ K:
      </P>
      <EqBlock>ΔG = ΔG° + R · T · ln Q</EqBlock>
      <P>
        At equilibrium, ΔG = 0 and Q = K, recovering ΔG° = −RT ln K. The temperature dependence of K
        comes through ΔG° = ΔH° − T·ΔS°: an endothermic reaction has ΔH° &gt; 0, so as T increases,
        T·ΔS° dominates (if ΔS° &gt; 0) and ΔG° becomes more negative, so K grows. This is just Le
        Chatelier's temperature rule with units attached.
      </P>

      <H3 id="u4-bronsted">Brønsted-Lowry acids and bases</H3>
      <P>
        A Brønsted-Lowry acid is a proton (H⁺) donor; a Brønsted-Lowry base is a proton acceptor. A
        conjugate acid-base pair differs by exactly one H⁺. For each acid HA, the conjugate base is
        A⁻ (one less H⁺). For each base B, the conjugate acid is BH⁺ (one more H⁺).
      </P>
      <P>
        Examples: NH₃ / NH₄⁺ is a conjugate pair; H₂PO₄⁻ / HPO₄²⁻ is a conjugate pair;
        H₂PO₄⁻ is amphoteric — it can act as either an acid (giving up H⁺ to form HPO₄²⁻) or a
        base (accepting H⁺ to form H₃PO₄).
      </P>

      <H3 id="u4-conjugate-strength">Conjugate strength relationship</H3>
      <P>
        The stronger an acid, the weaker its conjugate base. Quantitatively, for a conjugate pair at
        25 °C:
      </P>
      <EqBlock>K_a · K_b = K_w = 1.0 × 10^-14</EqBlock>
      <P>So pK_a + pK_b = 14 (at 25 °C). Use this to convert between an acid's K_a and the K_b of its
        conjugate base.</P>

      <H3 id="u4-pH">pH, pOH, and K_w</H3>
      <P>Definitions:</P>
      <EqBlock>pH = − log_10 [H₃O⁺]</EqBlock>
      <EqBlock>pOH = − log_10 [OH⁻]</EqBlock>
      <P>And the water self-ionization equilibrium at 25 °C:</P>
      <EqBlock>K_w = [H₃O⁺] · [OH⁻] = 1.0 × 10^-14</EqBlock>
      <P>Taking −log on both sides gives:</P>
      <EqBlock>pH + pOH = 14 (at 25 °C)</EqBlock>
      <P>
        To go from pH to [H₃O⁺], use [H₃O⁺] = 10^−pH. From [OH⁻] to pH: first find pOH = −log[OH⁻],
        then pH = 14 − pOH. Neutral water has [H₃O⁺] = [OH⁻] = 10^-7 → pH = 7.
      </P>

      <H3 id="u4-rank">Ranking acid and base strength</H3>
      <P>The simplest rule: larger K_a = stronger acid; equivalently smaller pK_a = stronger acid.
        Same for bases with K_b and pK_b. Beyond a numeric table you should know the trends:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Binary acids down a group (HF, HCl, HBr, HI):</strong> strength INCREASES down. The H–X bond gets longer and weaker, so the proton dissociates more readily. HI is the strongest of these; HF is the weakest (and a weak acid).</LI>
        <LI><strong>Binary acids across a period (CH₄, NH₃, H₂O, HF):</strong> strength INCREASES with electronegativity of the atom attached to H. HF is far stronger than CH₄ because the H–F bond is more polar.</LI>
        <LI><strong>Oxoacids with the same central atom (HClO &lt; HClO₂ &lt; HClO₃ &lt; HClO₄):</strong> more oxygens make the acid stronger. The extra oxygens delocalize the negative charge on the conjugate base, stabilizing it.</LI>
      </ul>

      <H3 id="u4-strong-pH">pH of strong acids and bases</H3>
      <P>
        Strong acids you must memorize: HCl, HBr, HI, HNO₃, H₂SO₄ (first H), HClO₄. Strong bases:
        the Group 1 hydroxides (LiOH, NaOH, KOH, RbOH, CsOH) and the heavy Group 2 hydroxides
        (Ca(OH)_2, Sr(OH)_2, Ba(OH)_2).
      </P>
      <P>
        For a strong monoprotic acid of concentration C: [H₃O⁺] = C, so pH = −log(C). For a strong
        base providing n hydroxides per formula unit (e.g., Ba(OH)_2 gives n = 2): [OH⁻] = n · C, so
        pOH = −log(n · C) and pH = 14 − pOH.
      </P>
      <Note>
        For very dilute strong-acid solutions (concentration ≤ 10^-6 M), water's own H₃O⁺ matters
        and you can't ignore it. In practice this only matters near pH 6-8 limits; in regular textbook
        problems you take [H₃O⁺] = C_acid directly.
      </Note>
      <Ex title="Worked examples">
        <P>0.0050 M HBr: [H₃O⁺] = 0.0050, pH = −log(0.0050) = 2.30.</P>
        <P>0.0010 M Ca(OH)_2: [OH⁻] = 2 · 0.0010 = 0.0020, pOH = 2.70, pH = 11.30.</P>
      </Ex>

      <H3 id="u4-weak-pH">pH of weak acids and bases (ICE method)</H3>
      <P>For a weak acid HA dissolving in water:</P>
      <EqBlock>HA + H₂O ⇌ A⁻ + H₃O⁺</EqBlock>
      <P>Build the ICE table with x = [H₃O⁺] formed at equilibrium:</P>
      <div className="my-3 mx-auto max-w-md text-sm font-mono text-zinc-200 border border-zinc-800 rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-900 text-xs uppercase tracking-wider text-zinc-500">
            <tr>
              <th className="px-3 py-1 text-left"></th>
              <th className="px-3 py-1 text-right">[HA]</th>
              <th className="px-3 py-1 text-right">[A⁻]</th>
              <th className="px-3 py-1 text-right">[H₃O⁺]</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-zinc-800"><td className="px-3 py-1">I</td><td className="px-3 py-1 text-right">C</td><td className="px-3 py-1 text-right">0</td><td className="px-3 py-1 text-right">0</td></tr>
            <tr className="border-t border-zinc-800"><td className="px-3 py-1">C</td><td className="px-3 py-1 text-right">−x</td><td className="px-3 py-1 text-right">+x</td><td className="px-3 py-1 text-right">+x</td></tr>
            <tr className="border-t border-zinc-800"><td className="px-3 py-1">E</td><td className="px-3 py-1 text-right">C−x</td><td className="px-3 py-1 text-right">x</td><td className="px-3 py-1 text-right">x</td></tr>
          </tbody>
        </table>
      </div>
      <P>Plug into K_a:</P>
      <EqBlock>K_a = x² / (C − x)</EqBlock>
      <P>
        If x is small compared to C (often true when K_a · C is small), approximate C − x ≈ C and
        solve x = √(K_a · C). Then check the "5% rule": if x &lt; 0.05·C, the approximation was
        justified; otherwise solve the quadratic without approximating. % ionization = (x / C) · 100%.
      </P>
      <P>For a weak base B with K_b, the parallel calculation gives x = [OH⁻]:</P>
      <EqBlock>K_b = x² / (C − x), then pOH = − log x, then pH = 14 − pOH.</EqBlock>
      <Ex title="Worked example">
        <P>pH of 0.10 M acetic acid (K_a = 1.8 × 10^-5)?</P>
        <P>
          Assume x ≪ C: x² ≈ K_a · C = (1.8×10^-5)(0.10) = 1.8×10^-6, so x ≈ 1.34×10^-3 M. Check 5%:
          x/C = 1.34×10^-2 = 1.34% &lt; 5% ✓. pH = −log(1.34×10^-3) ≈ 2.87.
        </P>
      </Ex>

      <H3 id="u4-Ka-from-pH">Calculating K_a or K_b from data</H3>
      <P>
        Given the initial concentration C of a weak acid and the equilibrium pH (or % ionization),
        work backward through the ICE table:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>If given pH: x = 10^-pH (this is [H₃O⁺]).</LI>
        <LI>If given % ionization α: x = α · C.</LI>
        <LI>Then K_a = x² / (C − x).</LI>
      </ul>

      <H3 id="u4-salts">Salt solutions: acidic, basic, or neutral?</H3>
      <P>
        When a salt dissolves, ask separately whether each ion is "active" (i.e., a non-spectator). Use
        these rules:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Cations:</strong> from Group 1 (Na⁺, K⁺, Li⁺) or heavy Group 2 (Ca²⁺, Sr²⁺, Ba²⁺) are SPECTATORS (neutral). Conjugate acids of weak bases (NH₄⁺) are ACIDIC. Small, highly charged metal cations (Al³⁺, Fe³⁺) are ACIDIC — they polarize bound water enough to release H⁺.</LI>
        <LI><strong>Anions:</strong> from strong acids (Cl⁻, NO₃⁻, Br⁻, I⁻, ClO₄⁻) are SPECTATORS (neutral). Conjugate bases of weak acids (F⁻, CH₃COO⁻, CN⁻) are BASIC.</LI>
      </ul>
      <P>If both ions are "active" (e.g., NH₄F), compare K_a of the cation with K_b of the anion; whichever is larger determines whether the solution is net acidic or basic.</P>
      <P>For salts of conjugate bases of weak acids, you can compute pH using K_b of that anion:</P>
      <EqBlock>K_b(A⁻) = K_w / K_a(HA)</EqBlock>
      <P>Then run an ICE on A⁻ + H₂O ⇌ HA + OH⁻.</P>

      <H3 id="u4-bronsted-K">K for a Brønsted reaction from two K_a values</H3>
      <P>For a generic acid-base reaction:</P>
      <EqBlock>HA + B⁻ ⇌ A⁻ + HB</EqBlock>
      <P>The equilibrium constant is the ratio of K_a values of the two acids involved:</P>
      <EqBlock>K = K_a(HA) / K_a(HB)</EqBlock>
      <P>
        Equilibrium always favors the side with the WEAKER acid (smaller K_a). If you're given a K_b
        for a base, convert to K_a of its conjugate first using K_a · K_b = K_w, then use the formula.
      </P>
      <Ex title="Worked example">
        <P>K for HF + CN⁻ ⇌ F⁻ + HCN, given K_a(HF) = 7.2×10^-4, K_a(HCN) = 4.9×10^-10?</P>
        <P>
          K = K_a(HF)/K_a(HCN) = (7.2×10^-4)/(4.9×10^-10) ≈ 1.5×10^6. Very large; the equilibrium lies
          far to the right (HCN is by far the weaker acid).
        </P>
      </Ex>

      <H3 id="u4-buffer-what">Buffers: what they are</H3>
      <P>
        A buffer is a solution that resists pH change when a small amount of strong acid or base is
        added. It works because it contains both a weak acid and its conjugate base (or a weak base
        and its conjugate acid) in comparable amounts. Strong acid added gets consumed by the base
        component; strong base added gets consumed by the acid component.
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>Acetic acid + sodium acetate (CH₃COOH / CH₃COO⁻): buffer near pH 4.74.</LI>
        <LI>NH₃ + NH₄Cl (NH₃ / NH₄⁺): buffer near pH 9.25.</LI>
        <LI>Phosphate (H₂PO₄⁻ / HPO₄²⁻): buffer near pH 7.20 — the system blood uses.</LI>
        <LI>HCl + NaCl is NOT a buffer (HCl is strong, no equilibrium to push around).</LI>
      </ul>

      <H3 id="u4-HH">Henderson-Hasselbalch</H3>
      <P>The pH of a buffer is given by:</P>
      <EqBlock>pH = pK_a + log_10 ([A⁻] / [HA])</EqBlock>
      <P>
        Because both [A⁻] and [HA] are in the same total volume, the volumes cancel — you can use
        moles instead of concentrations. When the two components are in equal amounts (the
        half-neutralization point of a weak-acid / strong-base titration), the log term is 0 and pH =
        pK_a.
      </P>
      <P>Sister form for a weak-base buffer:</P>
      <EqBlock>pOH = pK_b + log_10 ([BH⁺] / [B])</EqBlock>
      <Ex title="Worked example">
        <P>pH of a buffer containing 0.20 M acetic acid and 0.50 M acetate, pK_a = 4.74?</P>
        <P>pH = 4.74 + log(0.50 / 0.20) = 4.74 + 0.40 = 5.14.</P>
      </Ex>

      <H3 id="u4-buffer-add">Buffer pH after adding strong acid or strong base</H3>
      <P>Two-step procedure — never plug the strong acid/base directly into Henderson-Hasselbalch:</P>
      <ol className="list-decimal list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Stoichiometric step.</strong> Strong acid (H⁺) consumes A⁻ to form HA: A⁻ + H⁺ → HA. Strong base (OH⁻) consumes HA to form A⁻: HA + OH⁻ → A⁻ + H₂O. Update the moles of HA and A⁻ by the moles of strong acid/base added (the strong species is the limiting reagent as long as it doesn't exceed the buffer component it's reacting with).</LI>
        <LI><strong>Henderson-Hasselbalch step.</strong> Use the new moles in pH = pK_a + log([A⁻]_new / [HA]_new).</LI>
      </ol>
      <Ex title="Worked example">
        <P>
          A 1.00 L buffer has 0.10 mol HA and 0.10 mol A⁻ with pK_a = 5.00. Add 0.020 mol NaOH. New pH?
        </P>
        <P>
          NaOH consumes HA: HA → 0.10 − 0.02 = 0.080 mol; A⁻ → 0.10 + 0.02 = 0.120 mol. pH = 5.00 +
          log(0.120 / 0.080) = 5.00 + log(1.5) = 5.00 + 0.18 = 5.18.
        </P>
        <P>If instead you'd added 0.020 mol HCl: A⁻ → 0.080, HA → 0.120, pH = 5.00 + log(0.080/0.120)
          = 5.00 − 0.18 = 4.82. Same magnitude, opposite direction.</P>
      </Ex>

      <H3 id="u4-buffer-cap">Buffer capacity and choosing a pair</H3>
      <P>
        Two rules govern how good a buffer is at resisting pH change:
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>More moles = more capacity.</strong> A 1.0 M HA / 1.0 M A⁻ buffer resists pH change much better than a 0.01 M / 0.01 M version, even at the same pH.</LI>
        <LI><strong>Ratio near 1 = best.</strong> When [A⁻]/[HA] is close to 1, the buffer can absorb both acid and base equally well. Buffers are considered "usable" within pK_a ± 1; outside that, one component is below 10% and the buffer is too lopsided.</LI>
      </ul>
      <P>To pick a buffer for a target pH, choose a conjugate pair whose pK_a is within 1 of the target. Example targets:</P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI>pH 5.0 → acetic acid / acetate (pK_a = 4.74).</LI>
        <LI>pH 7.4 (blood) → H₂PO₄⁻ / HPO₄²⁻ (pK_a = 7.20).</LI>
        <LI>pH 9.0 → NH₃ / NH₄⁺ (pK_a = 9.25).</LI>
      </ul>

      {/* =========================================== */}
      {/* STRATEGY                                     */}
      {/* =========================================== */}
      <H2 id="strategy">Exam-day strategy</H2>
      <P>
        With 60% of the exam on Unit 4, plan time accordingly. A reasonable allocation for a 2.5-hour
        exam: 90 minutes for Unit-4-style problems, 60 minutes for everything else.
      </P>
      <ul className="list-disc list-inside space-y-1 my-3 text-zinc-300 marker:text-zinc-500">
        <LI><strong>Read carefully for "strong" vs "weak."</strong> Strong acid pH is direct (no ICE). Weak acid pH always uses ICE. Mixing them up is the most common mistake on these problems.</LI>
        <LI><strong>Buffer problems: stoichiometry first, then H-H.</strong> Don't plug raw strong-acid moles into pH = pK_a + log(...) — first react them out.</LI>
        <LI><strong>Le Chatelier with inert gas.</strong> Constant volume → no shift. Constant pressure → behaves like dilution.</LI>
        <LI><strong>Half-life independence is the 1st-order signature.</strong> If a problem gives you successive half-lives equal in length, the reaction is 1st order.</LI>
        <LI><strong>Salt pH:</strong> identify each ion's parent. If both parents are weak, compare K_a and K_b to decide direction. Memorize that group 1 + strong-acid anion = neutral.</LI>
        <LI><strong>Sign of ΔG° tells the K direction.</strong> Negative ΔG° → K &gt; 1. Don't bother with the full exponential if you only need the side.</LI>
        <LI><strong>Use Kelvin everywhere temperature appears in a formula.</strong> Especially in ΔG = ΔH − TΔS, Arrhenius, ΔG° = −RT ln K, and Π = iMRT.</LI>
      </ul>
      <P>
        Once you've read through this, go to the flashcards (60/40 weighted toward Unit 4 by default)
        and the practice questions to drill the patterns. The hardest cards, by experience, are weak
        acid/base ICE problems and buffer-after-addition. Don't stop on those until you can do one
        without looking at this guide.
      </P>

      <div className="mt-12 mb-6 text-center">
        <Link
          href="/cards/"
          className="inline-block px-6 py-3 rounded border border-zinc-400 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium"
        >
          Start studying — flashcards (60/40 weighted)
        </Link>
        <div className="mt-2 text-xs text-zinc-500">
          Or jump to <Link href="/cards/?unit=4" className="underline hover:text-zinc-300">Unit 4 cards only</Link>,
          {' '}<Link href="/practice/" className="underline hover:text-zinc-300">practice questions</Link>, or
          {' '}<Link href="/" className="underline hover:text-zinc-300">the dashboard</Link>.
        </div>
      </div>
    </article>
  );
}
