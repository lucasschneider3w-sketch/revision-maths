// Contenu des révisions.
// Format : texte avec formules LaTeX entre $...$ (en ligne) ou $$...$$ (centrées).
// Mise en forme : une ligne = un paragraphe, "## " = titre, "- " = puce,
// "> " = encadré, **gras**. Les id doivent rester stables (la progression y est liée).
const r = String.raw;

window.COURSES = [
  {
    id: 'analyse',
    titre: 'Analyse',
    chapitres: [
      {
        id: 'an-suites',
        titre: 'Suites réelles',
        resume: r`
## Convergence
$(u_n)$ converge vers $\ell$ si $\forall \varepsilon>0,\ \exists N,\ \forall n\ge N,\ |u_n-\ell|<\varepsilon$.
- La limite est unique.
- Toute suite convergente est bornée (réciproque fausse : $(-1)^n$).
- Si $u_n\to\ell$, toute sous-suite tend vers $\ell$.
- Si $u_{2n}\to\ell$ et $u_{2n+1}\to\ell$, alors $u_n\to\ell$.

## Théorèmes d'existence de limite
- **Gendarmes** : $v_n\le u_n\le w_n$ et $v_n,w_n\to\ell$ donnent $u_n\to\ell$.
- **Limite monotone** : croissante et majorée ⇒ converge vers $\sup u_n$ ; croissante non majorée ⇒ $+\infty$.
- **Suites adjacentes** : $(u_n)$ croissante, $(v_n)$ décroissante, $v_n-u_n\to0$ ⇒ même limite $\ell$, avec $u_n\le\ell\le v_n$.
- **Bolzano–Weierstrass** : toute suite bornée admet une sous-suite convergente.
- **Cauchy** : dans $\mathbb R$, suite de Cauchy ⇔ suite convergente (faux dans $\mathbb Q$).

## Limites de référence
- $q^n\to0$ si $|q|<1$, $\to+\infty$ si $q>1$, pas de limite si $q\le-1$.
- Croissances comparées ($\alpha,\beta>0$, $a>1$) : $(\ln n)^\beta \ll n^\alpha \ll a^n \ll n! \ll n^n$.
- $\left(1+\frac xn\right)^n\to e^x$.

## Suites récurrentes $u_{n+1}=f(u_n)$
- Si $f$ est continue et $u_n\to\ell$, alors $f(\ell)=\ell$.
- $f$ croissante sur un intervalle stable : $(u_n)$ est monotone, dans le sens de $u_1-u_0$.
- $f$ décroissante : $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires.
> Méthode : intervalle stable → monotonie → borne → point fixe.

## Équivalents
$u_n\sim v_n$ si $u_n=v_n(1+\varepsilon_n)$ avec $\varepsilon_n\to0$.
- On peut multiplier, diviser, élever à une puissance fixe.
- On ne peut **pas** additionner, ni composer par $\exp$ ou $\ln$ en général.
`,
        fiches: [
          { id: 'an-suites-f01', recto: r`Définition : $(u_n)$ converge vers $\ell\in\mathbb R$.`,
            verso: r`$$\forall \varepsilon>0,\ \exists N\in\mathbb N,\ \forall n\ge N,\ |u_n-\ell|<\varepsilon$$` },
          { id: 'an-suites-f02', recto: r`Définition : $(u_n)$ tend vers $+\infty$.`,
            verso: r`$$\forall A\in\mathbb R,\ \exists N\in\mathbb N,\ \forall n\ge N,\ u_n>A$$` },
          { id: 'an-suites-f03', recto: r`Une suite convergente est-elle bornée ? Et la réciproque ?`,
            verso: r`Oui, toute suite convergente est bornée.
La réciproque est fausse : $u_n=(-1)^n$ est bornée mais diverge.` },
          { id: 'an-suites-f04', recto: r`Énoncer le théorème des gendarmes.`,
            verso: r`Si à partir d'un certain rang $v_n\le u_n\le w_n$, et si $v_n\to\ell$ et $w_n\to\ell$, alors $(u_n)$ converge et $u_n\to\ell$.` },
          { id: 'an-suites-f05', recto: r`Énoncer le théorème de la limite monotone.`,
            verso: r`- $(u_n)$ croissante et majorée ⇒ converge vers $\sup_n u_n$.
- $(u_n)$ croissante non majorée ⇒ $u_n\to+\infty$.
- De même : décroissante minorée ⇒ converge vers $\inf_n u_n$.` },
          { id: 'an-suites-f06', recto: r`Suites adjacentes : définition et théorème.`,
            verso: r`$(u_n)$ croissante, $(v_n)$ décroissante et $v_n-u_n\to0$.
Alors elles convergent vers la même limite $\ell$, et $\forall n,\ u_n\le\ell\le v_n$.` },
          { id: 'an-suites-f07', recto: r`Énoncer le théorème de Bolzano–Weierstrass.`,
            verso: r`Toute suite réelle **bornée** admet une sous-suite convergente.` },
          { id: 'an-suites-f08', recto: r`Définition : $(u_n)$ est une suite de Cauchy.`,
            verso: r`$$\forall \varepsilon>0,\ \exists N,\ \forall p,q\ge N,\ |u_p-u_q|<\varepsilon$$` },
          { id: 'an-suites-f09', recto: r`Lien entre suite de Cauchy et suite convergente ?`,
            verso: r`Dans $\mathbb R$ : Cauchy ⇔ convergente ($\mathbb R$ est complet).
Faux dans $\mathbb Q$ : les approximations décimales de $\sqrt2$ forment une suite de Cauchy de rationnels sans limite dans $\mathbb Q$.` },
          { id: 'an-suites-f10', recto: r`Que dire de $(u_n)$ si $u_{2n}\to\ell$ et $u_{2n+1}\to\ell$ ?`,
            verso: r`Alors $u_n\to\ell$.
À l'inverse, si deux sous-suites ont des limites différentes, $(u_n)$ diverge.` },
          { id: 'an-suites-f11', recto: r`Comportement de $(q^n)$ selon $q\in\mathbb R$ ?`,
            verso: r`- $|q|<1$ : $q^n\to0$
- $q=1$ : constante égale à $1$
- $q>1$ : $q^n\to+\infty$
- $q\le-1$ : pas de limite` },
          { id: 'an-suites-f12', recto: r`Croissances comparées : classer $n!$, $n^\alpha$, $a^n$, $(\ln n)^\beta$, $n^n$ (avec $\alpha,\beta>0$, $a>1$).`,
            verso: r`$$(\ln n)^\beta \ll n^\alpha \ll a^n \ll n! \ll n^n$$
Par exemple $\dfrac{n^\alpha}{a^n}\to0$ et $\dfrac{a^n}{n!}\to0$.` },
          { id: 'an-suites-f13', recto: r`$u_{n+1}=f(u_n)$ avec $f$ continue et $u_n\to\ell$. Que vaut $f(\ell)$ ?`,
            verso: r`$f(\ell)=\ell$ : la limite est un **point fixe** de $f$.
On passe à la limite dans $u_{n+1}=f(u_n)$ grâce à la continuité de $f$ en $\ell$.` },
          { id: 'an-suites-f14', recto: r`$u_{n+1}=f(u_n)$, $I$ stable par $f$. Monotonie de $(u_n)$ selon $f$ ?`,
            verso: r`- $f$ croissante sur $I$ : $(u_n)$ est monotone, croissante si $u_1\ge u_0$, décroissante sinon.
- $f$ décroissante sur $I$ : $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires.` },
          { id: 'an-suites-f15', recto: r`Définition de $u_n\sim v_n$, et deux pièges classiques.`,
            verso: r`$u_n=v_n(1+\varepsilon_n)$ avec $\varepsilon_n\to0$ (si $v_n\ne0$ : $u_n/v_n\to1$).
- On ne somme pas les équivalents.
- On ne compose pas : $n+1\sim n$ mais $e^{n+1}\not\sim e^n$.` },
          { id: 'an-suites-f16', recto: r`Énoncer le théorème de Cesàro.`,
            verso: r`Si $u_n\to\ell$, alors $\dfrac{u_1+\dots+u_n}{n}\to\ell$.
Réciproque fausse : pour $u_n=(-1)^n$, la moyenne tend vers $0$.` },
          { id: 'an-suites-f17', recto: r`Définition de $\limsup u_n$ et critère de convergence associé.`,
            verso: r`$\limsup u_n=\lim_{n\to\infty}\ \sup_{k\ge n}u_k$ (limite d'une suite décroissante).
$(u_n)$ converge ⇔ $\limsup u_n=\liminf u_n\in\mathbb R$.` },
        ],
        qcm: [
          { id: 'an-suites-q01', question: r`Limite de $u_n=\dfrac{\sin n}{n}$ ?`,
            choix: [r`$0$`, r`$1$`, r`Pas de limite`, r`$+\infty$`], bonne: 0,
            explication: r`$|u_n|\le\frac1n\to0$, donc $u_n\to0$ par les gendarmes.` },
          { id: 'an-suites-q02', question: r`Quelle affirmation est vraie ?`,
            choix: [r`Toute suite croissante et majorée converge`, r`Toute suite bornée converge`, r`Toute suite monotone converge`, r`Toute suite convergente est monotone`], bonne: 0,
            explication: r`C'est le théorème de la limite monotone. Contre-exemples pour les autres : $(-1)^n$ (bornée), $u_n=n$ (monotone), $\frac{(-1)^n}{n}$ (convergente non monotone).` },
          { id: 'an-suites-q03', question: r`Limite de $\left(1+\dfrac1n\right)^n$ ?`,
            choix: [r`$e$`, r`$1$`, r`$+\infty$`, r`$0$`], bonne: 0,
            explication: r`$\left(1+\frac1n\right)^n=\exp\!\big(n\ln(1+\tfrac1n)\big)$ et $n\ln(1+\frac1n)=1+o(1)$. Piège : forme indéterminée $1^\infty$, ce n'est pas $1$.` },
          { id: 'an-suites-q04', question: r`Limite de $\sqrt{n+1}-\sqrt n$ ?`,
            choix: [r`$0$`, r`$1$`, r`$\frac12$`, r`$+\infty$`], bonne: 0,
            explication: r`Quantité conjuguée : $\sqrt{n+1}-\sqrt n=\dfrac{1}{\sqrt{n+1}+\sqrt n}\to0$.` },
          { id: 'an-suites-q05', question: r`$u_0=1$ et $u_{n+1}=\sqrt{2+u_n}$. Limite de $(u_n)$ ?`,
            choix: [r`$2$`, r`$-1$`, r`$\sqrt2$`, r`La suite diverge`], bonne: 0,
            explication: r`$f(x)=\sqrt{2+x}$ est croissante, $u_1=\sqrt3>u_0$ donc $(u_n)$ croît ; elle est majorée par $2$ (récurrence). Limite $\ell\ge0$ avec $\ell=\sqrt{2+\ell}$, soit $\ell^2-\ell-2=0$, donc $\ell=2$.` },
          { id: 'an-suites-q06', question: r`Si $(u_{2n})$ et $(u_{3n})$ convergent, $(u_n)$ converge-t-elle ?`,
            choix: [r`Non, pas nécessairement`, r`Oui, toujours`, r`Oui, dès que les deux limites sont égales`, r`Oui, si $(u_n)$ est bornée`], bonne: 0,
            explication: r`Contre-exemple : $u_n=0$ si $2\mid n$ ou $3\mid n$, et $u_n=1$ sinon. Alors $u_{2n}=u_{3n}=0$, mais $u_p=1$ pour tout nombre premier $p>3$. Il faut contrôler $(u_{2n+1})$.` },
          { id: 'an-suites-q07', question: r`Pour $u_n=(-1)^n+\dfrac1n$, que vaut $\limsup u_n$ ?`,
            choix: [r`$1$`, r`$2$`, r`$0$`, r`$-1$`], bonne: 0,
            explication: r`Les valeurs d'adhérence sont $-1$ et $1$ (termes pairs et impairs). La plus grande est $\limsup u_n=1$.` },
          { id: 'an-suites-q08', question: r`Limite de $\dfrac{n^{10}}{1{,}01^n}$ ?`,
            choix: [r`$0$`, r`$+\infty$`, r`$1$`, r`Pas de limite`], bonne: 0,
            explication: r`Croissances comparées : toute exponentielle $a^n$ avec $a>1$ l'emporte sur toute puissance de $n$.` },
          { id: 'an-suites-q09', question: r`Si $u_n\sim v_n$, que peut-on affirmer ?`,
            choix: [r`$u_n$ et $v_n$ sont de même signe à partir d'un certain rang`, r`$u_n-v_n\to0$`, r`$e^{u_n}\sim e^{v_n}$`, r`$\ln u_n\sim\ln v_n$`], bonne: 0,
            explication: r`$u_n/v_n\to1>0$ donne le même signe à partir d'un certain rang. Contre-exemples : $n^2+n\sim n^2$ mais la différence tend vers $+\infty$ ; $n+1\sim n$ mais $e^{n+1}\not\sim e^n$ ; $1+\frac1n\sim1+\frac2n$ mais les $\ln$ sont équivalents à $\frac1n$ et $\frac2n$.` },
          { id: 'an-suites-q10', question: r`Dans quel ensemble toute suite de Cauchy converge-t-elle (vers un élément de l'ensemble) ?`,
            choix: [r`$\mathbb R$ seulement`, r`$\mathbb Q$ seulement`, r`$\mathbb Q$ et $\mathbb R$`, r`Aucun des deux`], bonne: 0,
            explication: r`$\mathbb R$ est complet, $\mathbb Q$ ne l'est pas : les décimales de $\sqrt2$ forment une suite de Cauchy dans $\mathbb Q$ sans limite rationnelle.` },
        ],
      },
      {
        id: 'an-series',
        titre: 'Séries numériques',
        resume: r`
## Définitions
$\sum u_n$ converge si les sommes partielles $S_N=\sum_{n=0}^{N}u_n$ convergent. On note $S=\sum_{n=0}^{\infty}u_n$ et le reste $R_N=S-S_N\to0$.
- **Condition nécessaire** : $\sum u_n$ converge ⇒ $u_n\to0$. Sinon : divergence grossière.
- Réciproque fausse : la série harmonique $\sum\frac1n$ diverge.

## Séries de référence
- **Géométrique** : $\sum q^n$ converge ⇔ $|q|<1$, et $\sum_{n\ge0}q^n=\frac{1}{1-q}$.
- **Riemann** : $\sum\frac{1}{n^\alpha}$ converge ⇔ $\alpha>1$.
- **Bertrand** : $\sum\frac{1}{n^\alpha(\ln n)^\beta}$ converge ⇔ $\alpha>1$, ou $\alpha=1$ et $\beta>1$.
- **Télescopique** : $\sum(v_{n+1}-v_n)$ converge ⇔ $(v_n)$ converge.

## Séries à termes positifs
- **Comparaison** : $0\le u_n\le v_n$ ; $\sum v_n$ CV ⇒ $\sum u_n$ CV.
- **Équivalents** : $u_n\sim v_n$ avec $v_n\ge0$ ⇒ même nature.
- **d'Alembert** : $\frac{u_{n+1}}{u_n}\to\ell$ ; $\ell<1$ CV, $\ell>1$ DV, $\ell=1$ on ne sait pas.
- **Cauchy (racine)** : $\sqrt[n]{u_n}\to\ell$, mêmes conclusions.
- **Série–intégrale** : $f\ge0$ décroissante ⇒ $\sum f(n)$ et $\int_1^{+\infty}f$ de même nature.

## Séries de signe quelconque
- **Convergence absolue** : $\sum|u_n|$ CV ⇒ $\sum u_n$ CV.
- **Séries alternées** : $a_n$ décroissante vers $0$ ⇒ $\sum(-1)^na_n$ CV et $|R_N|\le a_{N+1}$.
- Série semi-convergente : on peut la réordonner pour obtenir n'importe quelle somme (Riemann).

> Méthode : 1) $u_n\to0$ ? 2) signe constant → équivalent / comparaison avec Riemann. 3) sinon convergence absolue, puis série alternée. 4) produits, factorielles → d'Alembert.
`,
        fiches: [
          { id: 'an-series-f01', recto: r`Que signifie « $\sum u_n$ converge » ? Définir la somme et le reste.`,
            verso: r`La suite $S_N=\sum_{n=0}^{N}u_n$ converge.
Somme : $S=\lim S_N=\sum_{n=0}^{\infty}u_n$. Reste : $R_N=S-S_N=\sum_{n>N}u_n\to0$.` },
          { id: 'an-series-f02', recto: r`Condition nécessaire de convergence d'une série ?`,
            verso: r`$\sum u_n$ converge ⇒ $u_n\to0$.
Si $u_n\not\to0$, la série **diverge grossièrement**.
Réciproque fausse : $\frac1n\to0$ mais $\sum\frac1n$ diverge.` },
          { id: 'an-series-f03', recto: r`Série géométrique $\sum q^n$ : nature et somme ?`,
            verso: r`Converge ⇔ $|q|<1$, et alors $$\sum_{n=0}^{\infty}q^n=\frac{1}{1-q}$$` },
          { id: 'an-series-f04', recto: r`Nature des séries de Riemann $\sum\dfrac{1}{n^\alpha}$ ?`,
            verso: r`Convergente ⇔ $\alpha>1$.
Exemple : $\sum\frac1{n^2}$ converge, $\sum\frac1{\sqrt n}$ et $\sum\frac1n$ divergent.` },
          { id: 'an-series-f05', recto: r`Critère de comparaison pour les séries à termes positifs.`,
            verso: r`Si $0\le u_n\le v_n$ à partir d'un certain rang :
- $\sum v_n$ converge ⇒ $\sum u_n$ converge
- $\sum u_n$ diverge ⇒ $\sum v_n$ diverge` },
          { id: 'an-series-f06', recto: r`Critère des équivalents : énoncé et hypothèse à ne pas oublier.`,
            verso: r`Si $u_n\sim v_n$ et $v_n\ge0$ à partir d'un certain rang, alors $\sum u_n$ et $\sum v_n$ ont même nature.
**Signe constant indispensable** : $\frac{(-1)^n}{\sqrt n}\sim\frac{(-1)^n}{\sqrt n}+\frac1n$, la première série converge, la seconde diverge.` },
          { id: 'an-series-f07', recto: r`Énoncer la règle de d'Alembert.`,
            verso: r`$u_n>0$ et $\dfrac{u_{n+1}}{u_n}\to\ell$.
- $\ell<1$ : converge
- $\ell>1$ : diverge (grossièrement)
- $\ell=1$ : on ne peut pas conclure` },
          { id: 'an-series-f08', recto: r`Énoncer la règle de Cauchy (racine $n$-ième).`,
            verso: r`$u_n\ge0$ et $\sqrt[n]{u_n}\to\ell$.
$\ell<1$ : converge ; $\ell>1$ : diverge ; $\ell=1$ : on ne peut pas conclure.` },
          { id: 'an-series-f09', recto: r`Convergence absolue : énoncé et réciproque ?`,
            verso: r`$\sum|u_n|$ converge ⇒ $\sum u_n$ converge, et $\left|\sum u_n\right|\le\sum|u_n|$.
Réciproque fausse : $\sum\frac{(-1)^n}{n}$ converge mais pas absolument.` },
          { id: 'an-series-f10', recto: r`Critère des séries alternées (Leibniz) et majoration du reste.`,
            verso: r`Si $(a_n)$ est **décroissante** et tend vers $0$, alors $\sum(-1)^na_n$ converge.
De plus $|R_N|\le a_{N+1}$, et $R_N$ a le signe du premier terme négligé $(-1)^{N+1}a_{N+1}$.` },
          { id: 'an-series-f11', recto: r`Comparaison série–intégrale : hypothèses et conclusion.`,
            verso: r`$f$ continue, positive, **décroissante** sur $[1,+\infty[$.
$\sum f(n)$ et $\int_1^{+\infty}f$ ont même nature, grâce à l'encadrement $$\int_n^{n+1}f\le f(n)\le\int_{n-1}^{n}f$$` },
          { id: 'an-series-f12', recto: r`Nature des séries de Bertrand $\sum\dfrac{1}{n^\alpha(\ln n)^\beta}$ ?`,
            verso: r`Converge ⇔ $\alpha>1$, **ou** ($\alpha=1$ et $\beta>1$).
Exemple : $\sum\frac{1}{n\ln n}$ diverge, $\sum\frac{1}{n(\ln n)^2}$ converge.` },
          { id: 'an-series-f13', recto: r`Développement asymptotique de $H_n=\sum_{k=1}^{n}\dfrac1k$ ?`,
            verso: r`$$H_n=\ln n+\gamma+o(1)$$ où $\gamma\approx0{,}577$ est la constante d'Euler. En particulier $H_n\sim\ln n$.` },
          { id: 'an-series-f14', recto: r`Série télescopique $\sum(v_{n+1}-v_n)$ : nature et somme ?`,
            verso: r`Converge ⇔ $(v_n)$ converge, et alors $$\sum_{n=0}^{\infty}(v_{n+1}-v_n)=\lim v_n-v_0$$` },
          { id: 'an-series-f15', recto: r`Trois sommes à connaître : $\sum\frac{x^n}{n!}$, $\sum\frac1{n^2}$, $\sum\frac{(-1)^{n+1}}{n}$.`,
            verso: r`- $\sum_{n\ge0}\frac{x^n}{n!}=e^x$
- $\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}{6}$
- $\sum_{n\ge1}\frac{(-1)^{n+1}}{n}=\ln2$` },
          { id: 'an-series-f16', recto: r`Peut-on changer l'ordre des termes d'une série convergente ?`,
            verso: r`- Convergence **absolue** : oui, la somme ne change pas.
- Semi-convergente : non. Théorème de Riemann : on peut la réordonner pour obtenir n'importe quelle somme réelle, ou la faire diverger.` },
        ],
        qcm: [
          { id: 'an-series-q01', question: r`$\displaystyle\sum_{n\ge1}\frac{1}{n(n+1)}$ ?`,
            choix: [r`Converge, de somme $1$`, r`Converge, de somme $2$`, r`Converge, de somme $\frac{\pi^2}{6}$`, r`Diverge`], bonne: 0,
            explication: r`$\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}$ : série télescopique, $S_N=1-\frac1{N+1}\to1$.` },
          { id: 'an-series-q02', question: r`Nature de $\displaystyle\sum\frac{n}{n+1}$ ?`,
            choix: [r`Diverge grossièrement`, r`Converge`, r`Diverge, mais le terme général tend vers $0$`, r`On ne peut pas conclure`], bonne: 0,
            explication: r`$\frac{n}{n+1}\to1\ne0$ : la condition nécessaire n'est pas remplie.` },
          { id: 'an-series-q03', question: r`Nature de $\displaystyle\sum\frac{1}{\sqrt n}$ ?`,
            choix: [r`Diverge`, r`Converge`, r`Diverge grossièrement`, r`Converge absolument`], bonne: 0,
            explication: r`Série de Riemann avec $\alpha=\frac12\le1$. Elle diverge, mais pas grossièrement : $\frac1{\sqrt n}\to0$.` },
          { id: 'an-series-q04', question: r`Nature de $\displaystyle\sum\frac{n!}{n^n}$ ?`,
            choix: [r`Converge`, r`Diverge`, r`D'Alembert ne permet pas de conclure`, r`Diverge grossièrement`], bonne: 0,
            explication: r`$\frac{u_{n+1}}{u_n}=\left(\frac{n}{n+1}\right)^n=\left(1+\frac1n\right)^{-n}\to\frac1e<1$ : converge par d'Alembert.` },
          { id: 'an-series-q05', question: r`Nature de $\displaystyle\sum\frac{(-1)^n}{\sqrt n}$ ?`,
            choix: [r`Converge, mais pas absolument`, r`Converge absolument`, r`Diverge`, r`Diverge grossièrement`], bonne: 0,
            explication: r`$\frac1{\sqrt n}$ décroît vers $0$ : converge par le critère des séries alternées. Mais $\sum\frac1{\sqrt n}$ diverge (Riemann), donc pas de convergence absolue.` },
          { id: 'an-series-q06', question: r`Nature de $\displaystyle\sum\frac{2^n}{n^3}$ ?`,
            choix: [r`Diverge grossièrement`, r`Converge`, r`Converge par d'Alembert`, r`On ne peut pas conclure`], bonne: 0,
            explication: r`Croissances comparées : $\frac{2^n}{n^3}\to+\infty$. D'Alembert donne aussi $\ell=2>1$.` },
          { id: 'an-series-q07', question: r`Si $u_n>0$ et $\dfrac{u_{n+1}}{u_n}\to1$, alors $\sum u_n$ :`,
            choix: [r`On ne peut pas conclure`, r`Converge`, r`Diverge`, r`Diverge grossièrement`], bonne: 0,
            explication: r`Cas douteux : $\sum\frac1n$ diverge et $\sum\frac1{n^2}$ converge, et le rapport tend vers $1$ dans les deux cas.` },
          { id: 'an-series-q08', question: r`Que vaut $\displaystyle\sum_{n=0}^{\infty}\left(\frac13\right)^n$ ?`,
            choix: [r`$\frac32$`, r`$\frac13$`, r`$\frac12$`, r`$3$`], bonne: 0,
            explication: r`Série géométrique de raison $q=\frac13$ : $\frac{1}{1-q}=\frac{1}{2/3}=\frac32$.` },
          { id: 'an-series-q09', question: r`Nature de $\displaystyle\sum_{n\ge2}\frac{1}{n\ln n}$ ?`,
            choix: [r`Diverge`, r`Converge`, r`Diverge grossièrement`, r`Converge par comparaison à $\frac1n$`], bonne: 0,
            explication: r`Bertrand avec $\alpha=\beta=1$. Ou série–intégrale : $\int_2^X\frac{dt}{t\ln t}=\ln\ln X-\ln\ln2\to+\infty$.` },
          { id: 'an-series-q10', question: r`Nature de $\displaystyle\sum\left(1-\cos\frac1n\right)$ ?`,
            choix: [r`Converge`, r`Diverge`, r`Diverge grossièrement`, r`Converge, mais pas absolument`], bonne: 0,
            explication: r`$1-\cos\frac1n\sim\frac{1}{2n^2}\ge0$ : même nature que la série de Riemann $\sum\frac1{n^2}$, qui converge.` },
          { id: 'an-series-q11', question: r`Quelle affirmation est vraie ?`,
            choix: [r`Si $\sum u_n$ converge absolument et $(v_n)$ est bornée, alors $\sum u_nv_n$ converge`, r`Si $u_n\to0$, alors $\sum u_n$ converge`, r`Si $\sum u_n$ et $\sum v_n$ convergent, alors $\sum u_nv_n$ converge`, r`Si $\sum u_n$ converge, alors $\sum u_n^2$ converge`], bonne: 0,
            explication: r`$|u_nv_n|\le M|u_n|$ donne la convergence absolue. Pour les autres, prendre $u_n=v_n=\frac{(-1)^n}{\sqrt n}$ : $\sum u_n$ converge mais $\sum u_n^2=\sum\frac1n$ diverge.` },
        ],
      },
    ],
  },
];
