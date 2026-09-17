// Analyse de Fourier — notes de cours de J. K. Canci (2024-25).
// Format : voir README.md. Formules entre $...$ ou $$...$$ ; les id ne doivent jamais changer.
(window.COURSES = window.COURSES || []).push((() => {
  const r = String.raw;
  return {
    id: 'fourier',
    titre: 'Analyse de Fourier',
    chapitres: [
      {
        id: 'fo-cx',
        titre: 'Nombres complexes',
        resume: r`
## Forme cartésienne
$z=a+ib$ avec $a=\mathrm{Re}(z)$, $b=\mathrm{Im}(z)$ et $i^2=-1$. Conjugué : $\bar z=a-ib$.
- $(a_1+ib_1)(a_2+ib_2)=(a_1a_2-b_1b_2)+i(a_1b_2+a_2b_1)$
- $\overline{z_1+z_2}=\bar z_1+\bar z_2$ et $\overline{z_1z_2}=\bar z_1\,\bar z_2$
- $|z|^2=z\bar z$, $\mathrm{Re}(z)=\frac{z+\bar z}{2}$, $\mathrm{Im}(z)=\frac{z-\bar z}{2i}$
> Attention : le poly écrit $\mathrm{Im}(z)=\frac{z-\bar z}{2}$, c'est une coquille. Le bon dénominateur est $2i$.

## Forme polaire
$|z|=\sqrt{a^2+b^2}$ et $z=|z|(\cos\theta+i\sin\theta)$, où $\theta=\mathrm{Arg}\,z$ est défini modulo $2\pi$.
- $|z_1z_2|=|z_1|\,|z_2|$ et les arguments s'additionnent (de Moivre).
- Si $a\ne0$ : $\tan(\mathrm{Arg}\,z)=b/a$.

## Exponentielle imaginaire
$e^{ix}=\sum_{n\ge0}\frac{(ix)^n}{n!}$ et **Euler** : $e^{ix}=\cos x+i\sin x$.
- $e^{i(\theta_1+\theta_2)}=e^{i\theta_1}\,e^{i\theta_2}$ (un **produit**)
> Attention : le corollaire 1.2.2 du poly écrit une somme $e^{i\theta_1}+e^{i\theta_2}$, c'est une coquille.
- $\cos x=\frac{e^{ix}+e^{-ix}}{2}$ et $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$
- Racines $n$-ièmes de l'unité : $z^n=1\iff z=e^{2ik\pi/n}$, $k=0,\dots,n-1$.
`,
        fiches: [
          { id: 'fo-cx-f01', recto: r`Produit de $z_1=a_1+ib_1$ et $z_2=a_2+ib_2$ en forme cartésienne ?`,
            verso: r`$$z_1z_2=(a_1a_2-b_1b_2)+i(a_1b_2+a_2b_1)$$` },
          { id: 'fo-cx-f02', recto: r`Exprimer $|z|^2$, $\mathrm{Re}(z)$ et $\mathrm{Im}(z)$ à l'aide de $z$ et $\bar z$.`,
            verso: r`$|z|^2=z\bar z$, $\quad\mathrm{Re}(z)=\dfrac{z+\bar z}{2}$, $\quad\mathrm{Im}(z)=\dfrac{z-\bar z}{2i}$
(Le poly écrit $\frac{z-\bar z}{2}$ : coquille.)` },
          { id: 'fo-cx-f03', recto: r`Forme polaire de $z=a+ib$ : module et argument.`,
            verso: r`$|z|=\sqrt{a^2+b^2}$, et $z=|z|(\cos\theta+i\sin\theta)$ avec $\theta=\mathrm{Arg}\,z$ défini modulo $2\pi$ (sens trigonométrique).
$a=|z|\cos\theta$, $\ b=|z|\sin\theta$.` },
          { id: 'fo-cx-f04', recto: r`Formules de de Moivre (produit en forme polaire).`,
            verso: r`$(\cos\theta_1+i\sin\theta_1)(\cos\theta_2+i\sin\theta_2)=\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)$
et $|z_1z_2|=|z_1|\,|z_2|$ : les modules se multiplient, les arguments s'additionnent.` },
          { id: 'fo-cx-f05', recto: r`Énoncer la formule d'Euler et donner l'idée de la preuve.`,
            verso: r`$$e^{ix}=\cos x+i\sin x\quad(x\in\mathbb R)$$
On sépare les termes pairs et impairs de $\sum\frac{(ix)^n}{n!}$ : $\sum(-1)^n\frac{x^{2n}}{(2n)!}=\cos x$ et $\sum(-1)^n\frac{x^{2n+1}}{(2n+1)!}=\sin x$.` },
          { id: 'fo-cx-f06', recto: r`Exprimer $\cos x$ et $\sin x$ à l'aide d'exponentielles complexes.`,
            verso: r`$$\cos x=\frac{e^{ix}+e^{-ix}}{2},\qquad \sin x=\frac{e^{ix}-e^{-ix}}{2i}$$` },
          { id: 'fo-cx-f07', recto: r`Que vaut $e^{i(\theta_1+\theta_2)}$ ?`,
            verso: r`$e^{i(\theta_1+\theta_2)}=e^{i\theta_1}\cdot e^{i\theta_2}$ : c'est un produit, conséquence de de Moivre.
(Le corollaire 1.2.2 du poly écrit une somme : coquille.)` },
          { id: 'fo-cx-f08', recto: r`Résoudre $z^n=1$ dans $\mathbb C$ ($n\ge1$), puis $z^n=z_0$.`,
            verso: r`$z^n=1\iff z=e^{2ik\pi/n}$, $k\in\{0,\dots,n-1\}$ : $n$ solutions sur le cercle unité.
Si $z_0=\rho e^{i\alpha}\ne0$ : $z=\rho^{1/n}e^{i(\alpha+2k\pi)/n}$, $k=0,\dots,n-1$.` },
        ],
        qcm: [
          { id: 'fo-cx-q01', question: r`Que vaut $e^{i\pi}$ ?`,
            choix: [r`$-1$`, r`$1$`, r`$i$`, r`$0$`], bonne: 0,
            explication: r`Euler : $e^{i\pi}=\cos\pi+i\sin\pi=-1$.` },
          { id: 'fo-cx-q02', question: r`Combien de solutions complexes a l'équation $z^6=1$ ?`,
            choix: [r`$6$`, r`$2$`, r`$3$`, r`Une infinité`], bonne: 0,
            explication: r`Les racines $6$-ièmes de l'unité $e^{2ik\pi/6}$, $k=0,\dots,5$ : exactement $6$ solutions distinctes.` },
          { id: 'fo-cx-q03', question: r`Quelle formule est correcte ?`,
            choix: [r`$\mathrm{Im}(z)=\dfrac{z-\bar z}{2i}$`, r`$\mathrm{Im}(z)=\dfrac{z-\bar z}{2}$`, r`$\mathrm{Im}(z)=\dfrac{z+\bar z}{2i}$`, r`$\mathrm{Im}(z)=z\bar z$`], bonne: 0,
            explication: r`$z-\bar z=(a+ib)-(a-ib)=2ib$, donc $b=\frac{z-\bar z}{2i}$.` },
          { id: 'fo-cx-q04', question: r`Module de $z=(1+i)^4$ ?`,
            choix: [r`$4$`, r`$2$`, r`$\sqrt2$`, r`$16$`], bonne: 0,
            explication: r`$|1+i|=\sqrt2$ et le module d'un produit est le produit des modules : $(\sqrt2)^4=4$. D'ailleurs $(1+i)^4=-4$.` },
          { id: 'fo-cx-q05', question: r`Pour $x\in\mathbb R$, que vaut $|e^{ix}|$ ?`,
            choix: [r`$1$`, r`$e^x$`, r`$|x|$`, r`$\cos x$`], bonne: 0,
            explication: r`$|e^{ix}|^2=\cos^2x+\sin^2x=1$ : $e^{ix}$ est sur le cercle unité.` },
          { id: 'fo-cx-q06', question: r`Quel est le conjugué de $z=a+ib$ ($a,b\in\mathbb R$) ?`,
            choix: [r`$a-ib$`, r`$-a+ib$`, r`$b+ia$`, r`$\frac1z$`], bonne: 0,
            explication: r`Par définition, $\bar z=a-ib$ : c'est le symétrique de $z$ par rapport à l'axe réel.` },
          { id: 'fo-cx-q07', question: r`Comment est défini le module de $z=a+ib$ ?`,
            choix: [r`$|z|=\sqrt{a^2+b^2}$`, r`$|z|=a^2+b^2$`, r`$|z|=|a|+|b|$`, r`$|z|=\sqrt{a^2-b^2}$`], bonne: 0,
            explication: r`C'est la longueur du vecteur $(a,b)$ dans le plan de Gauss. On a aussi $|z|^2=z\bar z$.` },
          { id: 'fo-cx-q08', question: r`L'argument d'un nombre complexe non nul est défini :`,
            choix: [r`Modulo $2\pi$`, r`Modulo $\pi$`, r`De façon unique dans $\mathbb R$`, r`Modulo $\frac\pi2$`], bonne: 0,
            explication: r`C'est l'angle avec l'axe réel positif, compté dans le sens trigonométrique. Ajouter $2\pi$ donne le même point.` },
          { id: 'fo-cx-q09', question: r`Quelle propriété est vraie pour tous $z_1,z_2\in\mathbb C$ ?`,
            choix: [r`$\overline{z_1z_2}=\bar z_1\,\bar z_2$`, r`$|z_1+z_2|=|z_1|+|z_2|$`, r`$\overline{z_1+z_2}=\bar z_1-\bar z_2$`, r`$\mathrm{Arg}(z_1+z_2)=\mathrm{Arg}\,z_1+\mathrm{Arg}\,z_2$`], bonne: 0,
            explication: r`La conjugaison est compatible avec la somme et le produit. Pour le module on a seulement $|z_1+z_2|\le|z_1|+|z_2|$, et les arguments s'additionnent pour un **produit**, pas pour une somme.` },
          { id: 'fo-cx-q10', question: r`Que dit la formule d'Euler ?`,
            choix: [r`$e^{ix}=\cos x+i\sin x$`, r`$e^{ix}=\cos x-i\sin x$`, r`$e^{ix}=\sin x+i\cos x$`, r`$e^{ix}=1+ix$`], bonne: 0,
            explication: r`Elle s'obtient en séparant les termes pairs et impairs de la série $\sum\frac{(ix)^n}{n!}$. Le signe $-$ correspond à $e^{-ix}$.` },
          { id: 'fo-cx-q11', question: r`En forme polaire, multiplier deux nombres complexes revient à :`,
            choix: [r`Multiplier les modules et additionner les arguments`, r`Multiplier les modules et multiplier les arguments`, r`Additionner les modules et les arguments`, r`Additionner les modules et multiplier les arguments`], bonne: 0,
            explication: r`De Moivre : $r_1e^{i\theta_1}\cdot r_2e^{i\theta_2}=r_1r_2\,e^{i(\theta_1+\theta_2)}$.` },
          { id: 'fo-cx-q12', question: r`Dans le cours, comment est défini $e^{ix}$ pour $x\in\mathbb R$ ?`,
            choix: [r`$\displaystyle\sum_{n=0}^{\infty}\frac{(ix)^n}{n!}$`, r`$\displaystyle\sum_{n=0}^{\infty}\frac{i\,x^n}{n!}$`, r`$\displaystyle\sum_{n=1}^{\infty}\frac{(ix)^n}{n}$`, r`$\cos x\cdot\sin x$`], bonne: 0,
            explication: r`On remplace $x$ par $ix$ dans la série de l'exponentielle réelle $\sum\frac{x^n}{n!}$.` },
          { id: 'fo-cx-q13', question: r`Muni de l'addition et de la multiplication, $\mathbb C$ est :`,
            choix: [r`Un corps commutatif`, r`Un corps non commutatif`, r`Un corps totalement ordonné compatible avec les opérations`, r`Un anneau qui n'est pas un corps`], bonne: 0,
            explication: r`Tout $z\ne0$ a un inverse $\frac{\bar z}{|z|^2}$ et le produit est commutatif. Mais aucun ordre n'est compatible avec les opérations : on aurait $i^2=-1\ge0$.` },
        ],
      },
      {
        id: 'fo-sf',
        titre: 'Séries de Fourier',
        resume: r`
## Idée
Décomposer une fonction périodique en somme de sinus et cosinus (« blocs de base »). Taylor approche bien **localement**, Fourier approche bien **globalement en moyenne**.
Exemple : $f(t)=3\sin t+0{,}5\sin16t$ est codé par 2 fréquences ($1$, $16$) et 2 amplitudes ($3$, $0{,}5$).

## Fonctions périodiques
$f$ est $T$-périodique si $f(t+T)=f(t)$ pour tout $t$.
- $\sin(\lambda t)$ et $\cos(\lambda t)$ sont $\frac{2\pi}{|\lambda|}$-périodiques ; une constante est $T$-périodique pour tout $T$.
- $f$ continue $T$-périodique : $\int_0^Tf=\int_a^{a+T}f$ pour tout $a$.

## Polynômes trigonométriques et coefficients
$P(t)=\sum_{k=-N}^{N}a_ke^{2\pi ikt/T}=\sum_k b_k\cos\frac{2\pi kt}{T}+\sum_k c_k\sin\frac{2\pi kt}{T}$
- $a_0=b_0$, $a_k=\frac{b_k-ic_k}{2}$ ($k>0$), $a_{-k}=\frac{b_k+ic_k}{2}$.
- **Lemme clé** : $\frac1T\int_0^Te^{2\pi ikt/T}\,dt=\delta_{0k}$ (orthogonalité).
- **Coefficients de Fourier** : $a_q=\frac1T\int_0^Tf(t)\,e^{-2\pi iqt/T}\,dt$.

## Exemple : $f(t)=t$ sur $[0,T[$, prolongée par périodicité
$a_0=\frac T2$ et $a_k=\frac{iT}{2\pi k}$ pour $k\ne0$, donc $f(t)\sim\frac T2-\sum_{k\ge1}\frac{T}{\pi k}\sin\frac{2\pi kt}{T}$.
> Attention : le poly écrit $+\sum\frac{T}{\pi k}\sin$. Le signe correct est $-$ (le coefficient de $e^{-2\pi ikt/T}$ vaut $-\frac{iT}{2\pi k}$). En $t=0$, la série vaut $\frac T2$, la moyenne des limites à gauche ($T$) et à droite ($0$) du saut.

## Classes de fonctions
- $L^1[0,T]$ : $\int_0^T|f|<\infty$. Les coefficients existent et $|a_k|\le\frac1T\int_0^T|f|$.
- $L^2[0,T]$ : $\int_0^T|f|^2<\infty$ (énergie finie). $L^2\subset L^1$ par Cauchy–Schwarz.
- Continue ⇒ intégrable. $\frac1{\sqrt t}$ sur $]0,1]$ : intégrable mais ni bornée, ni de carré intégrable. $\frac1t$ : non intégrable.

## Modes de convergence
- **Ponctuelle** : $f_n(t)\to f(t)$ pour chaque $t$.
- **Uniforme** : $\sup_t|f_n(t)-f(t)|\to0$ (le graphe de $f_n$ finit dans tout $\varepsilon$-tube autour de $f$).
- Uniforme ⇒ ponctuelle, pas l'inverse : $e^{-kt}$ sur $[0,+\infty[$.
- Limite uniforme de fonctions continues ⇒ continue.
- **Gibbs** : oscillations persistantes près des sauts des sommes partielles.
`,
        fiches: [
          { id: 'fo-sf-f01', recto: r`Définition : $f:\mathbb R\to\mathbb C$ est $T$-périodique. Période de $\sin(\lambda t)$ ?`,
            verso: r`$f(t+T)=f(t)$ pour tout $t\in\mathbb R$ ($T>0$).
$\sin(\lambda t)$ et $\cos(\lambda t)$ sont $\dfrac{2\pi}{|\lambda|}$-périodiques ($\lambda\ne0$).` },
          { id: 'fo-sf-f02', recto: r`$f$ continue et $T$-périodique : que dire de $\int_a^{a+T}f(x)\,dx$ ?`,
            verso: r`Elle ne dépend pas de $a$ : $$\int_a^{a+T}f(x)\,dx=\int_0^Tf(x)\,dx$$` },
          { id: 'fo-sf-f03', recto: r`Qu'est-ce qu'un polynôme trigonométrique $T$-périodique ?`,
            verso: r`Une combinaison linéaire **finie** des $e^{2\pi ikt/T}$, $k\in\mathbb Z$ :
$$P(t)=\sum_{k=-N}^{N}a_ke^{2\pi ikt/T}=\sum_{k=0}^{N}b_k\cos\tfrac{2\pi kt}{T}+\sum_{k=0}^{N}c_k\sin\tfrac{2\pi kt}{T}$$` },
          { id: 'fo-sf-f04', recto: r`Lien entre les coefficients complexes $a_k$ et les coefficients réels $b_k$ (cos) et $c_k$ (sin) ?`,
            verso: r`$a_0=b_0$, $\quad a_k=\dfrac{b_k-ic_k}{2}$ si $k>0$, $\quad a_k=\dfrac{b_{-k}+ic_{-k}}{2}$ si $k<0$.` },
          { id: 'fo-sf-f05', recto: r`Que vaut $\dfrac1T\displaystyle\int_0^Te^{2\pi ikt/T}\,dt$ pour $k\in\mathbb Z$ ? Preuve ?`,
            verso: r`$\delta_{0k}$ : $1$ si $k=0$, $0$ sinon.
Pour $k\ne0$, la primitive $\frac{T}{2\pi ik}e^{2\pi ikt/T}$ prend la même valeur en $0$ et en $T$.` },
          { id: 'fo-sf-f06', recto: r`Formule des coefficients de Fourier $a_q$ d'une fonction $T$-périodique.`,
            verso: r`$$a_q=\frac1T\int_0^Tf(t)\,e^{-2\pi iqt/T}\,dt,\quad q\in\mathbb Z$$
Pour un polynôme trigonométrique, on retrouve exactement ses coefficients grâce à l'orthogonalité.` },
          { id: 'fo-sf-f07', recto: r`Série de Fourier de $f(t)=t$ sur $[0,T[$, prolongée par $T$-périodicité.`,
            verso: r`$a_0=\frac T2$, $a_k=\frac{iT}{2\pi k}$ ($k\ne0$), d'où
$$f(t)\sim\frac T2-\sum_{k\ge1}\frac{T}{\pi k}\sin\frac{2\pi kt}{T}$$
(Le poly a une erreur de signe.) En $t=0$, la série vaut $\frac T2$, la moyenne du saut.` },
          { id: 'fo-sf-f08', recto: r`Définir $L^1[0,T]$ et $L^2[0,T]$. Quelle inclusion ?`,
            verso: r`$L^1$ : $\int_0^T|f|<\infty$ (intégrable). $L^2$ : $\int_0^T|f|^2<\infty$ (énergie finie).
$L^2\subset L^1$ : par Cauchy–Schwarz, $\int_0^T|f|\le\sqrt T\left(\int_0^T|f|^2\right)^{1/2}$.` },
          { id: 'fo-sf-f09', recto: r`Pourquoi les coefficients de Fourier d'une fonction intégrable existent-ils ?`,
            verso: r`Car $|e^{-2\pi ikt/T}|=1$, donc $$|a_k|\le\frac1T\int_0^T|f(t)|\,dt<\infty$$` },
          { id: 'fo-sf-f10', recto: r`Donner une fonction intégrable non bornée, et une fonction non intégrable (1-périodiques).`,
            verso: r`- $\frac1{\sqrt t}$ sur $]0,1]$ : $\int_0^1\frac{dt}{\sqrt t}=2$, intégrable mais non bornée.
- $\frac1t$ sur $]0,1]$ : $\int_0^1\frac{dt}t=+\infty$, non intégrable.` },
          { id: 'fo-sf-f11', recto: r`Définir convergence ponctuelle et convergence uniforme de $(f_n)$ vers $f$.`,
            verso: r`- Ponctuelle : $\forall t,\ f_n(t)\to f(t)$.
- Uniforme : $\sup_{t}|f_n(t)-f(t)|\xrightarrow[n\to\infty]{}0$.
Uniforme ⇒ ponctuelle, réciproque fausse.` },
          { id: 'fo-sf-f12', recto: r`Contre-exemple : convergence ponctuelle mais pas uniforme.`,
            verso: r`$f_k(t)=e^{-kt}$ sur $[0,+\infty[$ converge vers $f=\mathbf 1_{\{0\}}$ ($1$ en $0$, $0$ ailleurs), mais $\sup|f_k-f|=1$.
Sur $[S,+\infty[$ avec $S>0$, la convergence est uniforme ($\sup=e^{-kS}\to0$).` },
          { id: 'fo-sf-f13', recto: r`Interprétation géométrique de la convergence uniforme.`,
            verso: r`Pour tout $\varepsilon>0$, à partir d'un certain rang, le graphe de $f_k$ est contenu dans le tube $U_\varepsilon=\{(x,y):|f(x)-y|\le\varepsilon\}$.` },
          { id: 'fo-sf-f14', recto: r`Limite uniforme de fonctions continues : que dire de la limite ?`,
            verso: r`Elle est continue. On peut intervertir les limites : $$\lim_{x\to x_0}\lim_{k\to\infty}f_k(x)=\lim_{k\to\infty}\lim_{x\to x_0}f_k(x)$$` },
          { id: 'fo-sf-f15', recto: r`Qu'est-ce que le phénomène de Gibbs ?`,
            verso: r`Pour une fonction $C^1$ par morceaux avec des sauts, les sommes partielles de Fourier présentent des oscillations près des discontinuités, qui ne disparaissent pas quand $N$ augmente.` },
        ],
        qcm: [
          { id: 'fo-sf-q01', question: r`Quelle est la plus petite période de $t\mapsto\cos(3t)$ ?`,
            choix: [r`$\frac{2\pi}{3}$`, r`$6\pi$`, r`$3$`, r`$\frac{\pi}{3}$`], bonne: 0,
            explication: r`$\cos(\lambda t)$ est $\frac{2\pi}{|\lambda|}$-périodique, ici $\frac{2\pi}3$.` },
          { id: 'fo-sf-q02', question: r`Que vaut $\dfrac1T\displaystyle\int_0^Te^{2\pi i(k-l)t/T}\,dt$ pour $k,l\in\mathbb Z$ ?`,
            choix: [r`$\delta_{kl}$`, r`$0$ toujours`, r`$1$ toujours`, r`$T\,\delta_{kl}$`], bonne: 0,
            explication: r`Lemme d'orthogonalité avec l'entier $k-l$ : on obtient $1$ si $k=l$ et $0$ sinon.` },
          { id: 'fo-sf-q03', question: r`Pour $f(t)=t$ sur $[0,T[$ ($T$-périodique), que vaut $a_0$ ?`,
            choix: [r`$\frac T2$`, r`$0$`, r`$T$`, r`$\frac{T^2}2$`], bonne: 0,
            explication: r`$a_0=\frac1T\int_0^Tt\,dt=\frac1T\cdot\frac{T^2}2=\frac T2$ : c'est la valeur moyenne de $f$.` },
          { id: 'fo-sf-q04', question: r`La fonction 1-périodique égale à $\frac1{\sqrt t}$ sur $]0,1]$ est :`,
            choix: [r`Intégrable, mais pas de carré intégrable`, r`De carré intégrable`, r`Non intégrable`, r`Bornée`], bonne: 0,
            explication: r`$\int_0^1\frac{dt}{\sqrt t}=2<\infty$, mais $\int_0^1\left|\frac1{\sqrt t}\right|^2dt=\int_0^1\frac{dt}{t}=+\infty$. Elle est dans $L^1$, pas dans $L^2$.` },
          { id: 'fo-sf-q05', question: r`Sur $[0,+\infty[$, $f_k(t)=e^{-kt}$ converge :`,
            choix: [r`Ponctuellement, mais pas uniformément`, r`Uniformément vers $0$`, r`Ponctuellement vers $0$`, r`Ni ponctuellement, ni uniformément`], bonne: 0,
            explication: r`La limite vaut $1$ en $t=0$ et $0$ ailleurs, et $\sup_t|f_k-f|=1\not\to0$. Une limite discontinue de fonctions continues ne peut pas être uniforme.` },
          { id: 'fo-sf-q06', question: r`Sur $[0,+\infty[$, $f_k(t)=\dfrac{1}{1+t^k}$. Que vaut la limite ponctuelle en $t=1$ ?`,
            choix: [r`$\frac12$`, r`$1$`, r`$0$`, r`Elle n'existe pas`], bonne: 0,
            explication: r`$f_k(1)=\frac12$ pour tout $k$. La limite vaut $1$ sur $[0,1[$ et $0$ sur $]1,+\infty[$ : elle est discontinue, donc la convergence n'est pas uniforme.` },
          { id: 'fo-sf-q07', question: r`Quelle inclusion est vraie pour les fonctions $T$-périodiques ?`,
            choix: [r`$L^2[0,T]\subset L^1[0,T]$`, r`$L^1[0,T]\subset L^2[0,T]$`, r`$L^1=L^2$`, r`Aucune des deux`], bonne: 0,
            explication: r`Cauchy–Schwarz : $\int_0^T|f|\cdot1\le\left(\int_0^T|f|^2\right)^{1/2}\sqrt T$. L'exemple $\frac1{\sqrt t}$ montre que l'inclusion est stricte.` },
          { id: 'fo-sf-q08', question: r`Si $f=\sum_k b_k\cos\frac{2\pi kt}T+c_k\sin\frac{2\pi kt}T$, que vaut $a_1$ (coefficient de $e^{2\pi it/T}$) ?`,
            choix: [r`$\frac{b_1-ic_1}{2}$`, r`$\frac{b_1+ic_1}{2}$`, r`$b_1+ic_1$`, r`$\frac{c_1-ib_1}{2}$`], bonne: 0,
            explication: r`$b\cos\theta+c\sin\theta=b\frac{e^{i\theta}+e^{-i\theta}}2+c\frac{e^{i\theta}-e^{-i\theta}}{2i}$. Le coefficient de $e^{i\theta}$ est $\frac b2+\frac c{2i}=\frac{b-ic}{2}$.` },
          { id: 'fo-sf-q09', question: r`La série de Fourier de $f(t)=t$ sur $[0,T[$ vaut en $t=0$ :`,
            choix: [r`$\frac T2$`, r`$0$`, r`$T$`, r`Elle diverge`], bonne: 0,
            explication: r`Tous les sinus s'annulent en $0$ : il reste $a_0=\frac T2$, la moyenne entre $f(0^-)=T$ et $f(0^+)=0$.` },
          { id: 'fo-sf-q10', question: r`Une fonction $f:\mathbb R\to\mathbb C$ est $T$-périodique ($T>0$) si :`,
            choix: [r`$\forall t\in\mathbb R,\ f(t+T)=f(t)$`, r`$\exists t\in\mathbb R,\ f(t+T)=f(t)$`, r`$f(T)=f(0)$`, r`$\forall t\in\mathbb R,\ f(t+T)=-f(t)$`], bonne: 0,
            explication: r`La relation doit être vraie pour **tout** $t$. Une égalité en un seul point, par exemple $f(T)=f(0)$, ne suffit pas.` },
          { id: 'fo-sf-q11', question: r`Qu'est-ce qu'un polynôme trigonométrique $T$-périodique ?`,
            choix: [r`Une combinaison linéaire finie des $e^{2\pi ikt/T}$, $k\in\mathbb Z$`, r`Une série infinie des $e^{2\pi ikt/T}$`, r`Un polynôme en la seule variable $\cos t$`, r`Un produit fini de sinus et de cosinus`], bonne: 0,
            explication: r`Le mot « polynôme » signifie **finie** : $\sum_{k=-N}^{N}a_ke^{2\pi ikt/T}$. La série infinie, c'est la série de Fourier.` },
          { id: 'fo-sf-q12', question: r`Quelle est la définition du coefficient de Fourier $a_q$ d'une fonction $T$-périodique ?`,
            choix: [r`$\frac1T\int_0^Tf(t)\,e^{-2\pi iqt/T}\,dt$`, r`$\frac1T\int_0^Tf(t)\,e^{2\pi iqt/T}\,dt$`, r`$\int_0^Tf(t)\,e^{-2\pi iqt/T}\,dt$`, r`$\frac1T\int_0^Tf(t)\,e^{-2\pi iqt}\,dt$`], bonne: 0,
            explication: r`Signe $-$ dans l'exponentielle, facteur $\frac1T$ devant, et $\frac{t}{T}$ dans l'exposant. On le retrouve en multipliant $f=\sum a_ke^{2\pi ikt/T}$ par $e^{-2\pi iqt/T}$, puis en intégrant (orthogonalité).` },
          { id: 'fo-sf-q13', question: r`Dans le cours, une fonction $T$-périodique est dite intégrable si :`,
            choix: [r`$\int_0^T|f(t)|\,dt<+\infty$`, r`$f$ est bornée`, r`$f$ est continue`, r`$\int_0^T|f(t)|^2\,dt<+\infty$`], bonne: 0,
            explication: r`C'est la définition de $L^1[0,T]$. Continue ⇒ intégrable, mais une fonction intégrable n'est pas forcément bornée ($\frac1{\sqrt t}$). La dernière condition définit $L^2$.` },
          { id: 'fo-sf-q14', question: r`Que représente $\int_0^T|f(t)|^2\,dt$ en physique ?`,
            choix: [r`L'énergie du signal sur une période`, r`La fréquence fondamentale`, r`L'amplitude maximale`, r`La valeur moyenne du signal`], bonne: 0,
            explication: r`Une fonction de $L^2[0,T]$ est un signal d'énergie finie.` },
          { id: 'fo-sf-q15', question: r`Pourquoi les coefficients de Fourier d'une fonction de $L^1[0,T]$ sont-ils bien définis ?`,
            choix: [r`Parce que $|a_k|\le\frac1T\int_0^T|f|<\infty$`, r`Parce que $f$ est continue`, r`Parce que $f$ est bornée`, r`Parce que la série de Fourier converge`], bonne: 0,
            explication: r`$|e^{-2\pi ikt/T}|=1$, donc l'intégrande est majoré en module par $|f|$, qui est intégrable. Aucune continuité n'est nécessaire.` },
          { id: 'fo-sf-q16', question: r`Définition : $(f_n)$ converge uniformément vers $f$ sur $[a,b]$ si :`,
            choix: [r`$\lim_{n\to\infty}\sup_{t\in[a,b]}|f_n(t)-f(t)|=0$`, r`$\forall t\in[a,b],\ \lim_{n\to\infty}|f_n(t)-f(t)|=0$`, r`$\lim_{n\to\infty}\inf_{t\in[a,b]}|f_n(t)-f(t)|=0$`, r`$\exists t\in[a,b],\ \lim_{n\to\infty}f_n(t)=f(t)$`], bonne: 0,
            explication: r`Le **supremum** des écarts doit tendre vers $0$. La deuxième proposition est la convergence ponctuelle, plus faible.` },
          { id: 'fo-sf-q17', question: r`Quel lien y a-t-il entre convergence uniforme et convergence ponctuelle ?`,
            choix: [r`Uniforme ⇒ ponctuelle, mais pas l'inverse`, r`Ponctuelle ⇒ uniforme, mais pas l'inverse`, r`Elles sont équivalentes`, r`Aucune n'implique l'autre`], bonne: 0,
            explication: r`$|f_n(t)-f(t)|\le\sup|f_n-f|$. Contre-exemple pour la réciproque : $e^{-kt}$ sur $[0,+\infty[$.` },
          { id: 'fo-sf-q18', question: r`Si des fonctions continues $f_k$ convergent **uniformément** vers $f$, alors :`,
            choix: [r`$f$ est continue`, r`$f$ est dérivable`, r`$f$ est constante`, r`On ne peut rien dire sur $f$`], bonne: 0,
            explication: r`La limite uniforme de fonctions continues est continue : on peut intervertir $\lim_{x\to x_0}$ et $\lim_{k\to\infty}$. La dérivabilité ne passe pas à la limite.` },
          { id: 'fo-sf-q19', question: r`Comparer les approximations de Taylor et de Fourier :`,
            choix: [r`Taylor est bonne localement, Fourier est bonne globalement en moyenne`, r`Taylor est bonne globalement, Fourier localement`, r`Les deux sont seulement locales`, r`Les deux sont exactes partout dès qu'on s'arrête à un ordre fini`], bonne: 0,
            explication: r`Un développement de Taylor colle à la fonction près du point de départ mais s'en écarte loin de lui. Fourier approche sur toute la période en moyenne, avec parfois des défauts locaux (Gibbs).` },
          { id: 'fo-sf-q20', question: r`Où apparaît le phénomène de Gibbs ?`,
            choix: [r`Près des discontinuités (sauts) de la fonction`, r`Aux points où la fonction est dérivable`, r`Uniquement pour les fonctions continues`, r`Loin des sauts, au milieu des intervalles`], bonne: 0,
            explication: r`Les sommes partielles oscillent près des sauts d'une fonction $C^1$ par morceaux, et ces oscillations ne disparaissent pas quand $N$ augmente.` },
          { id: 'fo-sf-q21', question: r`Une fonction constante est :`,
            choix: [r`$T$-périodique pour tout $T>0$`, r`Seulement $1$-périodique`, r`Seulement $2\pi$-périodique`, r`Non périodique`], bonne: 0,
            explication: r`$f(t+T)=f(t)$ est vraie quel que soit $T$ : une constante n'a pas de plus petite période.` },
          { id: 'fo-sf-q22', question: r`La fonction $\mathrm{Frac}(x)=x-\lfloor x\rfloor$ est :`,
            choix: [r`$1$-périodique`, r`$2\pi$-périodique`, r`$\frac12$-périodique`, r`Non périodique`], bonne: 0,
            explication: r`$\lfloor x+1\rfloor=\lfloor x\rfloor+1$, donc $\mathrm{Frac}(x+1)=\mathrm{Frac}(x)$. C'est une fonction bornée, discontinue et intégrable (exemple du cours).` },
        ],
      },
    ],
  };
})());
