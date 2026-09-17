// Analyse vectorielle — notes de cours de M. Abboud (2026-2027).
// Format : voir README.md. Formules entre $...$ ou $$...$$ ; les id ne doivent jamais changer.
(window.COURSES = window.COURSES || []).push((() => {
  const r = String.raw;
  return {
    id: 'analyse-vectorielle',
    titre: 'Analyse vectorielle',
    chapitres: [
      /* ------------------------------------------------------------------ */
      {
        id: 'av-pre',
        titre: '1. Préliminaires',
        resume: r`
## Topologie de $\mathbb R^n$
- Toutes les normes sont équivalentes : $cN_1\le N_2\le CN_1$. Ouverts, compacts, limites et continuité ne dépendent donc pas de la norme.
- $\|a\|_\infty\le\|a\|\le\|a\|_1\le n\|a\|_\infty$.
- **Compact** : toute suite admet une sous-suite convergente dans $K$. Dans $\mathbb R^n$ : compact ⇔ fermé et borné.
- Sur un compact, une fonction continue est bornée, atteint ses bornes, et est uniformément continue (Heine).
- Convexe ⇒ étoilé ⇒ connexe par arcs. Pour un ouvert : connexe ⇔ connexe par arcs.
> Stratégie de connexité : une propriété vraie quelque part, fermée et ouverte, est vraie partout sur un ouvert connexe.

## Complétude et point fixe
- Espace complet : toute suite de Cauchy converge. $\mathbb R^n$ est complet, $\mathbb Q$ non, et un fermé d'un complet est complet.
- $(C(K,\mathbb R^n),\|\cdot\|_\infty)$ est complet ($K$ compact).
- **Banach–Picard** : $E$ complet non vide, $F$ contractante de rapport $k<1$. Alors $F$ a un unique point fixe $a_*$, $a_{j+1}=F(a_j)\to a_*$ et $d(a_j,a_*)\le\frac{k^j}{1-k}d(a_0,a_1)$.
- Aucune hypothèse n'est superflue : $t+1$ sur $\mathbb R$ (1-lipschitzienne), $t/2$ sur $]0,1]$ (non complet), $t+1/t$ sur $[1,\infty[$ (seulement $d(F(a),F(b))<d(a,b)$).
- **Sur une boule** : si $d(a,F(a))\le(1-k)r$, alors $F$ stabilise $\bar B(a,r)$ et y a un unique point fixe.
- **Paramètre** : si $F(\lambda,\cdot)$ est $k$-contractante uniformément en $\lambda$, le point fixe dépend continûment de $\lambda$.

## Une variable
- Rolle, puis **AF** : $f(b)-f(a)=f'(c)(b-a)$. Inégalité : $|f'|\le M$ ⇒ $|f(b)-f(a)|\le M(b-a)$.
- L'**égalité** des AF est fausse à valeurs dans $\mathbb R^m$, $m\ge2$ : $(\cos t,\sin t)$ sur $[0,2\pi]$.
- **Taylor avec reste intégral** : $f(b)=\sum_{j\le p}\frac{(b-a)^j}{j!}f^{(j)}(a)+\int_a^b\frac{(b-t)^p}{p!}f^{(p+1)}(t)\,dt$.
- $\left\|\int_a^bf\right\|\le\int_a^b\|f\|$. Convergence uniforme ⇒ on peut intervertir limite et intégrale.
- **Dérivation sous l'intégrale** : si $g$ et $\partial_{x_i}g$ sont continues sur $U\times[a,b]$, alors $\partial_iG(x)=\int_a^b\partial_{x_i}g(x,t)\,dt$.
`,
        fiches: [
          { id: 'av-pre-f01', recto: r`Équivalence des normes sur $\mathbb R^n$ : énoncé et conséquence.`,
            verso: r`Pour deux normes $N_1,N_2$, il existe $c,C>0$ avec $cN_1(a)\le N_2(a)\le CN_1(a)$ pour tout $a$.
Ouverts, fermés, compacts, convergence et continuité ne dépendent donc pas de la norme.` },
          { id: 'av-pre-f02', recto: r`Encadrer $\|a\|_\infty$, $\|a\|$ (euclidienne) et $\|a\|_1$ pour $a\in\mathbb R^n$.`,
            verso: r`$$\|a\|_\infty\le\|a\|\le\|a\|_1\le n\,\|a\|_\infty$$` },
          { id: 'av-pre-f03', recto: r`Définition d'un compact de $\mathbb R^n$ et caractérisation (Borel–Lebesgue).`,
            verso: r`$K$ est compact si de toute suite de $K$ on peut extraire une sous-suite convergeant **dans** $K$.
Dans $\mathbb R^n$ : compact ⇔ fermé et borné.` },
          { id: 'av-pre-f04', recto: r`Trois propriétés des fonctions continues sur un compact.`,
            verso: r`- L'image d'un compact est compacte.
- $f:K\to\mathbb R$ continue ($K\ne\varnothing$) est bornée et atteint ses bornes.
- Heine : $f$ est uniformément continue.` },
          { id: 'av-pre-f05', recto: r`Convexe, étoilé, connexe par arcs : définitions et implications.`,
            verso: r`- Convexe : $[a,b]\subset A$ pour tous $a,b\in A$.
- Étoilé par rapport à $c$ : $[c,a]\subset A$ pour tout $a$.
- Connexe par arcs : deux points se joignent par un chemin continu dans $A$.
Convexe ⇒ étoilé ⇒ connexe par arcs.` },
          { id: 'av-pre-f06', recto: r`Qu'est-ce qu'un espace métrique complet ? Exemples.`,
            verso: r`Toute suite de Cauchy converge dans $E$.
$\mathbb R^n$ est complet ; toute partie fermée d'un complet l'est aussi (ex. $\bar B(a,r)$) ; $\mathbb Q$ ne l'est pas ; $(C(K,\mathbb R^n),d_\infty)$ l'est pour $K$ compact.` },
          { id: 'av-pre-f07', recto: r`Énoncer le théorème du point fixe de Banach–Picard (avec l'estimation d'erreur).`,
            verso: r`$(E,d)$ complet **non vide**, $F:E\to E$ contractante de rapport $k<1$. Alors $F$ admet un unique point fixe $a_*$. Pour tout $a_0$, la suite $a_{j+1}=F(a_j)$ converge vers $a_*$ et
$$d(a_j,a_*)\le\frac{k^j}{1-k}\,d(a_0,a_1)$$` },
          { id: 'av-pre-f08', recto: r`Point fixe de Banach : trois contre-exemples montrant qu'aucune hypothèse n'est superflue.`,
            verso: r`- $F(t)=t+1$ sur $\mathbb R$ : 1-lipschitzienne, pas contractante.
- $F(t)=t/2$ sur $]0,1]$ : contractante, mais $E$ n'est pas complet.
- $F(t)=t+1/t$ sur $[1,+\infty[$ : $|F(s)-F(t)|<|s-t|$ sans rapport $k<1$ uniforme.
Dans les trois cas, $F$ n'a pas de point fixe.` },
          { id: 'av-pre-f09', recto: r`Point fixe sur une boule : quelle condition ?`,
            verso: r`$F:\bar B(a,r)\to E$ contractante de rapport $k<1$ et $$d(a,F(a))\le(1-k)r.$$
Alors $F(\bar B(a,r))\subset\bar B(a,r)$ et $F$ a un unique point fixe dans la boule.` },
          { id: 'av-pre-f10', recto: r`Théorème des accroissements finis et sa limite en dimension $m\ge2$.`,
            verso: r`$f:[a,b]\to\mathbb R$ continue, dérivable sur $]a,b[$ : il existe $c\in]a,b[$ tel que $f(b)-f(a)=f'(c)(b-a)$.
**Faux** à valeurs dans $\mathbb R^m$ : $f(t)=(\cos t,\sin t)$ vérifie $f(2\pi)-f(0)=0$ alors que $\|f'\|=1$. Seule l'inégalité subsiste.` },
          { id: 'av-pre-f11', recto: r`Formule de Taylor avec reste intégral ($f$ de classe $C^{p+1}$).`,
            verso: r`$$f(b)=\sum_{j=0}^{p}\frac{(b-a)^j}{j!}f^{(j)}(a)+\int_a^b\frac{(b-t)^p}{p!}f^{(p+1)}(t)\,dt$$
Preuve : récurrence et intégration par parties du reste.` },
          { id: 'av-pre-f12', recto: r`Majoration de la norme d'une intégrale vectorielle, et idée de la preuve.`,
            verso: r`$$\left\|\int_a^bf(t)\,dt\right\|\le\int_a^b\|f(t)\|\,dt$$
Poser $u=\int f$ : $\|u\|^2=\int\langle u,f\rangle\le\|u\|\int\|f\|$ par Cauchy–Schwarz.` },
          { id: 'av-pre-f13', recto: r`Dérivation sous le signe intégral : hypothèses et conclusion.`,
            verso: r`$g:U\times[a,b]\to\mathbb R$ continue, avec $\partial_{x_i}g$ continue sur $U\times[a,b]$. Alors $G(x)=\int_a^bg(x,t)\,dt$ est $C^1$ et
$$\frac{\partial G}{\partial x_i}(x)=\int_a^b\frac{\partial g}{\partial x_i}(x,t)\,dt$$` },
          { id: 'av-pre-f14', recto: r`Interversion limite–intégrale : énoncé.`,
            verso: r`Si des $f_k$ continues sur $[a,b]$ convergent **uniformément** vers $f$, alors $f$ est continue et $\int_a^bf_k\to\int_a^bf$, car $\left\|\int(f_k-f)\right\|\le(b-a)\|f_k-f\|_\infty$.` },
        ],
        qcm: [
          { id: 'av-pre-q01', question: r`Laquelle de ces parties de $\mathbb R^2$ est compacte ?`,
            choix: [r`$[0,1]\times\{0\}$`, r`$]0,1]\times[0,1]$`, r`$\{(1/n,0):n\ge1\}$`, r`$\mathbb R\times\{0\}$`], bonne: 0,
            explication: r`Fermé et borné. $]0,1]\times[0,1]$ n'est pas fermé, $\{(1/n,0)\}$ non plus (il manque la limite $(0,0)$), et $\mathbb R\times\{0\}$ n'est pas borné.` },
          { id: 'av-pre-q02', question: r`$F(t)=t/2$ sur $E=]0,1]$ n'a pas de point fixe. Quelle hypothèse de Banach manque ?`,
            choix: [r`$E$ n'est pas complet`, r`$F$ n'est pas contractante`, r`$E$ est vide`, r`$F$ n'envoie pas $E$ dans $E$`], bonne: 0,
            explication: r`$F$ est $\frac12$-contractante et $F(E)\subset E$. Mais la suite $2^{-j}$ est de Cauchy sans limite dans $]0,1]$ : $E$ n'est pas complet.` },
          { id: 'av-pre-q03', question: r`$F$ contractante de rapport $k=\frac12$, avec $d(a_0,a_1)=1$. Majoration de $d(a_3,a_*)$ ?`,
            choix: [r`$\frac14$`, r`$\frac18$`, r`$\frac12$`, r`$2$`], bonne: 0,
            explication: r`$\frac{k^j}{1-k}d(a_0,a_1)=\frac{1/8}{1/2}=\frac14$.` },
          { id: 'av-pre-q04', question: r`Pour $a\in\mathbb R^n$, quelle inégalité est toujours vraie ?`,
            choix: [r`$\|a\|_1\le n\,\|a\|_\infty$`, r`$\|a\|_1\le\|a\|_\infty$`, r`$\|a\|\le\|a\|_\infty$`, r`$n\,\|a\|_\infty\le\|a\|_1$`], bonne: 0,
            explication: r`$\sum|a_i|\le n\max|a_i|$. Les autres sont fausses pour $a=(1,\dots,1)$ : $\|a\|_1=n$, $\|a\|=\sqrt n$, $\|a\|_\infty=1$.` },
          { id: 'av-pre-q05', question: r`Pour $f(t)=(\cos t,\sin t)$ sur $[0,2\pi]$, existe-t-il $c$ avec $f(2\pi)-f(0)=2\pi f'(c)$ ?`,
            choix: [r`Non, car $\|f'(c)\|=1$ pour tout $c$`, r`Oui, par le théorème des AF`, r`Oui, pour $c=\pi$`, r`Oui, car $f$ est $C^\infty$`], bonne: 0,
            explication: r`$f(2\pi)-f(0)=0$ alors que $2\pi f'(c)\ne0$. L'égalité des accroissements finis tombe en dimension $\ge2$.` },
          { id: 'av-pre-q06', question: r`Quelle implication est fausse en général ?`,
            choix: [r`Connexe par arcs ⇒ étoilé`, r`Convexe ⇒ étoilé`, r`Étoilé ⇒ connexe par arcs`, r`Convexe ⇒ connexe par arcs`], bonne: 0,
            explication: r`Un anneau $\{1\le\|x\|\le2\}$ est connexe par arcs mais étoilé par rapport à aucun point.` },
          { id: 'av-pre-q07', question: r`Méthode de Newton : $f(a)=0$, $f'(a)\ne0$, $N(t)=t-\frac{f(t)}{f'(t)}$. Que vaut $N'(a)$ ?`,
            choix: [r`$0$`, r`$1$`, r`$\frac{f''(a)}{f'(a)}$`, r`$-1$`], bonne: 0,
            explication: r`$N'=\frac{f\,f''}{(f')^2}$, nul en $a$. Par continuité $|N'|\le\frac12$ près de $a$ : $N$ y est contractante, d'où la convergence de Newton.` },
          { id: 'av-pre-q08', question: r`Quelle est la définition d'un ouvert $U\subset\mathbb R^n$ ?`,
            choix: [r`$\forall a\in U,\ \exists r>0,\ B(a,r)\subset U$`, r`$\exists a\in U,\ \exists r>0,\ B(a,r)\subset U$`, r`Son complémentaire est ouvert`, r`$\exists r>0,\ \forall a\in U,\ B(a,r)\subset U$`], bonne: 0,
            explication: r`Chaque point doit avoir une boule autour de lui dans $U$, avec un rayon qui peut dépendre du point. La troisième proposition caractérise un **fermé**. La dernière impose un rayon uniforme, ce qui est trop fort.` },
          { id: 'av-pre-q09', question: r`Une partie $F\subset\mathbb R^n$ est fermée si et seulement si :`,
            choix: [r`Elle est stable par passage à la limite des suites`, r`Elle est bornée`, r`Elle n'est pas ouverte`, r`Elle contient une boule fermée`], bonne: 0,
            explication: r`Fermé ⇔ complémentaire ouvert ⇔ toute suite de $F$ qui converge a sa limite dans $F$. Attention : « non ouvert » n'est pas « fermé » (par exemple $[0,1[$ n'est ni l'un ni l'autre).` },
          { id: 'av-pre-q10', question: r`Selon la définition du cours, $K\subset\mathbb R^n$ est compact si :`,
            choix: [r`De toute suite de $K$ on peut extraire une sous-suite convergeant vers un élément de $K$`, r`Toute suite de $K$ converge dans $K$`, r`$K$ est fermé`, r`De toute suite de $K$ on peut extraire une sous-suite convergente dans $\mathbb R^n$`], bonne: 0,
            explication: r`La limite doit être **dans** $K$. La dernière proposition caractérise seulement les parties bornées (Bolzano–Weierstrass). Dans $\mathbb R^n$ : compact ⇔ fermé et borné.` },
          { id: 'av-pre-q11', question: r`Définition : $(a_k)$ est une suite de Cauchy dans $(E,d)$ si :`,
            choix: [r`$\forall\varepsilon>0,\ \exists N,\ \forall k,l\ge N,\ d(a_k,a_l)\le\varepsilon$`, r`$\forall\varepsilon>0,\ \exists N,\ \forall k\ge N,\ d(a_k,a_{k+1})\le\varepsilon$`, r`$\exists N,\ \forall\varepsilon>0,\ \forall k,l\ge N,\ d(a_k,a_l)\le\varepsilon$`, r`$\forall\varepsilon>0,\ \forall N,\ \exists k,l\ge N,\ d(a_k,a_l)\le\varepsilon$`], bonne: 0,
            explication: r`Ce sont **deux** indices quelconques au-delà de $N$. Des termes consécutifs proches ne suffisent pas : les sommes partielles $H_k=\sum_{j\le k}\frac1j$ vérifient $H_{k+1}-H_k\to0$ mais divergent. L'ordre des quantificateurs compte.` },
          { id: 'av-pre-q12', question: r`Un espace métrique $(E,d)$ est complet si :`,
            choix: [r`Toute suite de Cauchy de $E$ converge dans $E$`, r`Toute suite convergente est de Cauchy`, r`Toute suite bornée converge`, r`$E$ est fermé et borné`], bonne: 0,
            explication: r`Convergente ⇒ Cauchy est toujours vrai. La complétude est la réciproque, une propriété d'existence de la limite.` },
          { id: 'av-pre-q13', question: r`$F:E\to E$ est contractante si :`,
            choix: [r`Il existe $k<1$ tel que $d(F(a),F(b))\le k\,d(a,b)$ pour tous $a,b$`, r`$d(F(a),F(b))<d(a,b)$ pour tous $a\ne b$`, r`Il existe $k\ge0$ tel que $d(F(a),F(b))\le k\,d(a,b)$`, r`$F$ admet un point fixe`], bonne: 0,
            explication: r`Il faut un rapport $k<1$ **uniforme**. La deuxième condition est plus faible : $t+\frac1t$ sur $[1,+\infty[$ la vérifie sans point fixe. La troisième définit seulement « lipschitzienne ».` },
          { id: 'av-pre-q14', question: r`Toute partie fermée d'un espace métrique complet est :`,
            choix: [r`Complète pour la distance induite`, r`Compacte`, r`Bornée`, r`Ouverte`], bonne: 0,
            explication: r`Une suite de Cauchy du fermé converge dans l'espace, et sa limite reste dans le fermé. Exemple : la boule fermée $\bar B(a,r)$.` },
          { id: 'av-pre-q15', question: r`Que dit le théorème de Heine ?`,
            choix: [r`Une fonction continue sur un compact est uniformément continue`, r`Une fonction continue sur un compact est lipschitzienne`, r`Une fonction continue sur un fermé est bornée`, r`Une fonction uniformément continue est dérivable`], bonne: 0,
            explication: r`$\sqrt x$ sur $[0,1]$ est uniformément continue mais pas lipschitzienne. Sur un fermé non borné, une fonction continue peut être non bornée (par exemple $x$ sur $\mathbb R$).` },
          { id: 'av-pre-q16', question: r`Quelles sont les hypothèses du théorème de Rolle ?`,
            choix: [r`$f$ continue sur $[a,b]$, dérivable sur $]a,b[$, $f(a)=f(b)$`, r`$f$ dérivable sur $]a,b[$ et $f(a)=f(b)$`, r`$f$ continue sur $[a,b]$ et $f(a)=f(b)$`, r`$f$ dérivable sur $[a,b]$ et $f(a)=0$`], bonne: 0,
            explication: r`La continuité sur le **fermé** sert à atteindre le max et le min (compact). La dérivabilité sur l'ouvert sert à annuler la dérivée en un extremum intérieur.` },
          { id: 'av-pre-q17', question: r`Inégalité des accroissements finis : si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et $|f'|\le M$, alors :`,
            choix: [r`$|f(b)-f(a)|\le M(b-a)$`, r`$|f(b)-f(a)|\ge M(b-a)$`, r`$|f(b)-f(a)|=M(b-a)$`, r`$|f(b)-f(a)|\le M$`], bonne: 0,
            explication: r`Conséquence de $f(b)-f(a)=f'(c)(b-a)$. En particulier $f'=0$ ⇒ $f$ constante.` },
          { id: 'av-pre-q18', question: r`Quand y a-t-il égalité dans l'inégalité de Cauchy–Schwarz $|\langle a,b\rangle|\le\|a\|\,\|b\|$ ?`,
            choix: [r`Si et seulement si $a$ et $b$ sont colinéaires`, r`Si et seulement si $a\perp b$`, r`Si et seulement si $\|a\|=\|b\|$`, r`Jamais`], bonne: 0,
            explication: r`Pour $a\perp b$, le membre de gauche vaut $0$ : c'est au contraire le cas « le plus loin » de l'égalité.` },
          { id: 'av-pre-q19', question: r`Pour dériver $G(x)=\int_a^bg(x,t)\,dt$ sous le signe intégral, le cours suppose :`,
            choix: [r`$g$ et $\partial_{x_i}g$ continues sur $U\times[a,b]$`, r`$g$ continue seulement`, r`$x\mapsto g(x,t)$ dérivable pour chaque $t$ seulement`, r`$g$ bornée`], bonne: 0,
            explication: r`La continuité **jointe** de $\partial_{x_i}g$ en $(x,t)$ donne l'uniforme continuité sur un compact, ce qui permet de passer à la limite sous l'intégrale.` },
          { id: 'av-pre-q20', question: r`Quel ensemble n'est **pas** complet ?`,
            choix: [r`$\mathbb Q$`, r`$\mathbb R^n$`, r`$\bar B(0,1)\subset\mathbb R^n$`, r`$(C([0,1],\mathbb R),\|\cdot\|_\infty)$`], bonne: 0,
            explication: r`Les approximations décimales de $\sqrt2$ forment une suite de Cauchy de $\mathbb Q$ sans limite rationnelle. Les trois autres sont complets (exemple 1.7 et proposition 1.8).` },
        ],
      },
      /* ------------------------------------------------------------------ */
      {
        id: 'av-dif',
        titre: '2. Différentielles et dérivées partielles',
        resume: r`
## Différentielle
$f$ est différentiable en $a$ s'il existe $L_a$ linéaire avec $f(a+v)=f(a)+L_a(v)+o(\|v\|)$. On note $L_a=D_af$ (unique).
- Différentiable ⇒ continue.
- Linéaire : $D_aL=L$. Bilinéaire : $D_{(a,b)}B(u,v)=B(u,b)+B(a,v)$. $D_a\|x\|^2(v)=2\langle a,v\rangle$ ; $\|x\|$ n'est pas différentiable en $0$.
- **Chaîne** : $D_a(g\circ f)=D_{f(a)}g\circ D_af$, et $\mathrm{Jac}_a(g\circ f)=\mathrm{Jac}_{f(a)}g\cdot\mathrm{Jac}_af$.
- $f$ est différentiable ⇔ chaque coordonnée l'est. Les polynômes sont différentiables.

## Dérivées partielles
- $\partial_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}t$. Si $f$ est différentiable : $\partial_vf(a)=D_af(v)$ et $D_af=\left(\frac{\partial f_j}{\partial x_i}(a)\right)$ (jacobienne $m\times n$).
- Réciproque **fausse** : $\frac{xy}{x^2+y^2}$ (partielles, non continue), $\frac{x^3}{x^2+y^2}$ (toutes directions, non linéaire), $\frac{x^2y}{x^4+y^2}$ (toutes directions, non continue).
- **Gradient** : $D_af(v)=\langle\nabla f(a),v\rangle$. Direction de plus forte pente, orthogonal aux lignes de niveau.
- Du plus faible au plus fort : partielles en $a$ < différentiable en $a$ < $C^1$ au voisinage. Exemple : $t^2\sin(1/t)$ est différentiable mais pas $C^1$.

## Classe $C^1$ et au-delà
- **AF** : $\|f(b)-f(a)\|\le\sup_{[a,b]}\|D_cf\|_{op}\,\|b-a\|$. Si $Df=0$ sur un ouvert connexe, $f$ est constante.
- Partielles existant près de $a$ et continues en $a$ ⇒ différentiable en $a$. En particulier, $C^1$ ⇔ partielles continues.
- **Schwarz** : $f$ de classe $C^2$ ⇒ $\partial_i\partial_jf=\partial_j\partial_if$. Contre-exemple non $C^2$ : $xy\frac{x^2-y^2}{x^2+y^2}$.
- **Taylor–Young** : $f(a+v)=f(a)+\langle\nabla f,v\rangle+\frac12\langle\mathrm{Hess}_af\,v,v\rangle+o(\|v\|^2)$.
- Point critique : Hessienne définie positive → min local strict ; définie négative → max ; valeurs propres de signes opposés → point selle.

## Inversion locale et fonctions implicites
- $C^k$-difféo ⇒ $D_af$ inversible et $D_{f(a)}f^{-1}=(D_af)^{-1}$.
- **Inversion locale** : $f$ de classe $C^k$, $D_af$ inversible ⇒ $f$ est un $C^k$-difféo local. Résultat seulement local : $e^z$ sur $\mathbb C\simeq\mathbb R^2$.
- **Implicites** : $f(a,b)=0$ et $\partial_yf(a,b)$ inversible ⇒ $y=\varphi(x)$ localement, avec $D_a\varphi=-(\partial_yf)^{-1}\circ\partial_xf$.
- Jacobien des polaires $=r$, des sphériques $=r^2\sin\theta$.

## Opérateurs
$\nabla f$, $\mathrm{div}\,X=\partial_xP+\partial_yQ+\partial_zR$, $\mathrm{rot}\,X=(\partial_yR-\partial_zQ,\ \partial_zP-\partial_xR,\ \partial_xQ-\partial_yP)$, $\Delta f=\mathrm{div}\,\nabla f$.
- $\mathrm{rot}\,\nabla f=0$ et $\mathrm{div}\,\mathrm{rot}\,X=0$ (Schwarz).
- Les réciproques sont vraies sur un étoilé, fausses sinon : $\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2},0\right)$ hors de l'axe $Oz$ ; champ coulombien sur $\mathbb R^3\setminus\{0\}$.
`,
        fiches: [
          { id: 'av-dif-f01', recto: r`Définition : $f:U\subset\mathbb R^n\to\mathbb R^m$ est différentiable en $a$.`,
            verso: r`Il existe une application linéaire $L_a:\mathbb R^n\to\mathbb R^m$ telle que
$$f(a+v)=f(a)+L_a(v)+o(\|v\|)\quad(v\to0)$$
$L_a$ est unique et notée $D_af$.` },
          { id: 'av-dif-f02', recto: r`Différentielle d'une application bilinéaire $B$ en $(a,b)$. Application à $\|x\|^2$.`,
            verso: r`$$D_{(a,b)}B(u,v)=B(u,b)+B(a,v)$$
Le reste $B(u,v)=O(\|(u,v)\|^2)$ est négligeable. Pour $f(x)=\langle x,x\rangle$ : $D_af(v)=2\langle a,v\rangle$.` },
          { id: 'av-dif-f03', recto: r`Règle de la chaîne (différentielles et jacobiennes).`,
            verso: r`Si $f$ est différentiable en $a$ et $g$ en $f(a)$ :
$$D_a(g\circ f)=D_{f(a)}g\circ D_af,\qquad \mathrm{Jac}_a(g\circ f)=\mathrm{Jac}_{f(a)}g\cdot\mathrm{Jac}_af$$` },
          { id: 'av-dif-f04', recto: r`Lien entre différentielle, dérivées directionnelles et matrice jacobienne.`,
            verso: r`Si $f$ est différentiable en $a$ : $\partial_vf(a)=D_af(v)$ pour tout $v$, et
$$\mathrm{Jac}_af=\left(\frac{\partial f_j}{\partial x_i}(a)\right)_{j\text{ ligne},\ i\text{ colonne}}\in M_{m\times n}$$` },
          { id: 'av-dif-f05', recto: r`Trois contre-exemples : dérivées partielles ou directionnelles sans différentiabilité en $(0,0)$.`,
            verso: r`- $\frac{xy}{x^2+y^2}$ : partielles nulles, mais $f(x,x)=\frac12$, donc non continue.
- $\frac{x^3}{x^2+y^2}$ : continue, toutes les dérivées directionnelles existent, mais $v\mapsto\partial_vf$ n'est pas linéaire.
- $\frac{x^2y}{x^4+y^2}$ : toutes les directionnelles existent, mais $h\equiv\frac12$ sur $y=x^2$ : non continue.` },
          { id: 'av-dif-f06', recto: r`Gradient : définition, et deux interprétations géométriques.`,
            verso: r`$D_af(v)=\langle\nabla f(a),v\rangle$, avec $\nabla f=(\partial_1f,\dots,\partial_nf)$.
- Direction de plus forte croissance, et $\|\nabla f\|$ est la pente maximale (Cauchy–Schwarz).
- Orthogonal aux lignes de niveau : $\langle\nabla f(a),\gamma'(0)\rangle=0$ pour toute courbe $\gamma$ tracée dans $\{f=f(a)\}$.` },
          { id: 'av-dif-f07', recto: r`Inégalité des accroissements finis en plusieurs variables.`,
            verso: r`$f$ différentiable, $[a,b]\subset U$ :
$$\|f(b)-f(a)\|\le\Big(\sup_{c\in[a,b]}\|D_cf\|_{op}\Big)\|b-a\|$$
Conséquence : si $Df=0$ sur un ouvert **connexe**, $f$ est constante.` },
          { id: 'av-dif-f08', recto: r`Critère de différentiabilité par les dérivées partielles (théorème 2.29).`,
            verso: r`Si les $\partial_if$ existent au voisinage de $a$ et sont **continues en $a$**, alors $f$ est différentiable en $a$.
Conséquence pratique : $f$ est $C^1$ ⇔ ses dérivées partielles existent et sont continues.` },
          { id: 'av-dif-f09', recto: r`Classer : (i) partielles en $a$, (ii) différentiable en $a$, (iii) $C^1$ près de $a$. Contre-exemples ?`,
            verso: r`(iii) ⇒ (ii) ⇒ (i), et aucune réciproque n'est vraie.
- (i) ⇏ (ii) : $\frac{xy}{x^2+y^2}$ ou $\frac{x^3}{x^2+y^2}$.
- (ii) ⇏ (iii) : $f(t)=t^2\sin(1/t)$, $f(0)=0$, différentiable mais $f'$ non continue en $0$.` },
          { id: 'av-dif-f10', recto: r`Énoncer le lemme de Schwarz et donner un contre-exemple si l'hypothèse manque.`,
            verso: r`$f$ de classe $C^2$ ⇒ $\partial_i\partial_jf=\partial_j\partial_if$.
Contre-exemple : $f=xy\frac{x^2-y^2}{x^2+y^2}$ est $C^1$ mais pas $C^2$, et $\partial_1\partial_2f(0,0)\ne\partial_2\partial_1f(0,0)$.` },
          { id: 'av-dif-f11', recto: r`Formule de Taylor–Young à l'ordre 2 ($f$ de classe $C^2$).`,
            verso: r`$$f(a+v)=f(a)+\langle\nabla f(a),v\rangle+\tfrac12\langle\mathrm{Hess}_af\cdot v,v\rangle+o(\|v\|^2)$$
avec $\mathrm{Hess}_af=(\partial_i\partial_jf(a))$ symétrique par Schwarz.` },
          { id: 'av-dif-f12', recto: r`Extrema locaux d'une fonction $C^2$ : condition nécessaire et conditions suffisantes.`,
            verso: r`- Extremum local ⇒ $\nabla f(a)=0$ (point critique).
- Point critique et Hessienne définie positive ⇒ minimum local strict ; définie négative ⇒ maximum local strict.
- Valeurs propres de signes opposés ⇒ point selle.` },
          { id: 'av-dif-f13', recto: r`Énoncer le théorème d'inversion locale. Pourquoi est-il seulement local ?`,
            verso: r`$f:U\to\mathbb R^n$ de classe $C^k$ ($k\ge1$), $D_af$ inversible. Il existe des ouverts $V\ni a$ et $W\ni f(a)$ tels que $f|_V:V\to W$ soit un $C^k$-difféomorphisme.
Local seulement : $(x,y)\mapsto(e^x\cos y,e^x\sin y)$ a une différentielle partout inversible mais n'est pas injective.` },
          { id: 'av-dif-f14', recto: r`Idée de la preuve de l'inversion locale.`,
            verso: r`On se ramène à $a=0$, $f(0)=0$, $D_0f=\mathrm{id}$. Avec $g=\mathrm{id}-f$, qui est $\frac12$-lipschitzienne près de $0$, on applique Banach à $\Psi(h)=\mathrm{id}+g\circ h$ dans $C(\bar B(0,r),\bar B(0,2r))$. Le point fixe vérifie $f\circ h=\mathrm{id}$.` },
          { id: 'av-dif-f15', recto: r`Énoncer le théorème des fonctions implicites (avec la formule de $D\varphi$).`,
            verso: r`$f:\mathbb R^n\times\mathbb R^m\to\mathbb R^m$ de classe $C^k$, $f(a,b)=0$, $\partial_yf(a,b)$ inversible. Il existe des voisinages $A\ni a$, $B\ni b$ et $\varphi:A\to B$ de classe $C^k$ tels que $f(x,y)=0\iff y=\varphi(x)$, et
$$D_a\varphi=-(\partial_yf(a,b))^{-1}\circ\partial_xf(a,b)$$` },
          { id: 'av-dif-f16', recto: r`Jacobiens des coordonnées polaires et sphériques.`,
            verso: r`- Polaires $(r\cos\theta,r\sin\theta)$ : $\det\mathrm{Jac}=r$.
- Sphériques $(r\sin\theta\cos\varphi,\ r\sin\theta\sin\varphi,\ r\cos\theta)$ : $\det\mathrm{Jac}=r^2\sin\theta$.` },
          { id: 'av-dif-f17', recto: r`Définitions de $\mathrm{div}\,X$, $\mathrm{rot}\,X$ et $\Delta f$ pour $X=(P,Q,R)$.`,
            verso: r`$\mathrm{div}\,X=\partial_xP+\partial_yQ+\partial_zR$
$\mathrm{rot}\,X=(\partial_yR-\partial_zQ,\ \partial_zP-\partial_xR,\ \partial_xQ-\partial_yP)=\nabla\wedge X$
$\Delta f=\mathrm{div}(\nabla f)=\partial_x^2f+\partial_y^2f+\partial_z^2f$` },
          { id: 'av-dif-f18', recto: r`Formules de produit : $\mathrm{div}(fX)$, $\mathrm{rot}(fX)$, $\mathrm{div}(X\wedge Y)$.`,
            verso: r`- $\mathrm{div}(fX)=f\,\mathrm{div}\,X+\langle\nabla f,X\rangle$
- $\mathrm{rot}(fX)=f\,\mathrm{rot}\,X+\nabla f\wedge X$
- $\mathrm{div}(X\wedge Y)=\langle\mathrm{rot}\,X,Y\rangle-\langle X,\mathrm{rot}\,Y\rangle$` },
          { id: 'av-dif-f19', recto: r`Deux identités fondamentales entre $\nabla$, $\mathrm{rot}$ et $\mathrm{div}$. Pourquoi sont-elles vraies ?`,
            verso: r`$$\mathrm{rot}(\nabla f)=0,\qquad\mathrm{div}(\mathrm{rot}\,X)=0$$
pour $f$ et $X$ de classe $C^2$ : conséquence directe du lemme de Schwarz (les termes s'annulent deux à deux).` },
          { id: 'av-dif-f20', recto: r`Irrotationnel ⇒ conservatif ? Donner un contre-exemple.`,
            verso: r`Vrai sur un ouvert étoilé, faux en général. Sur $\mathbb R^3$ privé de l'axe $Oz$ :
$X=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2},0\right)$ vérifie $\mathrm{rot}\,X=0$, mais sa circulation autour de l'axe vaut $2\pi\ne0$.` },
          { id: 'av-dif-f21', recto: r`Identité d'Euler pour une fonction homogène de degré $d$.`,
            verso: r`Si $f(\lambda a)=\lambda^df(a)$ pour tout $\lambda>0$ (et $f$ de classe $C^1$), alors
$$\langle\nabla f(a),a\rangle=d\,f(a)$$
On dérive en $\lambda=1$.` },
        ],
        qcm: [
          { id: 'av-dif-q01', question: r`$g(x,y)=\dfrac{x^3}{x^2+y^2}$, $g(0,0)=0$. En $(0,0)$, $g$ est :`,
            choix: [r`Continue, avec toutes les dérivées directionnelles, mais non différentiable`, r`Différentiable`, r`Non continue`, r`Sans dérivées partielles`], bonne: 0,
            explication: r`$|g|\le|x|$ donne la continuité, et $\partial_{(\alpha,\beta)}g(0)=\frac{\alpha^3}{\alpha^2+\beta^2}$. Cette application n'est pas linéaire, alors qu'elle devrait valoir $D_0g$.` },
          { id: 'av-dif-q02', question: r`$f(x)=\|x\|^2$ sur $\mathbb R^n$. Que vaut $D_af(v)$ ?`,
            choix: [r`$2\langle a,v\rangle$`, r`$\langle a,v\rangle$`, r`$2\|a\|\,\|v\|$`, r`$\|v\|^2$`], bonne: 0,
            explication: r`$\|a+v\|^2=\|a\|^2+2\langle a,v\rangle+\|v\|^2$, et $\|v\|^2=o(\|v\|)$.` },
          { id: 'av-dif-q03', question: r`Pour les coordonnées polaires $\Phi(r,\theta)=(r\cos\theta,r\sin\theta)$, que vaut $\det\mathrm{Jac}\,\Phi$ ?`,
            choix: [r`$r$`, r`$1$`, r`$r^2$`, r`$\cos\theta$`], bonne: 0,
            explication: r`$\det\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix}=r\cos^2\theta+r\sin^2\theta=r$.` },
          { id: 'av-dif-q04', question: r`$X=(-y,x,0)$. Que vaut $\mathrm{rot}\,X$ ?`,
            choix: [r`$(0,0,2)$`, r`$(0,0,0)$`, r`$(0,0,1)$`, r`$(1,1,0)$`], bonne: 0,
            explication: r`Troisième composante : $\partial_xQ-\partial_yP=1-(-1)=2$. Les deux autres sont nulles.` },
          { id: 'av-dif-q05', question: r`$f(x,y)=xy\dfrac{x^2-y^2}{x^2+y^2}$ a des dérivées croisées différentes en $0$. Pourquoi Schwarz n'est-il pas contredit ?`,
            choix: [r`$f$ est $C^1$ mais pas $C^2$`, r`$f$ n'est pas continue`, r`$f$ n'est pas différentiable`, r`Schwarz ne vaut qu'en dimension $3$`], bonne: 0,
            explication: r`Schwarz exige des dérivées secondes continues ($C^2$). Ici $\partial_1\partial_2f$ n'est pas continue en $0$.` },
          { id: 'av-dif-q06', question: r`Sur le cercle $x^2+y^2=1$ près de $(0,1)$, on écrit $y=\varphi(x)$. Que vaut $\varphi'(0)$ ?`,
            choix: [r`$0$`, r`$1$`, r`$-1$`, r`Non défini`], bonne: 0,
            explication: r`$\varphi'=-\frac{\partial_xf}{\partial_yf}=-\frac{2x}{2y}$, qui vaut $0$ en $(0,1)$. La tangente est horizontale.` },
          { id: 'av-dif-q07', question: r`Quelle implication est vraie ?`,
            choix: [r`$C^1$ au voisinage de $a$ ⇒ différentiable en $a$`, r`Dérivées partielles en $a$ ⇒ différentiable en $a$`, r`Différentiable en $a$ ⇒ $C^1$ au voisinage de $a$`, r`Dérivées directionnelles en $a$ ⇒ continue en $a$`], bonne: 0,
            explication: r`C'est le théorème 2.29. Contre-exemples pour les autres : $\frac{xy}{x^2+y^2}$, $t^2\sin\frac1t$ et $\frac{x^2y}{x^4+y^2}$.` },
          { id: 'av-dif-q08', question: r`Pour $X(x,y,z)=(x,y,z)$, que vaut $\mathrm{div}\,X$ ?`,
            choix: [r`$3$`, r`$1$`, r`$0$`, r`$x+y+z$`], bonne: 0,
            explication: r`$\partial_xx+\partial_yy+\partial_zz=3$.` },
          { id: 'av-dif-q09', question: r`$f$ est $C^2$, $\nabla f(a)=0$ et $\mathrm{Hess}_af=\begin{pmatrix}2&0\\0&-3\end{pmatrix}$. Le point $a$ est :`,
            choix: [r`Un point selle`, r`Un minimum local`, r`Un maximum local`, r`On ne peut pas conclure`], bonne: 0,
            explication: r`Les valeurs propres $2$ et $-3$ sont de signes opposés : $f$ croît dans une direction et décroît dans l'autre.` },
          { id: 'av-dif-q10', question: r`$f(x,y)=(x^2-y^2,2xy)$. En quels points $f$ est-elle un difféomorphisme local ?`,
            choix: [r`Partout sauf en $(0,0)$`, r`Partout`, r`Nulle part`, r`Seulement sur les axes`], bonne: 0,
            explication: r`$\det\mathrm{Jac}=\det\begin{pmatrix}2x&-2y\\2y&2x\end{pmatrix}=4(x^2+y^2)$, non nul hors de l'origine. C'est $z\mapsto z^2$, qui n'est pas injective ($f(-p)=f(p)$).` },
          { id: 'av-dif-q11', question: r`Quelle est la définition de « $f$ différentiable en $a$ » ?`,
            choix: [r`Il existe $L$ linéaire telle que $f(a+v)=f(a)+L(v)+o(\|v\|)$`, r`Toutes les dérivées partielles de $f$ existent en $a$`, r`$f$ admet une dérivée en $a$ dans toutes les directions`, r`Il existe $L$ linéaire telle que $f(a+v)=f(a)+L(v)+O(\|v\|)$`], bonne: 0,
            explication: r`L'erreur doit être **négligeable** devant $\|v\|$ : un $O(\|v\|)$ ne suffit pas (toute fonction lipschitzienne le vérifie). Les deux autres conditions sont strictement plus faibles.` },
          { id: 'av-dif-q12', question: r`Si $f$ est différentiable en $a$, alors nécessairement :`,
            choix: [r`$f$ est continue en $a$`, r`$f$ est $C^1$ au voisinage de $a$`, r`$Df$ est continue en $a$`, r`$f$ est de classe $C^2$`], bonne: 0,
            explication: r`$f(b)=f(a)+D_af(b-a)+o(\|b-a\|)\to f(a)$. En revanche, $t^2\sin(1/t)$ est différentiable sans être $C^1$.` },
          { id: 'av-dif-q13', question: r`Pour $f:\mathbb R^n\to\mathbb R^m$, la matrice jacobienne est de taille :`,
            choix: [r`$m\times n$`, r`$n\times m$`, r`$n\times n$`, r`$m\times m$`], bonne: 0,
            explication: r`$m$ lignes (une par coordonnée $f_j$) et $n$ colonnes (une par variable $x_i$). Le coefficient $(j,i)$ vaut $\frac{\partial f_j}{\partial x_i}$.` },
          { id: 'av-dif-q14', question: r`Comment est définie la dérivée de $f$ en $a$ dans la direction $v$ ?`,
            choix: [r`$\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}$`, r`$\lim_{t\to0}\frac{f(a+v)-f(a)}{t}$`, r`$\lim_{t\to0}\frac{f(a+tv)-f(a)}{\|v\|}$`, r`$\langle\nabla f(a),a\rangle$`], bonne: 0,
            explication: r`On dérive la fonction d'une variable $t\mapsto f(a+tv)$ en $t=0$. Si $f$ est différentiable, cela vaut $D_af(v)=\langle\nabla f(a),v\rangle$.` },
          { id: 'av-dif-q15', question: r`Quelle est la norme d'opérateur d'une application linéaire $L$ ?`,
            choix: [r`$\|L\|_{op}=\sup_{\|v\|\le1}\|L(v)\|$`, r`$\|L\|_{op}=\inf_{\|v\|\le1}\|L(v)\|$`, r`$\|L\|_{op}=\sup_{v\in\mathbb R^n}\|L(v)\|$`, r`$\|L\|_{op}=\|L(e_1)\|$`], bonne: 0,
            explication: r`On se limite à la boule unité, sinon le sup vaut $+\infty$ dès que $L\ne0$. Elle vérifie $\|L(v)\|\le\|L\|_{op}\|v\|$.` },
          { id: 'av-dif-q16', question: r`$f:U\to\mathbb R^m$ est de classe $C^1$ si et seulement si :`,
            choix: [r`Ses dérivées partielles existent et sont continues sur $U$`, r`$f$ est différentiable sur $U$`, r`Ses dérivées partielles existent sur $U$`, r`$f$ est continue sur $U$`], bonne: 0,
            explication: r`Par définition, $Df$ existe et est continue. Le théorème 2.29 montre que cela équivaut à des dérivées partielles continues, ce qui est le critère pratique.` },
          { id: 'av-dif-q17', question: r`Le gradient de $f:U\to\mathbb R$ en $a$ est l'unique vecteur tel que :`,
            choix: [r`$D_af(v)=\langle\nabla f(a),v\rangle$ pour tout $v$`, r`$f(a)=\langle\nabla f(a),a\rangle$`, r`$\|\nabla f(a)\|=1$`, r`$D_af(\nabla f(a))=0$`], bonne: 0,
            explication: r`$D_af$ est une forme linéaire, représentée par un vecteur via le produit scalaire. Ses coordonnées sont les $\partial_if(a)$.` },
          { id: 'av-dif-q18', question: r`Pour $f$ de classe $C^2$, la matrice hessienne est :`,
            choix: [r`Symétrique`, r`Antisymétrique`, r`Diagonale`, r`Toujours inversible`], bonne: 0,
            explication: r`$(\mathrm{Hess}_af)_{ij}=\partial_i\partial_jf(a)=\partial_j\partial_if(a)$ par le lemme de Schwarz.` },
          { id: 'av-dif-q19', question: r`$a$ est un point critique de $f:U\to\mathbb R$ si :`,
            choix: [r`$\nabla f(a)=0$`, r`$f(a)=0$`, r`$\mathrm{Hess}_af=0$`, r`$\det\mathrm{Hess}_af=0$`], bonne: 0,
            explication: r`Tout extremum local d'une fonction différentiable est un point critique. La réciproque est fausse : un point selle est critique.` },
          { id: 'av-dif-q20', question: r`Qu'est-ce qu'un $C^k$-difféomorphisme $f:U\to V$ ?`,
            choix: [r`Une bijection de classe $C^k$ dont la réciproque est aussi $C^k$`, r`Une bijection de classe $C^k$`, r`Une bijection continue de réciproque continue`, r`Une application $C^k$ de jacobien égal à $1$`], bonne: 0,
            explication: r`La réciproque doit être $C^k$ : $t\mapsto t^3$ est une bijection $C^\infty$ de $\mathbb R$, mais $t^{1/3}$ n'est pas dérivable en $0$. La troisième proposition définit un homéomorphisme.` },
          { id: 'av-dif-q21', question: r`Hypothèse clé du théorème des fonctions implicites pour $f(x,y)=0$ en $(a,b)$ :`,
            choix: [r`$\partial_yf(a,b)$ inversible`, r`$\partial_xf(a,b)$ inversible`, r`$D_{(a,b)}f=0$`, r`$f$ linéaire`], bonne: 0,
            explication: r`On veut exprimer $y$ en fonction de $x$ : c'est la dérivée par rapport à $y$ qui doit être inversible. Alors $D_a\varphi=-(\partial_yf)^{-1}\partial_xf$.` },
          { id: 'av-dif-q22', question: r`Le rotationnel transforme :`,
            choix: [r`Un champ de vecteurs en champ de vecteurs`, r`Une fonction en champ de vecteurs`, r`Un champ de vecteurs en fonction`, r`Une fonction en fonction`], bonne: 0,
            explication: r`$\nabla$ : fonction → champ ; $\mathrm{rot}$ : champ → champ ; $\mathrm{div}$ : champ → fonction ; $\Delta$ : fonction → fonction.` },
          { id: 'av-dif-q23', question: r`Un champ $X$ est dit conservatif (ou à potentiel scalaire) si :`,
            choix: [r`Il existe $f$ telle que $X=\nabla f$`, r`$\mathrm{rot}\,X=0$`, r`$\mathrm{div}\,X=0$`, r`Il existe $Y$ tel que $X=\mathrm{rot}\,Y$`], bonne: 0,
            explication: r`$\mathrm{rot}\,X=0$ définit « irrotationnel », $\mathrm{div}\,X=0$ « incompressible », et $X=\mathrm{rot}\,Y$ « dérive d'un potentiel vecteur ». Conservatif ⇒ irrotationnel, mais pas l'inverse en général.` },
          { id: 'av-dif-q24', question: r`Comment est défini le laplacien de $f$ ?`,
            choix: [r`$\Delta f=\mathrm{div}(\nabla f)$`, r`$\Delta f=\nabla(\mathrm{div}\,f)$`, r`$\Delta f=\mathrm{rot}(\nabla f)$`, r`$\Delta f=\|\nabla f\|^2$`], bonne: 0,
            explication: r`$\Delta f=\partial_x^2f+\partial_y^2f+\partial_z^2f$. Attention, $\mathrm{rot}(\nabla f)$ est toujours nul.` },
          { id: 'av-dif-q25', question: r`Que vaut $\nabla(fg)$ ?`,
            choix: [r`$f\,\nabla g+g\,\nabla f$`, r`$\nabla f\cdot\nabla g$`, r`$f\,\nabla g-g\,\nabla f$`, r`$\nabla f+\nabla g$`], bonne: 0,
            explication: r`La règle de Leibniz, appliquée à chaque dérivée partielle : $\partial_i(fg)=f\,\partial_ig+g\,\partial_if$.` },
          { id: 'av-dif-q26', question: r`Sur quel type d'ouvert un champ irrotationnel est-il toujours un gradient ?`,
            choix: [r`Un ouvert étoilé`, r`N'importe quel ouvert`, r`N'importe quel ouvert connexe`, r`Aucun`], bonne: 0,
            explication: r`Lemme de Poincaré. Un ouvert connexe ne suffit pas : $\mathbb R^3$ privé de l'axe $Oz$ est connexe, et $\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2},0\right)$ y est irrotationnel sans être un gradient.` },
          { id: 'av-dif-q27', question: r`$f=(f_1,\dots,f_m)$ est différentiable en $a$ si et seulement si :`,
            choix: [r`Chaque coordonnée $f_j$ est différentiable en $a$`, r`Une des coordonnées est différentiable en $a$`, r`$f_1$ est différentiable en $a$`, r`$\sum_jf_j$ est différentiable en $a$`], bonne: 0,
            explication: r`Proposition 2.11 : $D_af$ est l'application dont la $j$-ème coordonnée est $D_af_j$.` },
          { id: 'av-dif-q28', question: r`Le gradient de $f$ en $a$ (non nul) est :`,
            choix: [r`Orthogonal à la ligne de niveau $\{f=f(a)\}$`, r`Tangent à la ligne de niveau`, r`Toujours de norme $1$`, r`Dirigé dans la direction de plus forte décroissance`], bonne: 0,
            explication: r`Si $\gamma$ est tracée dans la ligne de niveau, $f\circ\gamma$ est constante, donc $\langle\nabla f,\gamma'\rangle=0$. Le gradient pointe vers la plus forte **croissance**.` },
        ],
      },
      /* ------------------------------------------------------------------ */
      {
        id: 'av-int',
        titre: '3. Intégrales et théorèmes de Stokes',
        resume: r`
## Intégrales multiples
- Riemann sur un pavé (sommes de Darboux). Continue ⇒ intégrable.
- **Fubini** : $\int_{P\times Q}f=\int_P\left(\int_Qf\,dy\right)dx$, dans les deux ordres.
- Domaine élémentaire : $\int_Df=\int_a^b\int_{\varphi_1(x)}^{\varphi_2(x)}f\,dy\,dx$.
- **Changement de variables** : $\int_{\Phi(D)}f=\int_Df\circ\Phi\,|\det\mathrm{Jac}\,\Phi|$. Polaires : $r\,dr\,d\theta$ ; sphériques : $r^2\sin\theta$.
- Résultats : $\mathrm{Vol}(B_R)=\frac43\pi R^3$ et $\int_{\mathbb R}e^{-t^2}dt=\sqrt\pi$.

## Courbes
- Longueur $\int_a^b\|\gamma'\|$ ; $\int_\gamma f\,ds=\int f(\gamma)\|\gamma'\|$ ; circulation $\int_\gamma\langle X,d\ell\rangle=\int\langle X(\gamma),\gamma'\rangle$.
- La longueur est invariante par tout reparamétrage ; la circulation change de signe si l'on inverse le sens.
- **Champ de gradient** (ouvert connexe) : $X=\nabla f$ ⇔ circulation nulle sur tout lacet ⇔ circulation indépendante du chemin. Alors $\int_\gamma\nabla f\cdot d\ell=f(\gamma(b))-f(\gamma(a))$.
- **Fermé** : $\partial_iP_j=\partial_jP_i$ ($\mathrm{rot}\,X=0$ en 3D). **Poincaré** : fermé sur un étoilé ⇒ gradient, avec $f(b)=\int_0^1\langle X(a+t(b-a)),b-a\rangle dt$.
- Contre-exemple sur $\mathbb R^2\setminus\{0\}$ : $\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right)$, de circulation $2\pi$ sur le cercle.

## Surfaces
- Nappe régulière : $\partial_u\sigma\wedge\partial_v\sigma\ne0$ ; normale $\nu=\frac{\partial_u\sigma\wedge\partial_v\sigma}{\|\cdot\|}$.
- $\mathrm{Aire}=\iint\|\partial_u\sigma\wedge\partial_v\sigma\|$ ; flux $=\iint\langle X(\sigma),\partial_u\sigma\wedge\partial_v\sigma\rangle$.
- Graphe : $dS=\sqrt{1+\|\nabla h\|^2}\,dx\,dy$. Sphère : $\|\partial_\theta\sigma\wedge\partial_\varphi\sigma\|=R^2\sin\theta$, aire $4\pi R^2$.
- Orientable : il existe un découpage cohérent, ce qui donne une normale continue. La sphère l'est, le ruban de Möbius non.
- Bord : réunion des arcs libres ; les coutures sont parcourues en sens opposés (règle du bonhomme d'Ampère).

## Les trois théorèmes
- **Green–Riemann** : $\oint_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)$. Aire $=\frac12\oint(x\,dy-y\,dx)$ ; ellipse : $\pi\alpha\beta$.
- **Stokes** : $\oint_{\partial S}\langle X,d\ell\rangle=\iint_S\langle\mathrm{rot}\,X,n\rangle dS$. Surface fermée ⇒ flux de $\mathrm{rot}$ nul. Même bord ⇒ même flux.
- **Divergence** : $\iiint_\Omega\mathrm{div}\,X=\iint_{\partial\Omega}\langle X,n\rangle dS$, avec $n$ sortante. $\iint\langle x,n\rangle=3\,\mathrm{Vol}$.
- Interprétations : $\mathrm{div}$ = flux sortant par unité de volume ; $\mathrm{rot}$ = circulation par unité d'aire.
- **Green** : $\iiint(f\Delta g+\langle\nabla f,\nabla g\rangle)=\iint f\,\partial_ng$.
- Coulomb : $\mathrm{div}\,Y=0$ mais flux $4\pi$ à travers toute sphère autour de $0$. Les trois théorèmes sont des cas de $\int_Md\omega=\int_{\partial M}\omega$.
`,
        fiches: [
          { id: 'av-int-f01', recto: r`Énoncer le théorème de Fubini (fonctions continues sur des pavés).`,
            verso: r`$P\subset\mathbb R^p$, $Q\subset\mathbb R^q$ pavés compacts, $f$ continue sur $P\times Q$ :
$$\int_{P\times Q}f=\int_P\Big(\int_Qf(x,y)\,dy\Big)dx=\int_Q\Big(\int_Pf(x,y)\,dx\Big)dy$$` },
          { id: 'av-int-f02', recto: r`Formule du changement de variables. Interprétation du jacobien ?`,
            verso: r`$\Phi:U\to V$ $C^1$-difféomorphisme :
$$\int_{\Phi(D)}f(y)\,dy=\int_Df(\Phi(x))\,|\det\mathrm{Jac}_x\Phi|\,dx$$
$|\det\mathrm{Jac}\,\Phi|$ mesure la dilatation infinitésimale des volumes.` },
          { id: 'av-int-f03', recto: r`Calculer $\int_{\mathbb R}e^{-t^2}dt$ : méthode.`,
            verso: r`$\left(\int e^{-t^2}\right)^2=\iint_{\mathbb R^2}e^{-(x^2+y^2)}=\int_0^{2\pi}\!\!\int_0^\infty e^{-r^2}r\,dr\,d\theta=\pi$, donc l'intégrale vaut $\sqrt\pi$.` },
          { id: 'av-int-f04', recto: r`Longueur, intégrale curviligne $\int_\gamma f\,ds$ et circulation : définitions et comportement par reparamétrage.`,
            verso: r`$\mathrm{Long}=\int_a^b\|\gamma'\|$, $\ \int_\gamma f\,ds=\int_a^bf(\gamma)\|\gamma'\|$, $\ \int_\gamma\langle X,d\ell\rangle=\int_a^b\langle X(\gamma(t)),\gamma'(t)\rangle dt$.
Les deux premières sont invariantes par tout reparamétrage ; la circulation change de signe si le sens est inversé.` },
          { id: 'av-int-f05', recto: r`Caractérisations d'un champ de gradient sur un ouvert connexe (théorème 3.17).`,
            verso: r`Équivalent :
1. $X=\nabla f$ avec $f$ de classe $C^1$ ;
2. $\oint_\gamma\langle X,d\ell\rangle=0$ pour tout lacet ;
3. la circulation ne dépend que des extrémités.
Dans ce cas, $\int_\gamma\langle\nabla f,d\ell\rangle=f(\gamma(b))-f(\gamma(a))$, et $f$ est unique à une constante près.` },
          { id: 'av-int-f06', recto: r`Champ fermé, et lemme de Poincaré (avec la formule du potentiel).`,
            verso: r`Fermé : $\partial_iP_j=\partial_jP_i$ (en 3D : $\mathrm{rot}\,X=0$).
Sur un ouvert **étoilé** par rapport à $a$, un champ fermé est un gradient :
$$f(b)=\int_0^1\langle X(a+t(b-a)),\,b-a\rangle\,dt$$` },
          { id: 'av-int-f07', recto: r`Exemple d'un champ fermé qui n'est pas un gradient. Pourquoi ?`,
            verso: r`$X=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right)$ sur $\mathbb R^2\setminus\{0\}$ (non étoilé).
Sa circulation sur le cercle unité vaut $\int_0^{2\pi}(\sin^2t+\cos^2t)\,dt=2\pi\ne0$. Localement, c'est le gradient de l'argument $\theta$ (monodromie).` },
          { id: 'av-int-f08', recto: r`Nappe paramétrée régulière : définition, normale, aire, flux.`,
            verso: r`$\sigma:\Delta\to\mathbb R^3$ de classe $C^1$ avec $\partial_u\sigma\wedge\partial_v\sigma\ne0$. Normale $\nu=\frac{\partial_u\sigma\wedge\partial_v\sigma}{\|\partial_u\sigma\wedge\partial_v\sigma\|}$.
$\mathrm{Aire}=\iint_\Delta\|\partial_u\sigma\wedge\partial_v\sigma\|$, $\ $ flux $=\iint_\Delta\langle X(\sigma),\partial_u\sigma\wedge\partial_v\sigma\rangle\,du\,dv$.` },
          { id: 'av-int-f09', recto: r`Élément d'aire d'un graphe $z=h(x,y)$ et de la sphère de rayon $R$.`,
            verso: r`- Graphe : $\partial_x\sigma\wedge\partial_y\sigma=(-\partial_xh,-\partial_yh,1)$, donc $dS=\sqrt{1+\|\nabla h\|^2}\,dx\,dy$.
- Sphère $(\theta,\varphi)$ : $dS=R^2\sin\theta\,d\theta\,d\varphi$, et l'aire vaut $4\pi R^2$.` },
          { id: 'av-int-f10', recto: r`Surface orientable : définition. Exemple non orientable ?`,
            verso: r`$S$ est orientable s'il existe un découpage **cohérent** : là où deux morceaux ont la même image, leurs normales coïncident. On obtient alors une normale unitaire continue $n$ sur $S$.
Contre-exemple : le ruban de Möbius, où $\nu(0,0)=-\nu(2\pi,0)$.` },
          { id: 'av-int-f11', recto: r`Énoncer le théorème de Green–Riemann.`,
            verso: r`$D\subset\mathbb R^2$ compact de bord $C^1$ par morceaux orienté dans le sens direct, $P,Q$ de classe $C^1$ :
$$\oint_{\partial D}P\,dx+Q\,dy=\iint_D\Big(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\Big)dx\,dy$$` },
          { id: 'av-int-f12', recto: r`Aire d'un domaine plan par une intégrale de bord.`,
            verso: r`$$\mathrm{Aire}(D)=\oint_{\partial D}x\,dy=-\oint_{\partial D}y\,dx=\frac12\oint_{\partial D}(x\,dy-y\,dx)$$
Exemple : l'ellipse $(\alpha\cos t,\beta\sin t)$ a pour aire $\pi\alpha\beta$.` },
          { id: 'av-int-f13', recto: r`Énoncer le théorème de Stokes.`,
            verso: r`$S$ surface compacte orientée par $n$ (découpage cohérent et adapté), de bord orienté $\partial S$, et $X$ de classe $C^1$ :
$$\oint_{\partial S}\langle X,d\ell\rangle=\iint_S\langle\mathrm{rot}\,X,n\rangle\,dS$$` },
          { id: 'av-int-f14', recto: r`Deux conséquences du théorème de Stokes.`,
            verso: r`- Surface fermée (sphère, tore) : $\iint_S\langle\mathrm{rot}\,X,n\rangle dS=0$.
- Deux surfaces de même bord orienté ont le même flux de $\mathrm{rot}\,X$ : on peut choisir la surface la plus commode.` },
          { id: 'av-int-f15', recto: r`Énoncer le théorème de la divergence (Gauss–Ostrogradski).`,
            verso: r`$\Omega\subset\mathbb R^3$ compact, $\partial\Omega$ surface fermée orientée par la normale **sortante** $n$, $X$ de classe $C^1$ :
$$\iiint_\Omega\mathrm{div}\,X\,dV=\iint_{\partial\Omega}\langle X,n\rangle\,dS$$` },
          { id: 'av-int-f16', recto: r`Interprétation physique de la divergence et du rotationnel.`,
            verso: r`- $\mathrm{div}\,X(a)=\lim_{r\to0}\frac{1}{\mathrm{Vol}(B(a,r))}\iint_{\partial B}\langle X,n\rangle$ : densité de sources (flux sortant par unité de volume).
- $\langle\mathrm{rot}\,X(a),n\rangle$ = limite de la circulation sur un petit cercle orthogonal à $n$, divisée par $\pi r^2$ : densité de circulation.` },
          { id: 'av-int-f17', recto: r`Formules de Green (identités intégrales avec $\Delta$).`,
            verso: r`Avec $\partial_ng=\langle\nabla g,n\rangle$ :
$$\iiint_\Omega(f\Delta g+\langle\nabla f,\nabla g\rangle)=\iint_{\partial\Omega}f\,\partial_ng$$
$$\iiint_\Omega(f\Delta g-g\Delta f)=\iint_{\partial\Omega}(f\,\partial_ng-g\,\partial_nf)$$
On applique la divergence à $f\nabla g$.` },
          { id: 'av-int-f18', recto: r`Le champ coulombien $Y=\dfrac{x}{\|x\|^3}$ : divergence, flux, conséquence.`,
            verso: r`$\mathrm{div}\,Y=0$ sur $\mathbb R^3\setminus\{0\}$, mais son flux à travers toute surface fermée entourant $0$ vaut $4\pi$. Pas de contradiction : $Y$ n'est pas défini en $0$.
Conséquence : $Y$ n'est le rotationnel d'aucun champ sur $\mathbb R^3\setminus\{0\}$.` },
          { id: 'av-int-f19', recto: r`Quel énoncé unifie Green, Stokes et la divergence ?`,
            verso: r`$$\int_Md\omega=\int_{\partial M}\omega$$
Ici $d$ est la différentielle extérieure, qui se lit $\nabla$, $\mathrm{rot}$ ou $\mathrm{div}$ selon le degré. La relation $d\circ d=0$ contient $\mathrm{rot}\,\nabla=0$ et $\mathrm{div}\,\mathrm{rot}=0$.` },
        ],
        qcm: [
          { id: 'av-int-q01', question: r`Aire délimitée par la cardioïde $r=1+\cos\theta$ ?`,
            choix: [r`$\frac{3\pi}{2}$`, r`$2\pi$`, r`$\pi$`, r`$3\pi$`], bonne: 0,
            explication: r`$\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta=\frac12(2\pi+0+\pi)=\frac{3\pi}2$.` },
          { id: 'av-int-q02', question: r`Aire du domaine délimité par $xy=1$, $xy=2$, $y=x$, $y=4x$ ($x,y>0$), avec $u=xy$, $v=y/x$ ?`,
            choix: [r`$\ln2$`, r`$\ln4$`, r`$3$`, r`$\frac32$`], bonne: 0,
            explication: r`$\det\frac{\partial(u,v)}{\partial(x,y)}=\frac{2y}x=2v$, donc $dx\,dy=\frac{du\,dv}{2v}$. Aire $=\int_1^2du\int_1^4\frac{dv}{2v}=\frac{\ln4}2=\ln2$.` },
          { id: 'av-int-q03', question: r`Circulation de $\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right)$ le long d'un lacet faisant $k$ tours autour de $0$ ?`,
            choix: [r`$2k\pi$`, r`$0$`, r`$2\pi$`, r`$k\pi$`], bonne: 0,
            explication: r`Chaque tour apporte $2\pi$ (variation de l'argument). Un champ fermé sur un ouvert non étoilé peut avoir une circulation non nulle.` },
          { id: 'av-int-q04', question: r`$S$ est la sphère unité orientée vers l'extérieur et $X$ est $C^1$. Que vaut $\iint_S\langle\mathrm{rot}\,X,n\rangle dS$ ?`,
            choix: [r`$0$`, r`$4\pi$`, r`$\frac43\pi$`, r`Cela dépend de $X$`], bonne: 0,
            explication: r`La sphère est une surface fermée, sans bord : Stokes donne une circulation sur un bord vide, donc $0$. On peut aussi appliquer la divergence avec $\mathrm{div}\,\mathrm{rot}=0$.` },
          { id: 'av-int-q05', question: r`Flux de $X(x)=x$ à travers la sphère de rayon $R$ (normale sortante) ?`,
            choix: [r`$4\pi R^3$`, r`$4\pi R^2$`, r`$\frac43\pi R^3$`, r`$0$`], bonne: 0,
            explication: r`$\mathrm{div}\,X=3$, donc le flux vaut $3\cdot\frac43\pi R^3=4\pi R^3$. Directement : $\langle x,n\rangle=R$ sur la sphère, soit $R\cdot4\pi R^2$.` },
          { id: 'av-int-q06', question: r`$X=(-y,x,z)$. Flux de $\mathrm{rot}\,X$ à travers la demi-sphère supérieure unité, orientée vers le haut ?`,
            choix: [r`$2\pi$`, r`$0$`, r`$4\pi$`, r`$\pi$`], bonne: 0,
            explication: r`$\mathrm{rot}\,X=(0,0,2)$. Même bord que le disque unité : le flux vaut $2\cdot\pi=2\pi$ (Stokes, remarque 3.44).` },
          { id: 'av-int-q07', question: r`Aire de l'ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1$ par Green ?`,
            choix: [r`$\pi ab$`, r`$\pi(a+b)$`, r`$2\pi ab$`, r`$\pi\frac{a^2+b^2}{2}$`], bonne: 0,
            explication: r`$\frac12\int_0^{2\pi}(a\cos t\cdot b\cos t+b\sin t\cdot a\sin t)\,dt=\frac12\cdot2\pi ab=\pi ab$.` },
          { id: 'av-int-q08', question: r`Si l'on parcourt une courbe en sens inverse, la circulation d'un champ :`,
            choix: [r`Change de signe`, r`Ne change pas`, r`Double`, r`Devient nulle`], bonne: 0,
            explication: r`Reparamétrage décroissant : $h'<0$ fait apparaître un signe $-$. La longueur, elle, est invariante grâce à $|h'|$.` },
          { id: 'av-int-q09', question: r`Le champ coulombien $Y=x/\|x\|^3$ a une divergence nulle, mais son flux à travers la sphère vaut $4\pi$. Pourquoi ?`,
            choix: [r`$Y$ n'est pas défini en $0$, qui est dans la boule`, r`Le théorème de la divergence est faux`, r`La normale n'est pas sortante`, r`La sphère n'est pas orientable`], bonne: 0,
            explication: r`Le théorème exige $X$ de classe $C^1$ sur tout $\Omega$. Appliqué entre deux sphères, il montre que le flux vaut $4\pi$ pour toute surface entourant $0$.` },
          { id: 'av-int-q10', question: r`$X=(y,z,x)$. Circulation (en valeur absolue) le long du cercle $\{x^2+y^2+z^2=1,\ x+y+z=0\}$ ?`,
            choix: [r`$\sqrt3\,\pi$`, r`$3\pi$`, r`$0$`, r`$\pi$`], bonne: 0,
            explication: r`$\mathrm{rot}\,X=(-1,-1,-1)$, $n=\frac{(1,1,1)}{\sqrt3}$, et le disque a une aire $\pi$. Stokes : $|\langle\mathrm{rot}\,X,n\rangle|\cdot\pi=\frac3{\sqrt3}\pi=\sqrt3\pi$.` },
          { id: 'av-int-q11', question: r`Quelle surface n'est pas orientable ?`,
            choix: [r`Le ruban de Möbius`, r`La sphère`, r`Le tore`, r`Le disque`], bonne: 0,
            explication: r`Après un tour, la normale revient en son opposé : aucune normale continue n'existe.` },
          { id: 'av-int-q12', question: r`Une partie $A\subset\mathbb R^n$ est négligeable si :`,
            choix: [r`Pour tout $\varepsilon>0$, elle est recouverte par une famille finie de pavés de volume total $\le\varepsilon$`, r`Elle est finie`, r`Elle est dénombrable`, r`Elle est d'intérieur vide`], bonne: 0,
            explication: r`Une partie finie est négligeable, mais pas l'inverse (le graphe d'une fonction continue l'est aussi). $\mathbb Q\cap[0,1]$ est dénombrable et d'intérieur vide, mais tout recouvrement **fini** par des pavés a une longueur totale $\ge1$.` },
          { id: 'av-int-q13', question: r`Qu'est-ce qu'un domaine quarrable ?`,
            choix: [r`Un compact dont le bord est négligeable`, r`Un ouvert borné`, r`Un compact convexe`, r`Un pavé`], bonne: 0,
            explication: r`La fonction prolongée par $0$ est discontinue le long du bord : il faut que ce bord soit « petit » pour que l'intégrale existe.` },
          { id: 'av-int-q14', question: r`Un arc paramétré $\gamma:[a,b]\to\mathbb R^n$ de classe $C^1$ est dit régulier si :`,
            choix: [r`$\gamma'(t)\ne0$ pour tout $t$`, r`$\gamma(a)=\gamma(b)$`, r`$\|\gamma'(t)\|=1$ pour tout $t$`, r`$\gamma$ est injective`], bonne: 0,
            explication: r`$\gamma(a)=\gamma(b)$ définit un **lacet**. $\|\gamma'\|=1$ est une paramétrisation par abscisse curviligne, un cas particulier d'arc régulier.` },
          { id: 'av-int-q15', question: r`Quelle est la définition de la circulation de $X$ le long de $\gamma$ ?`,
            choix: [r`$\int_a^b\langle X(\gamma(t)),\gamma'(t)\rangle\,dt$`, r`$\int_a^bX(\gamma(t))\,\|\gamma'(t)\|\,dt$`, r`$\int_a^b\|X(\gamma(t))\|\,\|\gamma'(t)\|\,dt$`, r`$\int_a^b\langle X(\gamma(t)),\gamma(t)\rangle\,dt$`], bonne: 0,
            explication: r`On intègre la composante de $X$ le long de la vitesse. Avec $\|\gamma'\|$, on obtient une intégrale par rapport à l'abscisse curviligne $ds$.` },
          { id: 'av-int-q16', question: r`Deux arcs $\gamma$ et $\tilde\gamma=\gamma\circ h$ définissent la même courbe orientée si :`,
            choix: [r`$h$ est un $C^1$-difféomorphisme croissant`, r`$h$ est un $C^1$-difféomorphisme quelconque`, r`$h$ est continue`, r`$h$ est l'identité`], bonne: 0,
            explication: r`Un $h$ décroissant parcourt la courbe en sens inverse : la circulation change alors de signe.` },
          { id: 'av-int-q17', question: r`Un champ $X=(P_1,\dots,P_n)$ de classe $C^1$ est dit fermé si :`,
            choix: [r`$\partial_iP_j=\partial_jP_i$ pour tous $i,j$`, r`$\sum_i\partial_iP_i=0$`, r`$P_i=P_j$ pour tous $i,j$`, r`Il existe $f$ avec $X=\nabla f$`], bonne: 0,
            explication: r`En dimension $3$, c'est $\mathrm{rot}\,X=0$. La deuxième proposition est $\mathrm{div}\,X=0$. La dernière (gradient) implique « fermé », mais la réciproque demande un ouvert étoilé.` },
          { id: 'av-int-q18', question: r`Sur un ouvert connexe, $X$ continu est un champ de gradient si et seulement si :`,
            choix: [r`Sa circulation le long de tout lacet est nulle`, r`$\mathrm{rot}\,X=0$`, r`$\mathrm{div}\,X=0$`, r`$X$ est borné`], bonne: 0,
            explication: r`Théorème 3.17 : gradient ⇔ circulation nulle sur les lacets ⇔ circulation indépendante du chemin. $\mathrm{rot}\,X=0$ ne suffit que sur un ouvert étoilé.` },
          { id: 'av-int-q19', question: r`Une nappe paramétrée $\sigma:\Delta\to\mathbb R^3$ est régulière si :`,
            choix: [r`$\partial_u\sigma\wedge\partial_v\sigma\ne0$ en tout point`, r`$\langle\partial_u\sigma,\partial_v\sigma\rangle=0$ en tout point`, r`$\sigma$ est injective`, r`$\|\partial_u\sigma\|=\|\partial_v\sigma\|=1$`], bonne: 0,
            explication: r`Les deux vecteurs tangents doivent être linéairement indépendants : ils engendrent alors un plan tangent, et la normale est définie.` },
          { id: 'av-int-q20', question: r`Quelle est la formule de l'aire d'une nappe régulière $\sigma:\Delta\to\mathbb R^3$ ?`,
            choix: [r`$\iint_\Delta\|\partial_u\sigma\wedge\partial_v\sigma\|\,du\,dv$`, r`$\iint_\Delta\langle\partial_u\sigma,\partial_v\sigma\rangle\,du\,dv$`, r`$\iint_\Delta\|\partial_u\sigma\|\,\|\partial_v\sigma\|\,du\,dv$`, r`$\iint_\Delta du\,dv$`], bonne: 0,
            explication: r`Un petit carré de côté $h$ est envoyé sur un parallélogramme de côtés $h\partial_u\sigma$ et $h\partial_v\sigma$, d'aire $h^2\|\partial_u\sigma\wedge\partial_v\sigma\|$. La troisième formule n'est juste que si les vecteurs sont orthogonaux.` },
          { id: 'av-int-q21', question: r`Par changement de paramétrage de la nappe, le flux :`,
            choix: [r`Est invariant si l'orientation est préservée, change de signe sinon`, r`Est toujours invariant`, r`Change toujours de signe`, r`Change de façon imprévisible`], bonne: 0,
            explication: r`$\partial_{\tilde u}\tilde\sigma\wedge\partial_{\tilde v}\tilde\sigma=(\det\mathrm{Jac}\,\Theta)(\partial_u\sigma\wedge\partial_v\sigma)\circ\Theta$ : le signe du jacobien décide. L'aire, elle, est toujours invariante.` },
          { id: 'av-int-q22', question: r`Une surface compacte est orientable si :`,
            choix: [r`Elle admet un découpage cohérent`, r`Tous ses découpages sont cohérents`, r`Elle est sans bord`, r`Elle est l'image d'une seule nappe régulière`], bonne: 0,
            explication: r`Il **existe** un découpage cohérent. Tous ne le sont pas : il suffit d'échanger $u$ et $v$ sur un morceau pour retourner sa normale (remarque 3.28).` },
          { id: 'av-int-q23', question: r`Une surface compacte est dite fermée (sans bord) si :`,
            choix: [r`Son découpage adapté n'a aucun arc libre`, r`Elle est orientable`, r`Elle est compacte`, r`Elle n'a aucune couture`], bonne: 0,
            explication: r`Le bord est la réunion des arcs libres. S'il n'y en a pas, chaque arc est une couture recollée avec un autre (sphère, tore).` },
          { id: 'av-int-q24', question: r`Dans Green–Riemann, le bord $\partial D$ est orienté :`,
            choix: [r`Dans le sens direct (le domaine à gauche)`, r`Dans le sens horaire`, r`De façon arbitraire`, r`Par la normale sortante`], bonne: 0,
            explication: r`Parcourir le bord en sens inverse change le signe de la circulation, et la formule serait fausse.` },
          { id: 'av-int-q25', question: r`Le théorème de Stokes relie :`,
            choix: [r`La circulation de $X$ sur le bord et le flux de $\mathrm{rot}\,X$ à travers la surface`, r`Le flux de $X$ à travers le bord et l'intégrale de $\mathrm{div}\,X$`, r`La circulation de $X$ et l'intégrale de $\mathrm{div}\,X$`, r`Le flux de $X$ et l'intégrale de $\Delta X$`], bonne: 0,
            explication: r`$\oint_{\partial S}\langle X,d\ell\rangle=\iint_S\langle\mathrm{rot}\,X,n\rangle dS$. La deuxième proposition est le théorème de la divergence.` },
          { id: 'av-int-q26', question: r`Dans le théorème de la divergence, $\partial\Omega$ est orientée par :`,
            choix: [r`La normale unitaire sortante`, r`La normale unitaire entrante`, r`N'importe quelle normale continue`, r`Le sens direct`], bonne: 0,
            explication: r`$\iiint_\Omega\mathrm{div}\,X=\iint_{\partial\Omega}\langle X,n\rangle dS$ avec $n$ sortante : la divergence mesure ce qui **sort**.` },
          { id: 'av-int-q27', question: r`La longueur d'un arc est invariante par reparamétrage :`,
            choix: [r`Croissant ou décroissant`, r`Croissant seulement`, r`Décroissant seulement`, r`Aucun`], bonne: 0,
            explication: r`$\|\tilde\gamma'(u)\|=|h'(u)|\,\|\gamma'(h(u))\|$ : la valeur absolue compense le changement de sens.` },
          { id: 'av-int-q28', question: r`Quelle interprétation de la divergence donne le cours ?`,
            choix: [r`Le flux sortant par unité de volume (densité de sources)`, r`La circulation par unité d'aire`, r`La vitesse de rotation du champ`, r`La norme du champ`], bonne: 0,
            explication: r`$\mathrm{div}\,X(a)=\lim_{r\to0}\frac{1}{\mathrm{Vol}(B(a,r))}\iint_{\partial B(a,r)}\langle X,n\rangle dS$. La circulation par unité d'aire correspond au rotationnel.` },
        ],
      },
      /* ------------------------------------------------------------------ */
      {
        id: 'av-edo',
        titre: '4. Équations différentielles et flots',
        resume: r`
## Cadre
$y'=X(t,y)$ avec $X$ continue sur $\Omega\subset\mathbb R\times\mathbb R^n$ ; problème de Cauchy $y(t_0)=a$.
- Réduction à l'ordre 1 ($Y=(y,\dots,y^{(p-1)})$) et à une équation autonome ($Z=(t,y)$).
- **Forme intégrale** : $y(t)=a+\int_{t_0}^tX(s,y(s))\,ds$, un problème de point fixe.
- **Grönwall** : $u\le C+\int_{t_0}^t\lambda u$ ⇒ $u(t)\le Ce^{\lambda(t-t_0)}$.

## Cauchy–Lipschitz
- $X$ localement lipschitzienne en $y$ (par exemple $C^1$) ⇒ existence locale et unicité.
- Preuve : Banach pour l'opérateur de Picard sur $E=\{\|y-a\|\le r\}$, avec $T=\min(\tau,\frac rM,\frac1{2k})$.
- Continuité seule : existence (Peano) mais pas unicité. Exemple : $y'=2\sqrt{|y|}$, $y(0)=0$, avec les solutions $(t-c)^2_+$.
- Unique solution maximale, définie sur un intervalle ouvert.
- **Théorème des bouts** : si $t_+<\infty$, la solution sort de tout compact.
- **Existence globale** si $\|X(t,x)\|\le\alpha(t)\|x\|+\beta(t)$. Contre-exemple : $y'=y^2$, $y(0)=1$ donne $y=\frac1{1-t}$ sur $]-\infty,1[$.
- Systèmes linéaires : solutions globales ; $y=e^{tA}a$ ; l'espace des solutions est de dimension $n$.
- **Dépendance continue** : $\|y(t)-z(t)\|\le\|y(t_0)-z(t_0)\|e^{k|t-t_0|}$. L'écart peut croître exponentiellement (chaos).

## Flot (cas autonome)
- $\varphi(t,x)$ : $\partial_t\varphi=X(\varphi)$, $\varphi(0,x)=x$. Si $X$ est $C^k$, le flot est $C^k$ sur un ouvert $\mathcal D$.
- **Propriété de groupe** : $\varphi_t\circ\varphi_s=\varphi_{t+s}$ ; $\varphi_t$ est un difféo d'inverse $\varphi_{-t}$. L'autonomie est essentielle.
- **Complet** : trajectoires définies pour tout $t$ (par exemple $X$ à support compact). Exemples : $e_1$ (translations), $Ax$ ($e^{tA}$), $(-y,x)$ (rotations). $x^2$ n'est pas complet.
- **Intégrale première** : $g$ constante sur les trajectoires ⇔ $\langle\nabla g,X\rangle=0$. Hamiltonien : $H$ est conservé.
- **Redressement** : si $X(a)\ne0$, dans de bonnes coordonnées $X=e_1$.

## Liouville
- Jacobi : $\frac{d}{dt}\det R=\det R\cdot\mathrm{Tr}(R^{-1}R')$.
- $J(t,x)=\det D_x\varphi_t=\exp\int_0^t\mathrm{div}\,X(\varphi_s(x))\,ds>0$.
- $\frac d{dt}\mathrm{Vol}(\varphi_t(A))=\int_{\varphi_t(A)}\mathrm{div}\,X$. Ainsi $\mathrm{div}\,X=0$ ⇔ le flot préserve les volumes (fluide incompressible, flot hamiltonien).
- $\det e^A=e^{\mathrm{Tr}\,A}$.
`,
        fiches: [
          { id: 'av-edo-f01', recto: r`Forme intégrale du problème de Cauchy $y'=X(t,y)$, $y(t_0)=a$.`,
            verso: r`Pour $y$ continue : $y$ est solution ⇔ $$y(t)=a+\int_{t_0}^tX(s,y(s))\,ds\quad\forall t\in I$$
Le problème devient la recherche d'un point fixe de l'opérateur de Picard.` },
          { id: 'av-edo-f02', recto: r`Énoncer le lemme de Grönwall et l'idée de la preuve.`,
            verso: r`$u\ge0$ continue, $u(t)\le C+\int_{t_0}^t\lambda u(s)\,ds$ ⇒ $u(t)\le Ce^{\lambda(t-t_0)}$.
Preuve : $v=C+\int\lambda u$ vérifie $v'\le\lambda v$, donc $ve^{-\lambda(t-t_0)}$ est décroissante.` },
          { id: 'av-edo-f03', recto: r`Énoncer le théorème de Cauchy–Lipschitz (version locale).`,
            verso: r`$X$ continue et localement lipschitzienne par rapport à $y$ (par exemple $C^1$). Pour tout $(t_0,a)\in\Omega$, il existe $T>0$ et une solution sur $]t_0-T,t_0+T[$.
Deux solutions coïncident sur l'intersection de leurs intervalles de définition.` },
          { id: 'av-edo-f04', recto: r`Preuve de Cauchy–Lipschitz : choix de $T$ et espace utilisé.`,
            verso: r`$M=\sup_{\mathcal V}\|X\|$ et $T=\min\left(\tau,\frac rM,\frac1{2k}\right)$. Sur $E=\{y\in C(I,\mathbb R^n):\|y-a\|\le r\}$, complet, l'opérateur $\Phi(y)=a+\int_{t_0}^tX(s,y)$ vérifie $\Phi(E)\subset E$ et est $\frac12$-contractant.
L'unicité découle de Grönwall avec $C=0$ et de la connexité.` },
          { id: 'av-edo-f05', recto: r`Contre-exemple d'unicité quand $X$ est seulement continue.`,
            verso: r`$y'=2\sqrt{|y|}$, $y(0)=0$ : la solution nulle, et pour tout $c\ge0$ la fonction $y_c(t)=0$ si $t\le c$, $(t-c)^2$ si $t\ge c$.
$x\mapsto2\sqrt{|x|}$ n'est pas lipschitzienne en $0$.` },
          { id: 'av-edo-f06', recto: r`Énoncer le théorème des bouts.`,
            verso: r`Soit $y:]t_-,t_+[\to\mathbb R^n$ la solution maximale. Si $t_+<+\infty$, alors pour tout compact $K\subset\Omega$ il existe $t<t_+$ avec $(t,y(t))\notin K$ : la solution sort de tout compact.` },
          { id: 'av-edo-f07', recto: r`Critère d'existence globale, et contre-exemple.`,
            verso: r`Si $\|X(t,x)\|\le\alpha(t)\|x\|+\beta(t)$ (croissance au plus linéaire), toute solution maximale est définie sur $J$ entier (Grönwall + bouts).
Contre-exemple : $y'=y^2$, $y(0)=1$ donne $y=\frac1{1-t}$, qui explose en $t=1$.` },
          { id: 'av-edo-f08', recto: r`Systèmes linéaires $y'=A(t)y+b(t)$ : que sait-on ?`,
            verso: r`Les solutions maximales sont définies sur tout $J$. Si $A$ est constante et $b=0$ : $y(t)=e^{tA}a$ avec $e^{tA}=\sum_j\frac{t^jA^j}{j!}$, et les solutions forment un espace vectoriel de dimension $n$.` },
          { id: 'av-edo-f09', recto: r`Dépendance par rapport aux conditions initiales (estimation).`,
            verso: r`$X$ $k$-lipschitzienne en $y$ :
$$\|y(t)-z(t)\|\le\|y(t_0)-z(t_0)\|\,e^{k|t-t_0|}$$
Le facteur est optimal ($y'=ky$) : l'écart peut croître exponentiellement.` },
          { id: 'av-edo-f10', recto: r`Flot d'un champ autonome : définition et propriété de groupe.`,
            verso: r`$\varphi(t,x)$ est la solution maximale de $\partial_t\varphi=X(\varphi)$, $\varphi(0,x)=x$.
$\varphi(t,\varphi(s,x))=\varphi(t+s,x)$, et $\varphi_t$ est un $C^k$-difféomorphisme d'inverse $\varphi_{-t}$. L'autonomie est essentielle : translater le temps doit laisser l'équation inchangée.` },
          { id: 'av-edo-f11', recto: r`Champ complet : définition, critère, exemples.`,
            verso: r`Toutes les trajectoires sont définies sur $\mathbb R$, et $(\varphi_t)$ est un groupe à un paramètre.
Critère : $X$ de classe $C^1$ à support compact (ou borné et globalement lipschitzien) sur $\mathbb R^n$.
Exemples : $Ax$ (flot $e^{tA}$), $(-y,x)$ (rotations). $x^2$ sur $\mathbb R$ n'est pas complet.` },
          { id: 'av-edo-f12', recto: r`Intégrale première : définition et caractérisation. Exemple ?`,
            verso: r`$g$ de classe $C^1$ constante le long de chaque trajectoire ⇔ $\langle\nabla g,X\rangle=0$ sur $U$.
Système hamiltonien $X_H=(\partial_pH,-\partial_qH)$ : $\langle\nabla H,X_H\rangle=0$, conservation de l'énergie.` },
          { id: 'av-edo-f13', recto: r`Énoncer le théorème de redressement local.`,
            verso: r`$X$ de classe $C^k$, $X(a)\ne0$. Il existe un $C^k$-difféomorphisme $\Theta:W\to V\ni a$ avec $D_w\Theta(e_1)=X(\Theta(w))$ : dans ces coordonnées, $X=e_1$ et les trajectoires sont des droites.
Construction : $\Theta(w_1,w')=\varphi(w_1,(0,w'))$.` },
          { id: 'av-edo-f14', recto: r`Formule de Jacobi (dérivée d'un déterminant).`,
            verso: r`$$\frac{d}{dt}\det R(t)=\det R(t)\cdot\mathrm{Tr}\big(R(t)^{-1}R'(t)\big)$$
car $D_I\det=\mathrm{Tr}$.` },
          { id: 'av-edo-f15', recto: r`Énoncer le théorème de Liouville (jacobien du flot).`,
            verso: r`$J(t,x)=\det D_x\varphi_t$ vérifie $\partial_tJ=\mathrm{div}\,X(\varphi_t(x))\,J$, $J(0,x)=1$, d'où
$$J(t,x)=\exp\Big(\int_0^t\mathrm{div}\,X(\varphi(s,x))\,ds\Big)>0$$` },
          { id: 'av-edo-f16', recto: r`Divergence et volume transporté par le flot.`,
            verso: r`$$\frac{d}{dt}\mathrm{Vol}(\varphi_t(A))=\int_{\varphi_t(A)}\mathrm{div}\,X\,dV$$
Ainsi $\mathrm{div}\,X=0$ ⇔ le flot préserve les volumes (fluide incompressible, flot hamiltonien).` },
          { id: 'av-edo-f17', recto: r`Réduire une EDO d'ordre $p$, puis une EDO non autonome, à un système autonome d'ordre 1.`,
            verso: r`- Ordre $p$ : $Y=(y,y',\dots,y^{(p-1)})$ et $Y'=(Y_2,\dots,Y_p,F(t,Y))$.
- Non autonome : $Z=(t,y)$ et $Z'=(1,X(Z))$.` },
        ],
        qcm: [
          { id: 'av-edo-q01', question: r`Intervalle maximal de la solution de $y'=y^2$, $y(0)=1$ ?`,
            choix: [r`$]-\infty,1[$`, r`$\mathbb R$`, r`$]-1,1[$`, r`$[0,1[$`], bonne: 0,
            explication: r`$y=\frac1{1-t}$ explose en $t=1$ et reste définie pour tout $t<1$. La croissance quadratique empêche l'existence globale.` },
          { id: 'av-edo-q02', question: r`Le problème $y'=|y|^\alpha$, $y(0)=0$, admet une unique solution si et seulement si :`,
            choix: [r`$\alpha\ge1$`, r`$\alpha>0$`, r`$\alpha<1$`, r`$\alpha=2$`], bonne: 0,
            explication: r`Pour $\alpha\ge1$, $|y|^\alpha$ est localement lipschitzienne : Cauchy–Lipschitz s'applique. Pour $0<\alpha<1$, on recolle $0$ et $c_\alpha(t-c)^{1/(1-\alpha)}$, ce qui donne une infinité de solutions.` },
          { id: 'av-edo-q03', question: r`Oscillateur amorti $X(x,y)=(y,-x-\varepsilon y)$, $\varepsilon>0$. L'aire d'un domaine transporté par le flot :`,
            choix: [r`Décroît comme $e^{-\varepsilon t}$`, r`Est constante`, r`Croît comme $e^{\varepsilon t}$`, r`Décroît linéairement`], bonne: 0,
            explication: r`$\mathrm{div}\,X=0+(-\varepsilon)=-\varepsilon$, donc $J=e^{-\varepsilon t}$ par Liouville. Pour $\varepsilon=0$ (hamiltonien), l'aire est conservée.` },
          { id: 'av-edo-q04', question: r`Pour $A\in M_n(\mathbb R)$, que vaut $\det e^{A}$ ?`,
            choix: [r`$e^{\mathrm{Tr}\,A}$`, r`$e^{\det A}$`, r`$\det A$`, r`$1$`], bonne: 0,
            explication: r`Liouville pour $X(x)=Ax$, avec $\mathrm{div}\,X=\mathrm{Tr}\,A$ constante : $\det e^{tA}=e^{t\,\mathrm{Tr}\,A}$. Il suffit de prendre $t=1$.` },
          { id: 'av-edo-q05', question: r`Quel est le flot du champ $X(x,y)=(-y,x)$ ?`,
            choix: [r`Les rotations d'angle $t$`, r`Les translations de vecteur $t(-y,x)$`, r`Les homothéties de rapport $e^t$`, r`Il n'est pas complet`], bonne: 0,
            explication: r`$x'=-y$, $y'=x$ donne $(x,y)(t)=R_t(x_0,y_0)$, la rotation d'angle $t$. C'est $e^{tA}$ avec $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.` },
          { id: 'av-edo-q06', question: r`$g$ est une intégrale première de $X$ si et seulement si :`,
            choix: [r`$\langle\nabla g,X\rangle=0$`, r`$\nabla g=X$`, r`$\mathrm{div}\,X=0$`, r`$\nabla g=0$`], bonne: 0,
            explication: r`$\frac d{dt}g(\varphi_t(x))=\langle\nabla g,X\rangle(\varphi_t(x))$ doit s'annuler partout.` },
          { id: 'av-edo-q07', question: r`Pourquoi un champ $C^1$ à support compact sur $\mathbb R^n$ est-il complet ?`,
            choix: [r`Il est borné, donc à croissance au plus linéaire`, r`Il est de divergence nulle`, r`Il est lipschitzien de rapport $<1$`, r`Il n'a pas de point singulier`], bonne: 0,
            explication: r`$\|X\|\le M=\beta$ et $\alpha=0$ : le critère d'existence globale s'applique (Grönwall et théorème des bouts).` },
          { id: 'av-edo-q08', question: r`Un flot hamiltonien $X_H=(\partial_pH,-\partial_qH)$ :`,
            choix: [r`Conserve $H$ et le volume de l'espace des phases`, r`Conserve $H$ mais pas le volume`, r`Conserve le volume mais pas $H$`, r`Ne conserve ni l'un ni l'autre`], bonne: 0,
            explication: r`$\langle\nabla H,X_H\rangle=0$ (énergie conservée), et $\mathrm{div}\,X_H=\sum\partial_q\partial_pH-\partial_p\partial_qH=0$ par Schwarz (Liouville).` },
          { id: 'av-edo-q09', question: r`Dans quelle situation l'estimation $\|y(t)-z(t)\|\le\|y(t_0)-z(t_0)\|e^{k|t-t_0|}$ est-elle une égalité ?`,
            choix: [r`$y'=ky$`, r`$y'=-ky$`, r`$y'=k$`, r`$y'=y^2$`], bonne: 0,
            explication: r`Pour $y'=ky$, $y(t)-z(t)=(y_0-z_0)e^{k(t-t_0)}$ : le facteur exponentiel est atteint.` },
          { id: 'av-edo-q10', question: r`Une solution de $y'=X(t,y)$ est :`,
            choix: [r`Un intervalle ouvert non vide $I$ et $y:I\to\mathbb R^n$ de classe $C^1$ avec $(t,y(t))\in\Omega$ et $y'(t)=X(t,y(t))$`, r`Une fonction $y$ continue sur $\mathbb R$ vérifiant l'équation`, r`Un point $a$ tel que $X(t,a)=0$`, r`Une fonction $y$ définie sur un intervalle fermé`], bonne: 0,
            explication: r`L'intervalle fait partie de la donnée d'une solution. Un point tel que $X=0$ donne une solution **constante**, mais ce n'est qu'un cas particulier.` },
          { id: 'av-edo-q11', question: r`L'équation $y'=X(t,y)$ est dite autonome si :`,
            choix: [r`$X$ ne dépend pas de $t$`, r`$X$ ne dépend pas de $y$`, r`$X$ est linéaire en $y$`, r`$X$ est constante`], bonne: 0,
            explication: r`$y'=X(y)$. C'est ce qui rend le flot invariant par translation dans le temps (propriété de groupe).` },
          { id: 'av-edo-q12', question: r`$X$ est localement lipschitzienne par rapport à la seconde variable si, près de chaque point :`,
            choix: [r`$\|X(t,x)-X(t,\tilde x)\|\le k\|x-\tilde x\|$`, r`$\|X(t,x)-X(s,x)\|\le k|t-s|$`, r`$\|X(t,x)\|\le k\|x\|$`, r`$\|X(t,x)-X(t,\tilde x)\|<\|x-\tilde x\|$`], bonne: 0,
            explication: r`La constante $k$ contrôle la variation en $x$, **à $t$ fixé**, sur un cylindre $[t_0-\tau,t_0+\tau]\times\bar B(a,r)$. Aucune condition en $t$ n'est demandée.` },
          { id: 'av-edo-q13', question: r`Quelle condition simple garantit que $X$ est localement lipschitzienne en $y$ ?`,
            choix: [r`$X$ de classe $C^1$`, r`$X$ continue`, r`$X$ bornée`, r`$X$ monotone`], bonne: 0,
            explication: r`Lemme 4.6 : la dérivée partielle est bornée sur un cylindre compact, puis on applique l'inégalité des accroissements finis. La continuité seule ne suffit pas ($2\sqrt{|y|}$).` },
          { id: 'av-edo-q14', question: r`Si $X$ est seulement continue (sans Lipschitz), le problème de Cauchy a :`,
            choix: [r`Au moins une solution, mais pas forcément unique`, r`Une unique solution`, r`Aucune solution en général`, r`Une unique solution, mais pas forcément globale`], bonne: 0,
            explication: r`Théorème de Cauchy–Peano (non démontré dans le cours). Exemple de non-unicité : $y'=2\sqrt{|y|}$, $y(0)=0$.` },
          { id: 'av-edo-q15', question: r`Une solution $y:I\to\mathbb R^n$ est maximale si :`,
            choix: [r`Aucune solution ne la prolonge sur un intervalle strictement plus grand`, r`Elle est définie sur $\mathbb R$`, r`Elle est bornée`, r`Elle atteint la plus grande valeur possible`], bonne: 0,
            explication: r`Maximale ne veut pas dire globale : $y=\frac1{1-t}$ est maximale sur $]-\infty,1[$.` },
          { id: 'av-edo-q16', question: r`L'intervalle de définition d'une solution maximale (sous Cauchy–Lipschitz) est :`,
            choix: [r`Ouvert`, r`Fermé`, r`Toujours $\mathbb R$`, r`Toujours borné`], bonne: 0,
            explication: r`Si la solution était définie jusqu'en $\beta$ inclus, Cauchy–Lipschitz en $(\beta,y(\beta))$ permettrait de la prolonger au-delà.` },
          { id: 'av-edo-q17', question: r`Théorème des bouts : si $t_+<+\infty$, alors :`,
            choix: [r`$(t,y(t))$ sort de tout compact de $\Omega$ quand $t\to t_+$`, r`$\|y(t)\|\to+\infty$ nécessairement`, r`$y(t)$ converge quand $t\to t_+$`, r`$y$ est périodique`], bonne: 0,
            explication: r`Sortir de tout compact de $\Omega$ peut aussi signifier s'approcher du **bord** de $\Omega$, sans explosion. Et si $y$ convergeait, on pourrait la prolonger.` },
          { id: 'av-edo-q18', question: r`Lemme de Grönwall : si $u\ge0$ est continue et $u(t)\le C+\int_{t_0}^t\lambda u(s)\,ds$, alors :`,
            choix: [r`$u(t)\le Ce^{\lambda(t-t_0)}$`, r`$u(t)\le C+\lambda(t-t_0)$`, r`$u(t)\ge Ce^{\lambda(t-t_0)}$`, r`$u(t)\le C\lambda$`], bonne: 0,
            explication: r`Avec $C=0$ on obtient $u\equiv0$ : c'est ainsi qu'on démontre l'unicité dans Cauchy–Lipschitz.` },
          { id: 'av-edo-q19', question: r`Propriété de groupe du flot d'un champ autonome :`,
            choix: [r`$\varphi_t\circ\varphi_s=\varphi_{t+s}$`, r`$\varphi_t\circ\varphi_s=\varphi_{ts}$`, r`$\varphi_t+\varphi_s=\varphi_{t+s}$`, r`$\varphi_t\circ\varphi_s=\varphi_t$`], bonne: 0,
            explication: r`Suivre le flot pendant $s$ puis pendant $t$, c'est le suivre pendant $t+s$. En particulier $\varphi_t^{-1}=\varphi_{-t}$ et $\varphi_0=\mathrm{id}$.` },
          { id: 'av-edo-q20', question: r`Un champ de vecteurs $X$ est dit complet si :`,
            choix: [r`Toutes ses trajectoires sont définies pour tout $t\in\mathbb R$`, r`$X$ est borné`, r`$\mathrm{div}\,X=0$`, r`$X$ ne s'annule jamais`], bonne: 0,
            explication: r`Borné (et $C^1$) est une condition **suffisante** sur $\mathbb R^n$, pas la définition. Le flot forme alors un groupe à un paramètre.` },
          { id: 'av-edo-q21', question: r`Une intégrale première de $X$ est une fonction $g$ de classe $C^1$ :`,
            choix: [r`Constante le long de chaque trajectoire`, r`Telle que $X=\nabla g$`, r`Nulle sur les trajectoires`, r`Telle que $\mathrm{div}(gX)=0$`], bonne: 0,
            explication: r`Elle peut prendre des valeurs différentes sur des trajectoires différentes. Caractérisation : $\langle\nabla g,X\rangle=0$.` },
          { id: 'av-edo-q22', question: r`Quelle est l'hypothèse du théorème de redressement local en $a$ ?`,
            choix: [r`$X(a)\ne0$`, r`$X(a)=0$`, r`$\mathrm{div}\,X(a)=0$`, r`$X$ complet`], bonne: 0,
            explication: r`Hors des points singuliers, un champ est localement équivalent au champ constant $e_1$. Toute la complexité se concentre près des zéros de $X$.` },
          { id: 'av-edo-q23', question: r`Selon Liouville, $J(t,x)=\det D_x\varphi_t$ vérifie :`,
            choix: [r`$\partial_tJ=\mathrm{div}\,X(\varphi_t(x))\,J$ et $J(0,x)=1$`, r`$\partial_tJ=J$ et $J(0,x)=0$`, r`$J\equiv1$ pour tout champ`, r`$\partial_tJ=\mathrm{Tr}(X)$`], bonne: 0,
            explication: r`D'où $J=\exp\int_0^t\mathrm{div}\,X(\varphi_s(x))\,ds>0$. On a $J\equiv1$ seulement si $\mathrm{div}\,X=0$.` },
          { id: 'av-edo-q24', question: r`Un point singulier d'un champ de vecteurs $X$ est un point $a$ où :`,
            choix: [r`$X(a)=0$`, r`$X$ n'est pas défini`, r`$\mathrm{div}\,X(a)=0$`, r`$X$ n'est pas différentiable`], bonne: 0,
            explication: r`En un tel point, la trajectoire issue de $a$ est constante : $\varphi_t(a)=a$ pour tout $t$.` },
        ],
      },
    ],
  };
})());
